import { Player } from './player.js';
import { Fireball } from './player.js';

export class GameInfo {
    userPlayerId = 0;
    //player = null;
    //players = {};
    objects = {};
    objectsCount = 0;
    //playersCount = 0;

    getFireball(id) {
        if(!(id in this.objects)) {
            var fireball = new Fireball();
            this.objects[id] = fireball;
            return fireball;
        }
        
        return this.objects[id];
    }
    
    getPlayer(id) {
        if(!(id in this.players)) {
            var player = new Player();
            this.players[id] = player;
            return player;
        }
        
        return this.players[id];
    }
}