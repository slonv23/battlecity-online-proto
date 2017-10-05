import { ObjectState } from './object-state.js';

export class GameObject {
    constructor() {
        this.currentState = new ObjectState();
    }

    resetSpeed() {
        this.currentState.vx = 0;
        this.currentState.vy = 0;
    }

    update(tick, delta) {
        this.currentState.xpos = this.currentState.xpos + delta * this.currentState.vx;
        this.currentState.ypos = this.currentState.ypos + delta * this.currentState.vy;
    }
}