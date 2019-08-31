package base.helpers.collisiondetection;

import base.environment.GameObject;

public interface CollisionDetector {
    public CollisionInfo detectCollision(GameObject obj1, GameObject obj2);
}
