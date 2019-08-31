package base.environment;

import base.helpers.collisiondetection.BasicCollisionDetector;
import base.helpers.collisiondetection.CollisionDetector;
import base.helpers.collisiondetection.CollisionInfo;
import base.helpers.collisiondetection.SimpleCollisionDetector;

import java.util.List;

public abstract class GameObject {
    public static final int OBJTYPE_TANK = 1;
    public static final int OBJTYPE_FIREBALL = 2;
    //public static final double V = 0.03;
    public static final double V = 0.006; //0.003;
    public static int objectCount = 0;

    public int id;
    //public int objectType;

    public double oldXPos;
    public double oldYPos;

    public double xPos;
    public double yPos;
    public double vx = 0;
    public double vy = 0;

    public CollisionDetector collisionDetector = new BasicCollisionDetector();

    public boolean intersects = false;
    public double itersectTimeOffset;

    public double sizeX;
    public double sizeY;

    public int direction;

    public GameObject() {
        id = ++objectCount;
    }

    public abstract int getType();

    public double getSpeed() {
        return V;
    }

    public int compareTo(Object obj)
    {
        GameObject tmp = (GameObject)obj;
        if(this.xPos < tmp.xPos)
            return -1;
        else if(this.xPos > tmp.xPos )
            return 1;
        else {
            if(this.yPos < tmp.yPos)
                return -1;
            else if(this.yPos > tmp.yPos)
                return 1;
            else
                return 0;
        }
    }

    public void detectCollision(List<GameObject> objectsToCheck, int milis) {
        for (GameObject objToCheck:
             objectsToCheck) {
            CollisionInfo collisionInfo;
            if((collisionInfo = collisionDetector.detectCollision(this, objToCheck)) != null) {
                this.onIntersect(objToCheck, collisionInfo.intersectionTime, collisionInfo.obj1Impact);
                objToCheck.onIntersect(this, collisionInfo.intersectionTime, collisionInfo.obj2Impact);
            }
        }
    }

    public void recalculatePos(int milis){
        if(intersects) {
            oldXPos = xPos;
            oldYPos = yPos;
            xPos += itersectTimeOffset * vx;
            yPos += itersectTimeOffset * vy;
            if(this instanceof GamePlayer)
                ((GamePlayer) this).actionStop(itersectTimeOffset);
            intersects = false;
        } else {
            oldXPos = xPos;
            oldYPos = yPos;
            xPos += milis * vx;
            yPos += milis * vy;
        }
    }

    public void move(int direction){
        this.direction = direction;

        vx = 0;
        vy = 0;

        switch(direction) {
            case 0:
                vy = -getSpeed(); //V;
                break;
            case 1:
                vx = getSpeed(); //V;
                break;
            case 2:
                vy = getSpeed(); //V;
                break;
            case 3:
                vx = -getSpeed(); //-V;
                break;
        }
    }

    public void stop(){
        vx = 0;
        vy = 0;
    }

    public void onIntersect(GameObject object, double timeOffset, boolean impacts) {
        if(impacts) {
            intersects = true;
            itersectTimeOffset = timeOffset;
        }
        //object.onIntersect(this);
    }

    public abstract List<Rect> getPolygonMesh();

    public void generateCurrentStateEvent(){

    }
}
