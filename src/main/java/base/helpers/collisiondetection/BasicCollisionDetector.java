package base.helpers.collisiondetection;

import base.GameEngine;
import base.environment.GameObject;
import base.environment.Rect;

import java.util.List;

public class BasicCollisionDetector implements CollisionDetector {
    static double maxTime = GameEngine.minCalculationTimeDiff + 1;

    @Override
    public CollisionInfo detectCollision(GameObject obj1, GameObject obj2) {
        double minIntersectionTime = maxTime, intTime;
        boolean obj1Impact = false, obj2Impact = false;

        List<Rect> obj1Mesh = obj1.getPolygonMesh();
        List<Rect> obj2Mesh = obj2.getPolygonMesh();
        for (Rect obj1Rect : obj1Mesh) {
            for (Rect obj2Rect : obj2Mesh) {
                double x11 = obj1Rect.getX(obj1.xPos);
                double x12 = x11 + obj1Rect.w;
                double y11 = obj1Rect.getY(obj1.yPos);
                double y12 = y11 + obj1Rect.h;

                double x21 = obj2Rect.getX(obj2.xPos);
                double x22 = x21 + obj2Rect.w;
                double y21 = obj2Rect.getY(obj2.yPos);
                double y22 = y21 + obj2Rect.h;

                double vy;
                double sy;
                double vx;
                double sx;
                int impactFactorY;
                int impactFactorX;

                /**
                 * the case when object move along one axe
                 * y axe
                 * p1 < p2
                 */
                if(y11 <= y21) {
                    vy = obj1.vy - obj2.vy;
                    sy = y21 - y12;
                    impactFactorY = 1;
                } else {
                    vy =  obj2.vy - obj1.vy;
                    sy = y11 - y22;
                    impactFactorY = -1;
                }

                if(x11 <= x21) {
                    vx = obj1.vx - obj2.vx;
                    sx = x21 - x12;
                    impactFactorX = 1;
                } else {
                    vx =  obj2.vx - obj1.vx;
                    sx = x11 - x22;
                    impactFactorX = -1;
                }

                if(vy > 0) {
                    intTime = sy/vy;
                    if(intTime < minIntersectionTime && sx < 0) {
                        obj1Impact = false; obj2Impact = false;
                        minIntersectionTime = intTime;
                        if(impactFactorY * obj1.vy > 0) {
                            obj1Impact = true;
                        }
                        if(-impactFactorY * obj2.vy > 0) {
                            obj2Impact = true;
                        }
                        continue;
                    }
                }

                if(vx > 0) {
                    intTime = sx/vx;
                    if(intTime < minIntersectionTime && sy < 0) {
                        obj1Impact = false; obj2Impact = false;
                        minIntersectionTime = intTime;
                        if(impactFactorX * obj1.vx > 0) {
                            obj1Impact = true;
                        }
                        if(-impactFactorX * obj2.vx > 0) {
                            obj2Impact = true;
                        }
                        // continue;
                    }
                }
            }
        }

        if(minIntersectionTime <= GameEngine.minCalculationTimeDiff) {
            return new CollisionInfo(minIntersectionTime, obj1Impact, obj2Impact);
        }

        return null;
    }
}
