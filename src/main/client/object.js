import { ObjectState } from './object-state.js';

export class GameObject {
    pendingStates = [];

    created = false;
    deleted = false;

    constructor() {
        //this.currentState = new ObjectState();
    }

    resetSpeed() {
        this.currentState.vx = 0;
        this.currentState.vy = 0;
    }

    update(tick, delta) {
        if(this.pendingStates.length > 0) { //&& tick >= this.pendingStates[0].tick) {
            if(tick >= this.pendingStates[0].tick) {
                if(this.pendingStates[0].state == null) {
                    this.deleted = true;
                    return;
                }
                delta = tick - this.pendingStates[0].tick;
                this.currentState = this.pendingStates[0].state;
                this.pendingStates.shift();
                this.created = true;
            } else {
                if(this.created == false)
                    return;
            }
        }

        this.currentState.xpos = this.currentState.xpos + delta * this.currentState.vx;
        this.currentState.ypos = this.currentState.ypos + delta * this.currentState.vy;
    }
}