package base.helpers;

import base.environment.GameObject;

public interface CollisionDetector {
    public double detectCollision(GameObject obj1, GameObject obj2);
}
