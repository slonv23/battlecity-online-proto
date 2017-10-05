package base.environment;

import base.GameData;
import base.environment.GameObject;
import org.apache.commons.lang3.tuple.Pair;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class GamePlayer extends GameObject {
    static final int MOVE = 1;
    static final int STOP = 2;
    static final int FIRE = 3;

    public static final double sizeX = 3;
    public static final double sizeY = 3;

    public static ArrayList<Rect> polygonMesh = new ArrayList<Rect>() {{
        add(new Rect(0, 0, 3, 3));
        //add("B");
        //add("C");
    }};

    public String playerId;

    public LinkedList<Action> incomeActions = new LinkedList<>();
    public LinkedList<Action> processedActions = new LinkedList<>();

    public static int objectType = GameObject.OBJTYPE_TANK;

    public GamePlayer(String playerId){
        super();
        this.playerId = playerId;
    }

    @Override
    public int getType() {
        return objectType;
    }

    @Override
    public List<Rect> getPolygonMesh() {
        return polygonMesh;
    }

    public void actionMove(int direction) {
        incomeActions.add(new ActionMove(direction));
    }

    public void actionStop() {
        /*for (int i = 0; i < this.processedActions.size(); i++) {
            if(this.processedActions.get(i) instanceof ActionMove) {
                this.processedActions.remove(i);
            }
        }*/

        incomeActions.add(new ActionStop());
    }

    public void actionStop(double offset) {
        incomeActions.add(new ActionStop(offset));
    }

    public void actionFire() {
        incomeActions.add(new ActionFire());
    }

    class ActionFire extends Action {
        @Override
        public void applyAction() {
            int dx = 0;
            int dy = 0;
            switch(GamePlayer.this.direction) {
                case 0:
                    dx = 1;
                    dy = -1;
                    //vy = -V;
                    break;
                case 1:
                    dx = 3;
                    dy = 1;
                    //vx = V;
                    break;
                case 2:
                    dx = 1;
                    dy = 3;
                    //vy = V;
                    break;
                case 3:
                    dx = -1;
                    dy = 1;
                    //vx = -V;
                    break;
            }

            GameData.lunchFireball(GamePlayer.this.oldXPos+dx, GamePlayer.this.oldYPos+dy, GamePlayer.this.direction);
            GamePlayer.this.processedActions.remove(this);
        }

        @Override
        public int getId() {
            return GamePlayer.FIRE;
        }

        @Override
        public List<Pair<String, String>> getActionData() {
            return null;
            //return new ArrayList<>();
        }
    }

    class ActionMove extends Action {
        public int direction;

        public ActionMove(int direction) {
            this.direction = direction;
        }

        @Override
        public int getId() {
            return GamePlayer.MOVE;
        }

        @Override
        public void applyAction() {
            for (int i = 0; i < GamePlayer.this.processedActions.size(); i++) {
                Action a = GamePlayer.this.processedActions.get(i);
                if(a instanceof ActionMove || a instanceof ActionStop) {
                    GamePlayer.this.processedActions.remove(i);
                }
            }

            GamePlayer.this.move(direction);
        }

        @Override
        public List<Pair<String, String>> getActionData() {
            //List<Pair<String, String>> data = new ArrayList<>();
            //data.add(Pair.of("d", String.valueOf(direction)));
            //return data;
            return null;
        }
    }

    class ActionStop extends Action {
        @Override
        public int getId() {
            return GamePlayer.STOP;
        }

        public ActionStop() {}

        public ActionStop(double offset) {
            this.offset = offset;
        }

        @Override
        public void applyAction() {
            for (int i = 0; i < GamePlayer.this.processedActions.size(); i++) {
                if(GamePlayer.this.processedActions.get(i) instanceof ActionMove) {
                    GamePlayer.this.processedActions.remove(i);
                }
            }

            GamePlayer.this.processedActions.remove(this);
            GamePlayer.this.stop();
        }

        @Override
        public List<Pair<String, String>> getActionData() {
            return null;
            //return new ArrayList<>();
        }
    }
}
