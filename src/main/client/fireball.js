import { GameObject } from './object.js';
import { API } from './api-codes.js';

export class Fireball extends GameObject {
    objectType = API.objectType.fireball;

    /*constructor() {
        this.currentState = new ObjectState();
        console.log(this.currentState);
    }*/
}
