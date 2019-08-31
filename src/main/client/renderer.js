import { SETTINGS } from './settings.js';
import { API } from './api-codes.js';

var BS = SETTINGS.blockSize;

export class Renderer {
    constructor(gameInfo) {
        this.gameInfo = gameInfo;
        this.canvas = document.createElement('canvas');
        this.canvas.id = "game-map";
        this.canvas.width = SETTINGS.mapWidth;
        this.canvas.height = SETTINGS.mapHeight;
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.clearMap();
    }

    clearMap() {
        this.ctx.fillRect(0, 0, SETTINGS.mapWidth, SETTINGS.mapHeight);
    }


    render() {
        var lastTick = serverTime();
        
        var work = () => {
                this.ctx.fillStyle = "#000000";
                //this.ctx.fillRect(0, 0, W, H);
                this.clearMap();
                this.ctx.fillStyle = "orange";

                var tick = serverTime();
                var delta = (tick - lastTick); // / 1000;
                
                //for(var id in this.gameInfo.players){
                //       var p = this.gameInfo.players[id];
                var keys = Object.keys(this.gameInfo.objects);
                //for(var id in this.gameInfo.objects){
                for(var id of keys) {
                    var p = this.gameInfo.objects[id];
                    p.update(tick, delta);
                    if(p.created == false)
                        continue;
                    else if(p.deleted == true) {
                        console.log("delete2 "+id);
                        delete this.gameInfo.objects[id];
                    }
                    switch(p.objectType) {
                        case API.objectType.tank:
                           // p.update(tick, delta);
                            
                            this.ctx.translate(p.currentState.xpos*6, p.currentState.ypos*6);

                            switch(p.currentState.orientation){
                                case API.direction.up: //1:
                                    this.ctx.rotate(Math.PI);
                                    this.ctx.translate(-BS*3, -BS*3);
                                    break;
                                case API.direction.left: //2:
                                    this.ctx.rotate(Math.PI / 2);
                                    this.ctx.translate(0, -BS*3);
                                    break;
                                case API.direction.down: //3:
                                    break;
                                case API.direction.right: // 4
                                    this.ctx.rotate(- Math.PI / 2);
                                    this.ctx.translate(-BS*3, 0);
                                    break;
                            }

                            this.ctx.fillRect(0, 0, BS, BS);
                            this.ctx.fillRect(BS+BS, 0, BS, BS);
                            
                            this.ctx.fillRect(0, BS, BS, BS);
                            this.ctx.fillRect(BS, BS, BS, BS);
                            this.ctx.fillRect(BS+BS, BS, BS, BS);
                            
                            this.ctx.fillRect(BS, BS+BS, BS, BS);
                            
                            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                            break;
                        case API.objectType.fireball:
                            this.ctx.translate(p.currentState.xpos*6, p.currentState.ypos*6);
                            this.ctx.fillRect(0, 0, BS, BS);
                            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                            break;
                    }
                }
                
                lastTick = tick;
                
                requestAnimationFrame(work);
        };

        requestAnimationFrame(work);
    };
}