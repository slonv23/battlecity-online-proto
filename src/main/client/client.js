import { Renderer } from './renderer.js';
import { GameInfo } from './game-info.js';
import { ObjectState } from './object-state.js';
import { API } from './api-codes.js';
import { SETTINGS } from './settings.js';
import { Player } from './player.js';
import { Fireball } from './fireball.js';
//import * as deepmerge from 'deepmerge';

class Client {
    sid = null;

    constructor(options) {
        this.gameInfo = new GameInfo();

        this.connect = () => {
            this.connection = new WebSocket(options.endpoint);

            this.connection.onopen = this.onOpen;
            
            this.connection.onmessage = this.onInit;
        };
    }

    onOpen = () => {
        console.log("Connection open");
    };

    onInit = (e) => {
        var now = Date.now();
        
        var msg = JSON.parse(e.data);

        var offset = msg.serverTime - now;
        window.serverTime = function() {
            return Date.now() + offset;
        }
        
        this.sid = msg.sid;
        
        console.log('sid: ' + this.sid);
        
        this.sendMessage(API.cmd.spawn);
        
        this.connection.onmessage = this.onMessage;
    };

    onMessage = (e) => {
        var msg = JSON.parse(e.data);
        this.messageHandlers[msg.msgType](msg);
    };

    messageHandlers = {
        [API.msgType.gameState]: (msg) => {
            //console.log(msg);
            var objectsBuffer = Object.assign({}, this.gameInfo.objects); //, {'clone': true});
            for(var object of msg.objects) {
                
                if(object.id in objectsBuffer) {
                    var gameObj = objectsBuffer[object.id];
                    delete objectsBuffer[object.id];
                    //console.log(gameObj);
                } else {
                    console.log(object.type);
                    console.log(API.objectType.tank);
                    if(object.type == API.objectType.fireball) {
                        var fireball = new Fireball();
                        this.gameInfo.objects[object.id] = fireball;
                        gameObj = fireball;
                        console.log(gameObj);
                    } else if (object.type == API.objectType.tank) {
                        var player = new Player();
                        this.gameInfo.objects[object.id] = player;
                        gameObj = player;
                        console.log(gameObj);
                    }
                }
                //var player = this.gameInfo.getPlayer(object.id);

                //player.currentState.xpos = object.newPos.x;
                //player.currentState.ypos = object.newPos.y;

                var newState = new ObjectState();
                newState.xpos = object.newPos.x;
                newState.ypos = object.newPos.y;
                newState.orientation = object.d; //gameObj.currentState.orientation; // TODO (done)

                var offset = 0;
                if(object.type == API.objectType.tank) {
                    object.actions.forEach((element) => {
                        if(element.type == 1) {
                            //console.log(element.data.d);
                            //newState.orientation = +element.data.d;
                            newState.vx = SETTINGS.speed * (newState.orientation % 2) * (2 - newState.orientation);
                            newState.vy = SETTINGS.speed * ((newState.orientation + 1) % 2) * (newState.orientation - 1);
                        } else if(element.type == 2) {
                            newState.vx = 0;
                            newState.vy = 0;
                        }
                        offset = element.offset;
                    });

                    gameObj.pendingStates.push({
                        tick: msg.tick - offset,
                        state: newState
                    });
                } else if(object.type == API.objectType.fireball) {
                    switch(object.d){
                        case API.direction.up:
                            //p.setVy(-SPEED);
                            newState.vy = -0.009;
                            break;
                        case API.direction.right:
                            newState.vx = 0.009;
                            break;
                        case API.direction.down:
                            newState.vy = 0.009;
                            break;
                        case API.direction.left:
                            newState.vx = -0.009;
                            break;
                    }
                    gameObj.currentState = newState;
                }
                //console.log(msg.tick);
            }

            for(var id in objectsBuffer) {
                delete this.gameInfo.objects[id];
            }
        },
        [API.msgType.playerInfo]: (msg) => {
            console.log(msg);
            this.initControls();
        },
    };

    initControls() {
       // var _this = this;

        var last_key_code = 0;

        document.addEventListener('keydown', (event) => {
            if(last_key_code == event.keyCode)
                return;

            last_key_code = event.keyCode;
            console.log(event.keyCode);

            switch(event.keyCode){
                case 38:
                    this.sendMessage(API.cmd.move, API.direction.up);
                    console.log('send mv');
                    //console.log('up');
                    //PLAYER.setVy(-SPEED);
                    break;
                case 39:
                    this.sendMessage(API.cmd.move, API.direction.right);
                    console.log('send mv');
                    //PLAYER.setVx(SPEED);
                    break;
                case 40:
                    this.sendMessage(API.cmd.move, API.direction.down);
                    console.log('send mv');
                    //console.log('down');
                    //PLAYER.setVy(SPEED);
                    break;
                case 37:
                    this.sendMessage(API.cmd.move, API.direction.left);
                    console.log('send mv');
                    //PLAYER.setVx(-SPEED);
                    break;
                case 32:
                    this.sendMessage(API.cmd.fire);
                    console.log('send fire');
                    //PLAYER.setVx(-SPEED);
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            if(event.keyCode >= 37 && event.keyCode <= 40){
                last_key_code = 0;
                this.sendMessage(API.cmd.stop);
                console.log('stop');
            } else if(event.keyCode == 32) {
                last_key_code = 0;
                console.log('fire');
            }

                //PLAYER.resetSpeed();
        });
    }

    //
    sendMessage(cid, data){
        if(data == undefined)
            data = '';

        var message = {
            cid: cid,
            'data': data
        };

        this.connection.send(JSON.stringify(message));
    }
}

window.serverTime = function () {
    return 0;
};

export function start(options) {
    var client = new Client(options);

    var renderer = new Renderer(
        client.gameInfo
    );

    renderer.render();

    client.connect();
}