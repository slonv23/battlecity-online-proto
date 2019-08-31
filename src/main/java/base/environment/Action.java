package base.environment;

import java.util.List;

import base.GameEngine;
import org.apache.commons.lang3.tuple.Pair;

public abstract class Action {
    public boolean processed = false;
    public double offset = GameEngine.minCalculationTimeDiff;

    public Action() {}

    public Action(double offset) {
        this.offset = offset;
    }

    public abstract int getId();

    public void setOffset(double offset) {
        this.offset = offset;
    };

    public long getInvertedOffset() {
        Long inv_offs = GameEngine.minCalculationTimeDiff - ((long) offset);
        return GameEngine.minCalculationTimeDiff - ((long) offset);
    }

    public boolean isProcessed() {
        return processed;
    }

    public void applyAction() {
        this.processed = true;
    }

    public List<Pair<String, String>> getActionData() {
        return null;
    }
}
