package base.helpers.collisiondetection;

import base.GameEngine;
import base.environment.GameObject;
import base.environment.Rect;

import java.util.List;

public class SimpleCollisionDetector {//implements CollisionDetector {
    //@Override
    public double detectCollision(GameObject obj1, GameObject obj2) {
        if ((obj1.vx * obj2.vy - obj1.vy * obj2.vx) != 0) {
            return twoDirectionDetectionAlgorithm(obj1, obj2);
        } else
            return oneDirectionDetectionAlgorithm(obj1, obj2);
    }

    public double oneDirectionDetectionAlgorithm(GameObject obj1, GameObject obj2) {
        double intersectionTime;

        List<Rect> obj1Mesh = obj1.getPolygonMesh();
        List<Rect> obj2Mesh = obj2.getPolygonMesh();
        for (Rect obj1Rect : obj1Mesh) {
            for (Rect obj2Rect : obj2Mesh) {
                if (obj1.vx == 0) {
                    if (!checkAreasOverlaps(obj1.xPos, obj1Rect.w, obj2.xPos, obj2Rect.w))
                        continue;

                    double vy;
                    if (obj1.vy > 0) {
                        vy = obj1.vy - obj2.vy;
                        intersectionTime = (obj2.yPos - obj1.yPos - obj1Rect.h) / vy;
                        if (intersectionTime < 0 || intersectionTime > GameEngine.minCalculationTimeDiff)
                            continue;
                        else {
                            return intersectionTime;
                        }
                    } else if (obj1.vy < 0) {
                        vy = obj2.vy - obj1.vy;
                        intersectionTime = (obj1.yPos - obj2.yPos - obj2Rect.h) / vy;
                        if (intersectionTime < 0 || intersectionTime > GameEngine.minCalculationTimeDiff)
                            continue;
                        else {
                            return intersectionTime;
                        }
                    }
                } else if (obj1.vy == 0) {
                    if (!checkAreasOverlaps(obj1.yPos, obj1Rect.h, obj2.yPos, obj2Rect.h))
                        continue;

                    double vx;
                    if (obj1.vx > 0) {
                        vx = obj1.vx - obj2.vx;
                        intersectionTime = (obj2.xPos - obj1Rect.w - obj1.xPos) / vx;
                        if (intersectionTime < 0 || intersectionTime > GameEngine.minCalculationTimeDiff)
                            continue;
                        else {
                            return intersectionTime;
                        }
                    } else if (obj1.vx < 0) {
                        vx = obj2.vx - obj1.vx;
                        intersectionTime = (obj1.xPos - obj2.xPos - obj2Rect.w) / vx;
                        if (intersectionTime < 0 || intersectionTime > GameEngine.minCalculationTimeDiff)
                            continue;
                        else {
                            return intersectionTime;
                        }
                    }
                }
            }
        }

        return -1;
    }

