import { ObjectState } from './object-state.js';
import { GameObject } from './object.js';
import { API } from './api-codes.js';

export class Player extends GameObject {
    objectType = API.objectType.tank;
    pendingStates = [];

    /*constructor() {
        this.currentState = new ObjectState();
        console.log(this.currentState);
    }*/

    update(tick, delta) {
        if(this.pendingStates.length > 0 && tick >= this.pendingStates[0].tick) {
            delta = tick - this.pendingStates[0].tick;
            this.currentState = this.pendingStates[0].state;
            this.pendingStates.shift();
        }

        this.currentState.xpos = this.currentState.xpos + delta * this.currentState.vx;
        this.currentState.ypos = this.currentState.ypos + delta * this.currentState.vy;
    }
}
