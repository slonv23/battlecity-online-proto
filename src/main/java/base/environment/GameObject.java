package base.environment;

import base.GameData;
import base.GameEngine;

import java.util.List;
import java.util.function.Function;
import java.lang.Math;

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
    //public PSVector oldState = new PSVector();
    //public PSVector state = new PSVector();

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

    }

    public boolean overlaps(double x1, double w1, double x2, double w2) {
        double x11 = x1 + w1;
        double x22 = x2 + w2;
        return ((x2 <= x1 && x1 <= x22) || (x2 <= x11 && x11 <= x22));
    }

    public void recalculatePos(int milis){
        /*if(intersects) {
            intersects = false;
            return;
        }*/
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

        // vx = (d % 2) * (-d + 2)
        // vy = ((d + 1) % 2 ) * (d - 1)
    }

    public void stop(){
        vx = 0;
        vy = 0;
    }

    public void onIntersect(GameObject object) {}

    public abstract List<Rect> getPolygonMesh();

    public void generateCurrentStateEvent(){

    }
}