    // not work
    public double twoDirectionDetectionAlgorithm(GameObject obj1, GameObject obj2) {
        double intersectionTime = 1000;

        // calc t1, t2 for centers (not centers at all) of objects
        // and then relative on this calc offsets ...
        double t11 = 0, t12 = 0, t21 = 0, t22 = 0;
        List<Rect> obj1Mesh = obj1.getPolygonMesh();
        List<Rect> obj2Mesh = obj2.getPolygonMesh(); //this -> obj1, obj -> obj2
        for (Rect obj1Rect : obj1Mesh) {
            for (Rect obj2Rect : obj2Mesh) {
                // ... here
                t12 = ((obj1.yPos - obj2.yPos) * obj1.vx - obj1.vy * (obj2.xPos - obj1.xPos)) / (obj1.vx * obj2.vy - obj1.vy * obj2.vx);

                /*if (t12 < GameEngine.minCalculationTimeDiff) {
                    System.out.println("okey.."); // add optimization
                    System.out.println(t12);
                }*/

                if (obj1.vx != 0)
                    t21 = (obj2.xPos - obj1.xPos + obj2.vx * t12) / (obj1.vx);
                else
                    t21 = (obj2.yPos - obj1.yPos + obj2.vy * t12) / (obj1.vy);

                if (obj1.vy == 0) {
                    t22 = obj2Rect.w / obj1.vx;
                    if (obj1.xPos < obj2.xPos) {
                        t22 = t21 + t22;
                    } else {
                        t22 = t21 - t22;
                    }

                    t11 = obj1Rect.h / obj2.vy;
                    if (obj1.yPos < obj2.yPos) {
                        t11 = t12 - t11;
                    } else {
                        t11 = t12 + t11;
                    }
                } else {
                    t22 = obj1Rect.w / obj2.vx;
                    if (obj2.xPos < obj1.xPos) {
                        t22 = t21 + t22;
                    } else {
                        t22 = t21 - t22;
                    }

                    t11 = obj2Rect.h / obj1.vy;
                    if (obj2.yPos < obj1.yPos) {
                        t11 = t12 - t11;
                    } else {
                        t11 = t12 + t11;
                    }
                }

                if ((t11 == 0) || (t12 == 0) || (t21 == 0) || (t22 == 0)) {
                    continue;
                }

                double b;
                if (t12 < t11) {
                    b = t11;
                    t11 = t12;
                    t12 = b;
                }

                if (t22 < t21) {
                    b = t21;
                    t21 = t22;
                    t22 = b;
                }

                if (t11 < t22 && t22 < t12) {
                    if (t22 < intersectionTime) {
                        intersectionTime = t22;
                    }
                }

                if (t11 < t21 && t21 < t12) {
                    if (t21 < intersectionTime) {
                        intersectionTime = t21;
                    }
                }

                if (t21 < t11 && t11 < t22) {
                    if (t11 < intersectionTime) {
                        intersectionTime = t11;
                    }
                }

                if (t21 < t12 && t12 < t22) {
                    if (t12 < intersectionTime) {
                        intersectionTime = t12;
                    }
                }

                if (intersectionTime < GameEngine.minCalculationTimeDiff) {
                    //System.out.println("overlaping!!!!!");
                    return intersectionTime;
                }


                //t11 = getSelfMetric.apply(selfRect) / obj.;
            }
        }

        return -1;
    }

    public boolean checkAreasOverlaps(double x1, double w1, double x2, double w2) {
        double x11 = x1 + w1;
        double x22 = x2 + w2;
        return ((x2 <= x1 && x1 <= x22) || (x2 <= x11 && x11 <= x22));
    }

