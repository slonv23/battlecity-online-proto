package base.environment;

import base.GameData;
import base.environment.GameObject;
import org.apache.commons.lang3.tuple.Pair;

import java.util.*;

public class GamePlayer extends GameObject {
    static final int MOVE = 0;
    static final int STOP = 1;
    static final int FIRE = 2;

    public static final double sizeX = 3;
    public static final double sizeY = 3;

    public static ArrayList<Rect> polygonMesh = new ArrayList<Rect>() {{
        add(new Rect(0, 0, 3, 3));
        //add("B");
        //add("C");
    }};

    public String playerId;

    private Action[] actions = new Action[3];
    public Action[] processedActions = new Action[3];

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

    public void processActions() {
        Arrays.fill(processedActions, null);
        for (int i = 0; i < this.actions.length; i++) {
            Action action = actions[i];
            if(action == null)
                continue;
            if(!action.isProcessed())
                action.applyAction();
            processedActions[action.getId()] = action;
        }
    }

    public void actionMove(int direction) {
        this.actions[STOP] = null;
        this.actions[MOVE] = new ActionMove(direction);
    }

    public void actionStop() {
        this.actions[MOVE] = null;
        this.actions[STOP] = new ActionStop();
    }

    public void actionStop(double offset) {
        this.actions[MOVE] = null;
        this.actions[STOP] = new ActionStop(offset);
    }

    public void actionFire() {
        this.actions[FIRE] = new ActionFire();
    }

    class ActionFire extends Action {
        @Override
        public int getId() {
            return GamePlayer.FIRE;
        }

        @Override
        public void applyAction() {
            GamePlayer.this.actions[GamePlayer.FIRE] = null;

            //int dx = 0;
            //int dy = 0;
            double dx = 0;
            double dy = 0;
            switch(GamePlayer.this.direction) {
                case 0: dx = 1; dy = -1; break;
                case 1: dx = 3; dy = 1; break;
                case 2: dx = 1; dy = 3; break;
                case 3: dx = -1; dy = 1; break;
            }

            //GameData.lunchFireball(GamePlayer.this.oldXPos+dx, GamePlayer.this.oldYPos+dy, GamePlayer.this.direction);
            GameData.lunchFireball(GamePlayer.this.xPos+dx, GamePlayer.this.yPos+dy, GamePlayer.this.direction);
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
            super.applyAction();

            GamePlayer.this.move(direction);
        }
    }

    class ActionStop extends Action {
        @Override
        public int getId() {
            return GamePlayer.STOP;
        }

        public ActionStop() {}

        public ActionStop(double offset) {
            super.setOffset(offset);
            /*this.offset = offset;*/
        }

        @Override
        public void applyAction() {
            GamePlayer.this.actions[GamePlayer.STOP] = null;

            GamePlayer.this.stop();
        }
    }
}
