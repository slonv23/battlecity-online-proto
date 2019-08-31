package base.helpers.collisiondetection;

public class CollisionInfo {
    public double intersectionTime;

    public boolean obj1Impact;
    public boolean obj2Impact;

    // public double obj1ImpactDepth;
    // public double obj2ImpactDepth;

    CollisionInfo(double intersectionTime, boolean obj1Impact, boolean obj2Impact) {
        this.intersectionTime = intersectionTime;
        this.obj1Impact = obj1Impact;
        this.obj2Impact = obj2Impact;
    }
}
