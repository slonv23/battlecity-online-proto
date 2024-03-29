package base.environment;

public class Rect {
    public double xOffset;
    public double yOffset;
    public double h;
    public double w;

    public Rect(double xOffset, double yOffset, double h, double w) {
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.h = h;
        this.w = w;
    }

    public double getX(double originX) {
        return originX + xOffset;
    }

    public double getY(double originY) {
        return originY + yOffset;
    }
}
