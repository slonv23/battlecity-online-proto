package base;

import base.environment.Action;
import base.environment.GameObject;
import base.environment.GamePlayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Component
public class GameEngine extends Thread {
    private Thread t;
    private String threadName;
    public static int minCalculationTimeDiff = 100; //250; // 1000

    @Autowired
    Dispatcher dispatcher;

    GameEngine(@Value("gameLoopThread") String threadName) {
        this.threadName = threadName;
        System.out.println("Creating " +  threadName);
    }


    public void updateWorld(){
        //this.detectCollisions(); - it is in one loop ->
        // pathIsBlocked - ?
        /*for (int i = 0; i < dataModel.objects.size(); i++) {
            dataModel.objects.get(i).recalculatePos(this.minDiff);

        }*/
        synchronized(GameData.class) {
            LinkedList<GameObject> objectToCheck = new LinkedList<>(GameData.objects);
            //for (GameObject obj : objectToCheck) { // optimization ?
            for (GameObject obj : GameData.objects) {
                //objectToCheck.remove(i);
                objectToCheck.poll().detectCollision(objectToCheck, this.minCalculationTimeDiff);
            }
            //for (GameObject obj : GameData.objects) {
            //    obj.detectCollision(GameData.objects, this.minCalculationTimeDiff); // ? think of it a bit (if receive stop and then move in interval within ticks)
            //}

            for (GameObject obj : GameData.objects) {
                obj.recalculatePos(this.minCalculationTimeDiff); // ? think of it a bit (if receive stop and then move in interval within ticks)
            }

            for (GamePlayer player : GameData.players.values()) {
                player.processActions();
            }

            for (GameObject obj : GameData.objectsToRemove) {
                GameData.objects.remove(obj);
            }
            GameData.objectsToRemove = new ArrayList<>();
        }
    }

    public void spawnPlayers() {
        for (int i = 0; i < GameData.spawnPool.size(); i++) {
            GamePlayer newPlayer = GameData.spawnPool.get(i);

            double x = Math.random() * (GameData.worldW - newPlayer.sizeX);
            double y = Math.random() * (GameData.worldH - newPlayer.sizeY);

            // check if spawning object is not overlapped with others
            // ...

            newPlayer.xPos = x;
            newPlayer.yPos = y;

            GameData.endSpawn(i);

            // System.out.println("Spawned");
        }
    }

    public void run() {
        System.out.println("Running " +  threadName );

        long tick, now, diff;
        try {
            while(!t.isInterrupted()){
                tick = System.currentTimeMillis();

                synchronized(GameData.class) {
                    this.updateWorld();

                    this.spawnPlayers();

                    now = System.currentTimeMillis();
                    diff = this.minCalculationTimeDiff - (now - tick);

                    if(diff < 0){
                        /**
                         * TODO: compensate longer calculation time
                         * by adding bias for a time of next snapshot of game world (a half time of min diff)
                         */
                    }
                    //System.out.println("calc time: " + (now - tick));
                    /*if(this.events.size() != 0){
                        messageProcessor.events = "[" + String.join(",", this.events) + "]";
                        eventsDispatcher.dispatch(now + diff);
                        //this.events = new ArrayList<String>();
                    }*/

                    dispatcher.dispatchGameWorldState(now + diff);
                }

                t.sleep(diff);
            }
        } catch (InterruptedException e) {
            t.interrupt();
            System.out.println("Thread " +  threadName + " interrupted.");
        }

        System.out.println("Thread " +  threadName + " exiting.");
    }

    public void start () {
        System.out.println("Starting " +  threadName );
        if (t == null) {
            t = new Thread(this, threadName);
            t.start();
        }
    }

    public void interrupt () {
        t.interrupt();
    }
}