    /*synchronized(GameData.class) {
        //Function<T,R> a = () -> {this::getWidth ;};

        List<Rect> selfPolygonMesh = this.getPolygonMesh(); // 1
        for (GameObject obj : objectsToCheck) { // 2
            if (obj == this)
                continue;
            List<Rect> polygonMesh = obj.getPolygonMesh();

            if ((this.vx * obj.vy - this.vy * obj.vx) != 0) {
                Function<Rect, Double> getSelfMetric;
                Function<Rect, Double> getObjectMetric;

                if (this.vx == 0) {
                    getSelfMetric = getHeight;
                    getObjectMetric = getWidth;
                } else {
                    getSelfMetric = getWidth;
                    getObjectMetric = getHeight;
                }

                double intersectionTime = 1000;
                // calc t1, t2 for centers (not centers at all) of objects
                // and then relative on this calc offsets ...
                double t11 = 0, t12 = 0, t21 = 0, t22 = 0;
                for (Rect selfRect : selfPolygonMesh) {
                    for (Rect rect : polygonMesh) {
                        // ... here
                        t12 = ((this.yPos - obj.yPos) * this.vx - this.vy * (obj.xPos - this.xPos)) / (this.vx * obj.vy - this.vy * obj.vx);

                        if (t12 < GameEngine.minCalculationTimeDiff) {
                            System.out.println("okey..");
                            System.out.println(t12);
                        }
                        if (this.vx != 0)
                            t21 = (obj.xPos - this.xPos + obj.vx * t12) / (this.vx);
                        else
                            t21 = (obj.yPos - this.yPos + obj.vy * t12) / (this.vy);

                        if (this.vy == 0) {
                            t22 = rect.w / this.vx;
                            if (this.xPos < obj.xPos) {
                                t22 = t21 + t22;
                            } else {
                                t22 = t21 - t22;
                            }

                            t11 = selfRect.h / obj.vy;
                            if (this.yPos < obj.yPos) {
                                t11 = t12 - t11;
                            } else {
                                t11 = t12 + t11;
                            }
                        } else {

                        }

                        if ((t11 == 0) || (t12 == 0) || (t21 == 0) || (t22 == 0)) {
                            return;
                        }

                        double b;
                        if (t12 < t11) {
                            b = t11;
                            t11 = t12;
                            t12 = b;
                        }

                        if (t22 < t21) {
                            b = t21;
                            t21 = t22;
                            t22 = b;
                        }

                        if (t11 < t22 && t22 < t12) {
                            if (t22 < intersectionTime) {
                                intersectionTime = t22;
                            }
                        }

                        if (t11 < t21 && t21 < t12) {
                            if (t21 < intersectionTime) {
                                intersectionTime = t21;
                            }
                        }

                        if (t21 < t11 && t11 < t22) {
                            if (t11 < intersectionTime) {
                                intersectionTime = t11;
                            }
                        }

                        if (t21 < t12 && t12 < t22) {
                            if (t12 < intersectionTime) {
                                intersectionTime = t12;
                            }
                        }

                        if (intersectionTime < GameEngine.minCalculationTimeDiff) {
                            System.out.println("overlaping!!!!!");
                        }


                        //t11 = getSelfMetric.apply(selfRect) / obj.;
                    }
                }
            } else {
                for (Rect selfRect : selfPolygonMesh) {
                    for (Rect rect : polygonMesh) {
                        if (this.vx == 0) {
                            if (!overlaps(this.xPos, selfRect.w, obj.xPos, rect.w))
                                continue;

                            double vy;
                            double t1, t2;
                            if (this.vy > 0) {
                                vy = this.vy - obj.vy;
                                t1 = (obj.yPos - this.yPos - selfRect.h) / vy;
                                if (t1 < 0 || t1 > GameEngine.minCalculationTimeDiff)
                                    continue;
                                else {
                                    intersects = true;
                                    itersectTimeOffset = t1;
                                    onIntersect(obj);
                                }
                            } else if (this.vy < 0) {
                                vy = obj.vy - this.vy;
                                t1 = (this.yPos - obj.yPos - rect.h) / vy;
                                if (t1 < 0 || t1 > GameEngine.minCalculationTimeDiff)
                                    continue;
                                else {
                                    intersects = true;
                                    itersectTimeOffset = t1;
                                    onIntersect(obj);
                                }
                            }
                        } else if (this.vy == 0) {
                            if (!overlaps(this.yPos, selfRect.h, obj.yPos, rect.h))
                                continue;
                            double vx;
                            double t1, t2;
                            if (this.vx > 0) {
                                vx = this.vx - obj.vx;
                                t1 = (obj.xPos - selfRect.w - this.xPos) / vx;
                                if (t1 < 0 || t1 > GameEngine.minCalculationTimeDiff)
                                    continue;
                                else {
                                    intersects = true;
                                    itersectTimeOffset = t1;
                                    onIntersect(obj);
                                }
                            } else if (this.vx < 0) {
                                vx = obj.vx - this.vx;
                                t1 = (this.xPos - obj.xPos - rect.w) / vx;
                                if (t1 < 0 || t1 > GameEngine.minCalculationTimeDiff)
                                    continue;
                                else {
                                    intersects = true;
                                    itersectTimeOffset = t1;
                                    onIntersect(obj);
                                }
                            }
                        }
                    }
                }
            }
        }
    }*/
}
