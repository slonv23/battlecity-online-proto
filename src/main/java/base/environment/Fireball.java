package base.environment;

import base.GameData;

import java.util.ArrayList;
import java.util.List;

public class Fireball extends GameObject {
    public static int objectType = GameObject.OBJTYPE_FIREBALL;

    public static final double V = 0.009; //0.003;

    public static ArrayList<Rect> polygonMesh = new ArrayList<Rect>() {{
        add(new Rect(0, 0, 1, 1));
        //add("B");
        //add("C");
    }};

    @Override
    public double getSpeed() {
        return V;
    }

    @Override
    public int getType() {
        return objectType;
    }

    @Override
    public List<Rect> getPolygonMesh() {
        return polygonMesh;
    }

    @Override
    public void onIntersect(GameObject object) {
        //synchronized (GameData.class) {
            GameData.objectsToRemove.add(object);
            GameData.objectsToRemove.add(this);
            //GameData.objects.remove(object);
            //GameData.objects.remove(this);
        //}
        System.out.println("ok");
        //super.onIntersect(object);
    }
}
