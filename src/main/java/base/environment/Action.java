package base.environment;

import java.util.List;

import base.GameEngine;
import org.apache.commons.lang3.tuple.Pair;

public abstract class Action {
    public double offset = GameEngine.minCalculationTimeDiff;

    public Action() {}

    public Action(double offset) {
        this.offset = offset;
    }

    public abstract int getId();

    public long getInvertedOffset() {
        return GameEngine.minCalculationTimeDiff - ((long) offset);
    }

    public abstract void applyAction();

    public abstract List<Pair<String, String>> getActionData();
}
