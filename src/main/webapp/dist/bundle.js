window["GameClient"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var API = exports.API = {
    cmd: {
        spawn: 1,
        move: 2,
        stop: 3,
        fire: 4
    },

    eventType: {
        spawn: 1,
        move: 2,
        stop: 4
    },

    objectType: {
        tank: 1,
        fireball: 2
    },

    direction: {
        up: 0,
        right: 1,
        down: 2,
        left: 3
    },

    msgType: {
        gameState: 1,
        playerInfo: 2
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectState = exports.ObjectState = function ObjectState() {
    _classCallCheck(this, ObjectState);

    this.orientation = 0;
    this.xpos = 0;
    this.ypos = 0;
    this.vx = 0;
    this.vy = 0;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var SETTINGS = exports.SETTINGS = {
    speed: 0.006,
    mapWidth: 480,
    mapHeight: 324,
    blockSize: 6
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Player = undefined;

var _objectState = __webpack_require__(1);

var _object = __webpack_require__(4);

var _apiCodes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = exports.Player = function (_GameObject) {
    _inherits(Player, _GameObject);

    //pendingStates = [];

    /*constructor() {
        this.currentState = new ObjectState();
        console.log(this.currentState);
    }*/

    /*update(tick, delta) {
        if(this.pendingStates.length > 0 && tick >= this.pendingStates[0].tick) {
            delta = tick - this.pendingStates[0].tick;
            this.currentState = this.pendingStates[0].state;
            this.pendingStates.shift();
        }
          this.currentState.xpos = this.currentState.xpos + delta * this.currentState.vx;
        this.currentState.ypos = this.currentState.ypos + delta * this.currentState.vy;
    }*/
    function Player() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Player);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Player.__proto__ || Object.getPrototypeOf(Player)).call.apply(_ref, [this].concat(args))), _this), _this.objectType = _apiCodes.API.objectType.tank, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Player;
}(_object.GameObject);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameObject = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectState = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = exports.GameObject = function () {
    function GameObject() {
        //this.currentState = new ObjectState();

        _classCallCheck(this, GameObject);

        this.pendingStates = [];
        this.created = false;
        this.deleted = false;
    }

    _createClass(GameObject, [{
        key: 'resetSpeed',
        value: function resetSpeed() {
            this.currentState.vx = 0;
            this.currentState.vy = 0;
        }
    }, {
        key: 'update',
        value: function update(tick, delta) {
            if (this.pendingStates.length > 0) {
                //&& tick >= this.pendingStates[0].tick) {
                if (tick >= this.pendingStates[0].tick) {
                    if (this.pendingStates[0].state == null) {
                        this.deleted = true;
                        return;
                    }
                    delta = tick - this.pendingStates[0].tick;
                    this.currentState = this.pendingStates[0].state;
                    this.pendingStates.shift();
                    this.created = true;
                } else {
                    if (this.created == false) return;
                }
            }

            this.currentState.xpos = this.currentState.xpos + delta * this.currentState.vx;
            this.currentState.ypos = this.currentState.ypos + delta * this.currentState.vy;
        }
    }]);

    return GameObject;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.start = start;

var _renderer = __webpack_require__(6);

var _gameInfo = __webpack_require__(7);

var _objectState = __webpack_require__(1);

var _apiCodes = __webpack_require__(0);

var _settings = __webpack_require__(2);

var _player = __webpack_require__(3);

var _fireball = __webpack_require__(8);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import * as deepmerge from 'deepmerge';

var Client = function () {
    function Client(options) {
        var _this = this,
            _messageHandlers;

        _classCallCheck(this, Client);

        this.sid = null;

        this.onOpen = function () {
            console.log("Connection open");
        };

        this.onInit = function (e) {
            var now = Date.now();

            var msg = JSON.parse(e.data);

            var offset = msg.serverTime - now;
            window.serverTime = function () {
                return Date.now() + offset;
            };

            _this.sid = msg.sid;

            console.log('sid: ' + _this.sid);

            _this.sendMessage(_apiCodes.API.cmd.spawn);

            _this.connection.onmessage = _this.onMessage;
        };

        this.onMessage = function (e) {
            var msg = JSON.parse(e.data);
            _this.messageHandlers[msg.msgType](msg);
        };

        this.messageHandlers = (_messageHandlers = {}, _defineProperty(_messageHandlers, _apiCodes.API.msgType.gameState, function (msg) {
            //console.log(msg);
            var objectsBuffer = Object.assign({}, _this.gameInfo.objects); //, {'clone': true});
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = msg.objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var object = _step.value;


                    if (object.id in objectsBuffer) {
                        var gameObj = objectsBuffer[object.id];
                        delete objectsBuffer[object.id];
                        //console.log(gameObj);
                    } else {
                        console.log(object.type);
                        console.log(_apiCodes.API.objectType.tank);
                        if (object.type == _apiCodes.API.objectType.fireball) {
                            var fireball = new _fireball.Fireball();
                            _this.gameInfo.objects[object.id] = fireball;
                            gameObj = fireball;
                            console.log(gameObj);
                        } else if (object.type == _apiCodes.API.objectType.tank) {
                            var player = new _player.Player();
                            _this.gameInfo.objects[object.id] = player;
                            gameObj = player;
                            console.log(gameObj);
                        }
                    }
                    //var player = this.gameInfo.getPlayer(object.id);

                    //player.currentState.xpos = object.newPos.x;
                    //player.currentState.ypos = object.newPos.y;

                    var newState = new _objectState.ObjectState();
                    newState.xpos = object.newPos.x;
                    newState.ypos = object.newPos.y;
                    newState.orientation = object.d; //gameObj.currentState.orientation; // TODO (done)

                    var offset = 0;
                    if (object.type == _apiCodes.API.objectType.tank) {
                        object.actions.forEach(function (element) {
                            if (element.type == 0) {
                                //1
                                //console.log(element.data.d);
                                //newState.orientation = +element.data.d;
                                newState.vx = _settings.SETTINGS.speed * (newState.orientation % 2) * (2 - newState.orientation);
                                newState.vy = _settings.SETTINGS.speed * ((newState.orientation + 1) % 2) * (newState.orientation - 1);
                            } else if (element.type == 1) {
                                //2
                                newState.vx = 0;
                                newState.vy = 0;
                            }
                            offset = element.offset;
                        });

                        gameObj.pendingStates.push({
                            tick: msg.tick - offset,
                            state: newState
                        });
                    } else if (object.type == _apiCodes.API.objectType.fireball) {
                        switch (object.d) {
                            case _apiCodes.API.direction.up:
                                //p.setVy(-SPEED);
                                newState.vy = -0.009;
                                break;
                            case _apiCodes.API.direction.right:
                                newState.vx = 0.009;
                                break;
                            case _apiCodes.API.direction.down:
                                newState.vy = 0.009;
                                break;
                            case _apiCodes.API.direction.left:
                                newState.vx = -0.009;
                                break;
                        }

                        //gameObj.currentState = newState;
                        gameObj.pendingStates.push({
                            tick: msg.tick - offset,
                            state: newState
                        });
                    }
                    //console.log(msg.tick);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            for (var id in objectsBuffer) {
                _this.gameInfo.objects[id].pendingStates.push({
                    tick: msg.tick - offset,
                    state: null
                });
                /*gameObj.pendingStates.push({
                    tick: msg.tick - offset,
                    state: null
                });*/
                console.log("delete " + id);
                //delete this.gameInfo.objects[id];
            }
        }), _defineProperty(_messageHandlers, _apiCodes.API.msgType.playerInfo, function (msg) {
            console.log(msg);
            _this.initControls();
        }), _messageHandlers);

        this.gameInfo = new _gameInfo.GameInfo();

        this.connect = function () {
            _this.connection = new WebSocket(options.endpoint);

            _this.connection.onopen = _this.onOpen;

            _this.connection.onmessage = _this.onInit;
        };
    }

    _createClass(Client, [{
        key: 'initControls',
        value: function initControls() {
            var _this2 = this;

            // var _this = this;

            var last_key_code = 0;

            document.addEventListener('keydown', function (event) {
                if (last_key_code == event.keyCode) return;

                last_key_code = event.keyCode;
                console.log(event.keyCode);

                switch (event.keyCode) {
                    case 38:
                        _this2.sendMessage(_apiCodes.API.cmd.move, _apiCodes.API.direction.up);
                        console.log('send mv');
                        //console.log('up');
                        //PLAYER.setVy(-SPEED);
                        break;
                    case 39:
                        _this2.sendMessage(_apiCodes.API.cmd.move, _apiCodes.API.direction.right);
                        console.log('send mv');
                        //PLAYER.setVx(SPEED);
                        break;
                    case 40:
                        _this2.sendMessage(_apiCodes.API.cmd.move, _apiCodes.API.direction.down);
                        console.log('send mv');
                        //console.log('down');
                        //PLAYER.setVy(SPEED);
                        break;
                    case 37:
                        _this2.sendMessage(_apiCodes.API.cmd.move, _apiCodes.API.direction.left);
                        console.log('send mv');
                        //PLAYER.setVx(-SPEED);
                        break;
                    case 32:
                        _this2.sendMessage(_apiCodes.API.cmd.fire);
                        console.log('send fire');
                        //PLAYER.setVx(-SPEED);
                        break;
                }
            });

            document.addEventListener('keyup', function (event) {
                if (event.keyCode >= 37 && event.keyCode <= 40) {
                    last_key_code = 0;
                    _this2.sendMessage(_apiCodes.API.cmd.stop);
                    console.log('stop');
                } else if (event.keyCode == 32) {
                    last_key_code = 0;
                    console.log('fire');
                }

                //PLAYER.resetSpeed();
            });
        }

        //

    }, {
        key: 'sendMessage',
        value: function sendMessage(cid, data) {
            if (data == undefined) data = '';

            var message = {
                cid: cid,
                'data': data
            };

            this.connection.send(JSON.stringify(message));
        }
    }]);

    return Client;
}();

window.serverTime = function () {
    return 0;
};

function start(options) {
    var client = new Client(options);

    var renderer = new _renderer.Renderer(client.gameInfo);

    renderer.render();

    client.connect();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Renderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(2);

var _apiCodes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BS = _settings.SETTINGS.blockSize;

var Renderer = exports.Renderer = function () {
    function Renderer(gameInfo) {
        _classCallCheck(this, Renderer);

        this.gameInfo = gameInfo;
        this.canvas = document.createElement('canvas');
        this.canvas.id = "game-map";
        this.canvas.width = _settings.SETTINGS.mapWidth;
        this.canvas.height = _settings.SETTINGS.mapHeight;
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.clearMap();
    }

    _createClass(Renderer, [{
        key: 'clearMap',
        value: function clearMap() {
            this.ctx.fillRect(0, 0, _settings.SETTINGS.mapWidth, _settings.SETTINGS.mapHeight);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var lastTick = serverTime();

            var work = function work() {
                _this.ctx.fillStyle = "#000000";
                //this.ctx.fillRect(0, 0, W, H);
                _this.clearMap();
                _this.ctx.fillStyle = "orange";

                var tick = serverTime();
                var delta = tick - lastTick; // / 1000;

                //for(var id in this.gameInfo.players){
                //       var p = this.gameInfo.players[id];
                var keys = Object.keys(_this.gameInfo.objects);
                //for(var id in this.gameInfo.objects){
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var id = _step.value;

                        var p = _this.gameInfo.objects[id];
                        p.update(tick, delta);
                        if (p.created == false) continue;else if (p.deleted == true) {
                            console.log("delete2 " + id);
                            delete _this.gameInfo.objects[id];
                        }
                        switch (p.objectType) {
                            case _apiCodes.API.objectType.tank:
                                // p.update(tick, delta);

                                _this.ctx.translate(p.currentState.xpos * 6, p.currentState.ypos * 6);

                                switch (p.currentState.orientation) {
                                    case _apiCodes.API.direction.up:
                                        //1:
                                        _this.ctx.rotate(Math.PI);
                                        _this.ctx.translate(-BS * 3, -BS * 3);
                                        break;
                                    case _apiCodes.API.direction.left:
                                        //2:
                                        _this.ctx.rotate(Math.PI / 2);
                                        _this.ctx.translate(0, -BS * 3);
                                        break;
                                    case _apiCodes.API.direction.down:
                                        //3:
                                        break;
                                    case _apiCodes.API.direction.right:
                                        // 4
                                        _this.ctx.rotate(-Math.PI / 2);
                                        _this.ctx.translate(-BS * 3, 0);
                                        break;
                                }

                                _this.ctx.fillRect(0, 0, BS, BS);
                                _this.ctx.fillRect(BS + BS, 0, BS, BS);

                                _this.ctx.fillRect(0, BS, BS, BS);
                                _this.ctx.fillRect(BS, BS, BS, BS);
                                _this.ctx.fillRect(BS + BS, BS, BS, BS);

                                _this.ctx.fillRect(BS, BS + BS, BS, BS);

                                _this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                                break;
                            case _apiCodes.API.objectType.fireball:
                                _this.ctx.translate(p.currentState.xpos * 6, p.currentState.ypos * 6);
                                _this.ctx.fillRect(0, 0, BS, BS);
                                _this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                                break;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                lastTick = tick;

                requestAnimationFrame(work);
            };

            requestAnimationFrame(work);
        }
    }]);

    return Renderer;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameInfo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameInfo = exports.GameInfo = function () {
    function GameInfo() {
        _classCallCheck(this, GameInfo);

        this.userPlayerId = 0;
        this.objects = {};
        this.objectsCount = 0;
    }
    //player = null;
    //players = {};


    _createClass(GameInfo, [{
        key: 'getFireball',

        //playersCount = 0;

        value: function getFireball(id) {
            if (!(id in this.objects)) {
                var fireball = new _player.Fireball();
                this.objects[id] = fireball;
                return fireball;
            }

            return this.objects[id];
        }
    }, {
        key: 'getPlayer',
        value: function getPlayer(id) {
            if (!(id in this.players)) {
                var player = new _player.Player();
                this.players[id] = player;
                return player;
            }

            return this.players[id];
        }
    }]);

    return GameInfo;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Fireball = undefined;

var _object = __webpack_require__(4);

var _apiCodes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fireball = exports.Fireball = function (_GameObject) {
    _inherits(Fireball, _GameObject);

    /*constructor() {
        this.currentState = new ObjectState();
        console.log(this.currentState);
    }*/
    function Fireball() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Fireball);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fireball.__proto__ || Object.getPrototypeOf(Fireball)).call.apply(_ref, [this].concat(args))), _this), _this.objectType = _apiCodes.API.objectType.fireball, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Fireball;
}(_object.GameObject);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODM2OTQ5MDgwNjcxZThmOWVkMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY2xpZW50L2FwaS1jb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jbGllbnQvb2JqZWN0LXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NsaWVudC9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jbGllbnQvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NsaWVudC9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY2xpZW50L2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jbGllbnQvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY2xpZW50L2dhbWUtaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jbGllbnQvZmlyZWJhbGwuanMiXSwibmFtZXMiOlsiQVBJIiwiY21kIiwic3Bhd24iLCJtb3ZlIiwic3RvcCIsImZpcmUiLCJldmVudFR5cGUiLCJvYmplY3RUeXBlIiwidGFuayIsImZpcmViYWxsIiwiZGlyZWN0aW9uIiwidXAiLCJyaWdodCIsImRvd24iLCJsZWZ0IiwibXNnVHlwZSIsImdhbWVTdGF0ZSIsInBsYXllckluZm8iLCJPYmplY3RTdGF0ZSIsIm9yaWVudGF0aW9uIiwieHBvcyIsInlwb3MiLCJ2eCIsInZ5IiwiU0VUVElOR1MiLCJzcGVlZCIsIm1hcFdpZHRoIiwibWFwSGVpZ2h0IiwiYmxvY2tTaXplIiwiUGxheWVyIiwiR2FtZU9iamVjdCIsInBlbmRpbmdTdGF0ZXMiLCJjcmVhdGVkIiwiZGVsZXRlZCIsImN1cnJlbnRTdGF0ZSIsInRpY2siLCJkZWx0YSIsImxlbmd0aCIsInN0YXRlIiwic2hpZnQiLCJzdGFydCIsIkNsaWVudCIsIm9wdGlvbnMiLCJzaWQiLCJvbk9wZW4iLCJjb25zb2xlIiwibG9nIiwib25Jbml0IiwiZSIsIm5vdyIsIkRhdGUiLCJtc2ciLCJKU09OIiwicGFyc2UiLCJkYXRhIiwib2Zmc2V0Iiwic2VydmVyVGltZSIsIndpbmRvdyIsInNlbmRNZXNzYWdlIiwiY29ubmVjdGlvbiIsIm9ubWVzc2FnZSIsIm9uTWVzc2FnZSIsIm1lc3NhZ2VIYW5kbGVycyIsIm9iamVjdHNCdWZmZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJnYW1lSW5mbyIsIm9iamVjdHMiLCJvYmplY3QiLCJpZCIsImdhbWVPYmoiLCJ0eXBlIiwicGxheWVyIiwibmV3U3RhdGUiLCJuZXdQb3MiLCJ4IiwieSIsImQiLCJhY3Rpb25zIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJwdXNoIiwiaW5pdENvbnRyb2xzIiwiY29ubmVjdCIsIldlYlNvY2tldCIsImVuZHBvaW50Iiwib25vcGVuIiwibGFzdF9rZXlfY29kZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsImNpZCIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJzZW5kIiwic3RyaW5naWZ5IiwiY2xpZW50IiwicmVuZGVyZXIiLCJyZW5kZXIiLCJCUyIsIlJlbmRlcmVyIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyTWFwIiwiZmlsbFJlY3QiLCJsYXN0VGljayIsIndvcmsiLCJmaWxsU3R5bGUiLCJrZXlzIiwicCIsInVwZGF0ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsInNldFRyYW5zZm9ybSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkdhbWVJbmZvIiwidXNlclBsYXllcklkIiwib2JqZWN0c0NvdW50IiwicGxheWVycyIsIkZpcmViYWxsIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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a0NBRVNBLEUsRUFBSTtBQUNWLGdCQUFHLEVBQUVBLE1BQU0sS0FBSzBELE9BQWIsQ0FBSCxFQUEwQjtBQUN0QixvQkFBSXZELFNBQVMsb0JBQWI7QUFDQSxxQkFBS3VELE9BQUwsQ0FBYTFELEVBQWIsSUFBbUJHLE1BQW5CO0FBQ0EsdUJBQU9BLE1BQVA7QUFDSDs7QUFFRCxtQkFBTyxLQUFLdUQsT0FBTCxDQUFhMUQsRUFBYixDQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCTDs7QUFDQTs7Ozs7Ozs7SUFFYTJELFEsV0FBQUEsUTs7O0FBR1Q7Ozs7Ozs7Ozs7Ozs7Ozs4TEFGQXpILFUsR0FBYSxjQUFJQSxVQUFKLENBQWVFLFEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODM2OTQ5MDgwNjcxZThmOWVkMDYiLCJleHBvcnQgY29uc3QgQVBJID0ge1xyXG4gICAgY21kOiB7XHJcbiAgICAgICAgc3Bhd246IDEsXHJcbiAgICAgICAgbW92ZTogMixcclxuICAgICAgICBzdG9wOiAzLFxyXG4gICAgICAgIGZpcmU6IDRcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGV2ZW50VHlwZToge1xyXG4gICAgICAgIHNwYXduOiAxLFxyXG4gICAgICAgIG1vdmU6IDIsXHJcbiAgICAgICAgc3RvcDogNFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb2JqZWN0VHlwZToge1xyXG4gICAgICAgIHRhbms6IDEsXHJcbiAgICAgICAgZmlyZWJhbGw6IDJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGRpcmVjdGlvbjoge1xyXG4gICAgICAgIHVwOiAwLFxyXG4gICAgICAgIHJpZ2h0OiAxLFxyXG4gICAgICAgIGRvd246IDIsXHJcbiAgICAgICAgbGVmdDogM1xyXG4gICAgfSxcclxuXHJcbiAgICBtc2dUeXBlOiB7XHJcbiAgICAgICAgZ2FtZVN0YXRlOiAxLFxyXG4gICAgICAgIHBsYXllckluZm86IDJcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jbGllbnQvYXBpLWNvZGVzLmpzIiwiZXhwb3J0IGNsYXNzIE9iamVjdFN0YXRlIHtcclxuICAgIG9yaWVudGF0aW9uID0gMDtcclxuICAgIHhwb3MgPSAwO1xyXG4gICAgeXBvcyA9IDA7XHJcbiAgICB2eCA9IDA7XHJcbiAgICB2eSA9IDA7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jbGllbnQvb2JqZWN0LXN0YXRlLmpzIiwiZXhwb3J0IGNvbnN0IFNFVFRJTkdTID0ge1xyXG4gICAgc3BlZWQ6IDAuMDA2LFxyXG4gICAgbWFwV2lkdGg6IDQ4MCxcclxuICAgIG1hcEhlaWdodDogMzI0LFxyXG4gICAgYmxvY2tTaXplOiA2XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jbGllbnQvc2V0dGluZ3MuanMiLCJpbXBvcnQgeyBPYmplY3RTdGF0ZSB9IGZyb20gJy4vb2JqZWN0LXN0YXRlLmpzJztcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vb2JqZWN0LmpzJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi9hcGktY29kZXMuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gICAgb2JqZWN0VHlwZSA9IEFQSS5vYmplY3RUeXBlLnRhbms7XHJcbiAgICAvL3BlbmRpbmdTdGF0ZXMgPSBbXTtcclxuXHJcbiAgICAvKmNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gbmV3IE9iamVjdFN0YXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50U3RhdGUpO1xyXG4gICAgfSovXHJcblxyXG4gICAgLyp1cGRhdGUodGljaywgZGVsdGEpIHtcclxuICAgICAgICBpZih0aGlzLnBlbmRpbmdTdGF0ZXMubGVuZ3RoID4gMCAmJiB0aWNrID49IHRoaXMucGVuZGluZ1N0YXRlc1swXS50aWNrKSB7XHJcbiAgICAgICAgICAgIGRlbHRhID0gdGljayAtIHRoaXMucGVuZGluZ1N0YXRlc1swXS50aWNrO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMucGVuZGluZ1N0YXRlc1swXS5zdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGVzLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZS54cG9zID0gdGhpcy5jdXJyZW50U3RhdGUueHBvcyArIGRlbHRhICogdGhpcy5jdXJyZW50U3RhdGUudng7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUueXBvcyA9IHRoaXMuY3VycmVudFN0YXRlLnlwb3MgKyBkZWx0YSAqIHRoaXMuY3VycmVudFN0YXRlLnZ5O1xyXG4gICAgfSovXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY2xpZW50L3BsYXllci5qcyIsImltcG9ydCB7IE9iamVjdFN0YXRlIH0gZnJvbSAnLi9vYmplY3Qtc3RhdGUuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gICAgcGVuZGluZ1N0YXRlcyA9IFtdO1xyXG5cclxuICAgIGNyZWF0ZWQgPSBmYWxzZTtcclxuICAgIGRlbGV0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL3RoaXMuY3VycmVudFN0YXRlID0gbmV3IE9iamVjdFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTcGVlZCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZS52eCA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUudnkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aWNrLCBkZWx0YSkge1xyXG4gICAgICAgIGlmKHRoaXMucGVuZGluZ1N0YXRlcy5sZW5ndGggPiAwKSB7IC8vJiYgdGljayA+PSB0aGlzLnBlbmRpbmdTdGF0ZXNbMF0udGljaykge1xyXG4gICAgICAgICAgICBpZih0aWNrID49IHRoaXMucGVuZGluZ1N0YXRlc1swXS50aWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBlbmRpbmdTdGF0ZXNbMF0uc3RhdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVsdGEgPSB0aWNrIC0gdGhpcy5wZW5kaW5nU3RhdGVzWzBdLnRpY2s7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMucGVuZGluZ1N0YXRlc1swXS5zdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1N0YXRlcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY3JlYXRlZCA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlLnhwb3MgPSB0aGlzLmN1cnJlbnRTdGF0ZS54cG9zICsgZGVsdGEgKiB0aGlzLmN1cnJlbnRTdGF0ZS52eDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZS55cG9zID0gdGhpcy5jdXJyZW50U3RhdGUueXBvcyArIGRlbHRhICogdGhpcy5jdXJyZW50U3RhdGUudnk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jbGllbnQvb2JqZWN0LmpzIiwiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyLmpzJztcclxuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tICcuL2dhbWUtaW5mby5qcyc7XHJcbmltcG9ydCB7IE9iamVjdFN0YXRlIH0gZnJvbSAnLi9vYmplY3Qtc3RhdGUuanMnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuL2FwaS1jb2Rlcy5qcyc7XHJcbmltcG9ydCB7IFNFVFRJTkdTIH0gZnJvbSAnLi9zZXR0aW5ncy5qcyc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyLmpzJztcclxuaW1wb3J0IHsgRmlyZWJhbGwgfSBmcm9tICcuL2ZpcmViYWxsLmpzJztcclxuLy9pbXBvcnQgKiBhcyBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcclxuXHJcbmNsYXNzIENsaWVudCB7XHJcbiAgICBzaWQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmdhbWVJbmZvID0gbmV3IEdhbWVJbmZvKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldChvcHRpb25zLmVuZHBvaW50KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbm9wZW4gPSB0aGlzLm9uT3BlbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSB0aGlzLm9uSW5pdDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gb3BlblwiKTtcclxuICAgIH07XHJcblxyXG4gICAgb25Jbml0ID0gKGUpID0+IHtcclxuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbXNnID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG5cclxuICAgICAgICB2YXIgb2Zmc2V0ID0gbXNnLnNlcnZlclRpbWUgLSBub3c7XHJcbiAgICAgICAgd2luZG93LnNlcnZlclRpbWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIERhdGUubm93KCkgKyBvZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2lkID0gbXNnLnNpZDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnc2lkOiAnICsgdGhpcy5zaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoQVBJLmNtZC5zcGF3bik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9ubWVzc2FnZSA9IHRoaXMub25NZXNzYWdlO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbk1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBtc2cgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcnNbbXNnLm1zZ1R5cGVdKG1zZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIG1lc3NhZ2VIYW5kbGVycyA9IHtcclxuICAgICAgICBbQVBJLm1zZ1R5cGUuZ2FtZVN0YXRlXTogKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgICAgIHZhciBvYmplY3RzQnVmZmVyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5nYW1lSW5mby5vYmplY3RzKTsgLy8sIHsnY2xvbmUnOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgb2JqZWN0IG9mIG1zZy5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKG9iamVjdC5pZCBpbiBvYmplY3RzQnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdhbWVPYmogPSBvYmplY3RzQnVmZmVyW29iamVjdC5pZF07XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9iamVjdHNCdWZmZXJbb2JqZWN0LmlkXTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGdhbWVPYmopO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QudHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coQVBJLm9iamVjdFR5cGUudGFuayk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqZWN0LnR5cGUgPT0gQVBJLm9iamVjdFR5cGUuZmlyZWJhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpcmViYWxsID0gbmV3IEZpcmViYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluZm8ub2JqZWN0c1tvYmplY3QuaWRdID0gZmlyZWJhbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmogPSBmaXJlYmFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZU9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmplY3QudHlwZSA9PSBBUEkub2JqZWN0VHlwZS50YW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluZm8ub2JqZWN0c1tvYmplY3QuaWRdID0gcGxheWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqID0gcGxheWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnYW1lT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3ZhciBwbGF5ZXIgPSB0aGlzLmdhbWVJbmZvLmdldFBsYXllcihvYmplY3QuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcGxheWVyLmN1cnJlbnRTdGF0ZS54cG9zID0gb2JqZWN0Lm5ld1Bvcy54O1xyXG4gICAgICAgICAgICAgICAgLy9wbGF5ZXIuY3VycmVudFN0YXRlLnlwb3MgPSBvYmplY3QubmV3UG9zLnk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0gbmV3IE9iamVjdFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS54cG9zID0gb2JqZWN0Lm5ld1Bvcy54O1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUueXBvcyA9IG9iamVjdC5uZXdQb3MueTtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLm9yaWVudGF0aW9uID0gb2JqZWN0LmQ7IC8vZ2FtZU9iai5jdXJyZW50U3RhdGUub3JpZW50YXRpb247IC8vIFRPRE8gKGRvbmUpXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZihvYmplY3QudHlwZSA9PSBBUEkub2JqZWN0VHlwZS50YW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmFjdGlvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnR5cGUgPT0gMCkgeyAvLzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZWxlbWVudC5kYXRhLmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9uZXdTdGF0ZS5vcmllbnRhdGlvbiA9ICtlbGVtZW50LmRhdGEuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLnZ4ID0gU0VUVElOR1Muc3BlZWQgKiAobmV3U3RhdGUub3JpZW50YXRpb24gJSAyKSAqICgyIC0gbmV3U3RhdGUub3JpZW50YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUudnkgPSBTRVRUSU5HUy5zcGVlZCAqICgobmV3U3RhdGUub3JpZW50YXRpb24gKyAxKSAlIDIpICogKG5ld1N0YXRlLm9yaWVudGF0aW9uIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlbGVtZW50LnR5cGUgPT0gMSkgeyAvLzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbGVtZW50Lm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU9iai5wZW5kaW5nU3RhdGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrOiBtc2cudGljayAtIG9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IG5ld1N0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYob2JqZWN0LnR5cGUgPT0gQVBJLm9iamVjdFR5cGUuZmlyZWJhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gob2JqZWN0LmQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFQSS5kaXJlY3Rpb24udXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Auc2V0VnkoLVNQRUVEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLnZ5ID0gLTAuMDA5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQVBJLmRpcmVjdGlvbi5yaWdodDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLnZ4ID0gMC4wMDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBUEkuZGlyZWN0aW9uLmRvd246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS52eSA9IDAuMDA5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQVBJLmRpcmVjdGlvbi5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUudnggPSAtMC4wMDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vZ2FtZU9iai5jdXJyZW50U3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT2JqLnBlbmRpbmdTdGF0ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2s6IG1zZy50aWNrIC0gb2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogbmV3U3RhdGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobXNnLnRpY2spO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGlkIGluIG9iamVjdHNCdWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluZm8ub2JqZWN0c1tpZF0ucGVuZGluZ1N0YXRlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0aWNrOiBtc2cudGljayAtIG9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvKmdhbWVPYmoucGVuZGluZ1N0YXRlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0aWNrOiBtc2cudGljayAtIG9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIFwiK2lkKTtcclxuICAgICAgICAgICAgICAgIC8vZGVsZXRlIHRoaXMuZ2FtZUluZm8ub2JqZWN0c1tpZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFtBUEkubXNnVHlwZS5wbGF5ZXJJbmZvXTogKG1zZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDb250cm9scygpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRDb250cm9scygpIHtcclxuICAgICAgIC8vIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZhciBsYXN0X2tleV9jb2RlID0gMDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihsYXN0X2tleV9jb2RlID09IGV2ZW50LmtleUNvZGUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsYXN0X2tleV9jb2RlID0gZXZlbnQua2V5Q29kZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoQVBJLmNtZC5tb3ZlLCBBUEkuZGlyZWN0aW9uLnVwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCBtdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3VwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9QTEFZRVIuc2V0VnkoLVNQRUVEKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShBUEkuY21kLm1vdmUsIEFQSS5kaXJlY3Rpb24ucmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIG12Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9QTEFZRVIuc2V0VngoU1BFRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKEFQSS5jbWQubW92ZSwgQVBJLmRpcmVjdGlvbi5kb3duKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCBtdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1BMQVlFUi5zZXRWeShTUEVFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoQVBJLmNtZC5tb3ZlLCBBUEkuZGlyZWN0aW9uLmxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIG12Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9QTEFZRVIuc2V0VngoLVNQRUVEKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShBUEkuY21kLmZpcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIGZpcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1BMQVlFUi5zZXRWeCgtU1BFRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPj0gMzcgJiYgZXZlbnQua2V5Q29kZSA8PSA0MCl7XHJcbiAgICAgICAgICAgICAgICBsYXN0X2tleV9jb2RlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoQVBJLmNtZC5zdG9wKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9wJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihldmVudC5rZXlDb2RlID09IDMyKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0X2tleV9jb2RlID0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaXJlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1BMQVlFUi5yZXNldFNwZWVkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIHNlbmRNZXNzYWdlKGNpZCwgZGF0YSl7XHJcbiAgICAgICAgaWYoZGF0YSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRhdGEgPSAnJztcclxuXHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIGNpZDogY2lkLFxyXG4gICAgICAgICAgICAnZGF0YSc6IGRhdGFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5zZXJ2ZXJUaW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIDA7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQob3B0aW9ucykge1xyXG4gICAgdmFyIGNsaWVudCA9IG5ldyBDbGllbnQob3B0aW9ucyk7XHJcblxyXG4gICAgdmFyIHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKFxyXG4gICAgICAgIGNsaWVudC5nYW1lSW5mb1xyXG4gICAgKTtcclxuXHJcbiAgICByZW5kZXJlci5yZW5kZXIoKTtcclxuXHJcbiAgICBjbGllbnQuY29ubmVjdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY2xpZW50L2NsaWVudC5qcyIsImltcG9ydCB7IFNFVFRJTkdTIH0gZnJvbSAnLi9zZXR0aW5ncy5qcyc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4vYXBpLWNvZGVzLmpzJztcclxuXHJcbnZhciBCUyA9IFNFVFRJTkdTLmJsb2NrU2l6ZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lSW5mbykge1xyXG4gICAgICAgIHRoaXMuZ2FtZUluZm8gPSBnYW1lSW5mbztcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmlkID0gXCJnYW1lLW1hcFwiO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gU0VUVElOR1MubWFwV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gU0VUVElOR1MubWFwSGVpZ2h0O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jbGVhck1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyTWFwKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIFNFVFRJTkdTLm1hcFdpZHRoLCBTRVRUSU5HUy5tYXBIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIGxhc3RUaWNrID0gc2VydmVyVGltZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB3b3JrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIFcsIEgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhck1hcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGljayA9IHNlcnZlclRpbWUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9ICh0aWNrIC0gbGFzdFRpY2spOyAvLyAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vZm9yKHZhciBpZCBpbiB0aGlzLmdhbWVJbmZvLnBsYXllcnMpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdmFyIHAgPSB0aGlzLmdhbWVJbmZvLnBsYXllcnNbaWRdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmdhbWVJbmZvLm9iamVjdHMpO1xyXG4gICAgICAgICAgICAgICAgLy9mb3IodmFyIGlkIGluIHRoaXMuZ2FtZUluZm8ub2JqZWN0cyl7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGlkIG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ2FtZUluZm8ub2JqZWN0c1tpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgcC51cGRhdGUodGljaywgZGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHAuY3JlYXRlZCA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihwLmRlbGV0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZTIgXCIraWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5nYW1lSW5mby5vYmplY3RzW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHAub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFQSS5vYmplY3RUeXBlLnRhbms6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHAudXBkYXRlKHRpY2ssIGRlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHAuY3VycmVudFN0YXRlLnhwb3MqNiwgcC5jdXJyZW50U3RhdGUueXBvcyo2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2gocC5jdXJyZW50U3RhdGUub3JpZW50YXRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQVBJLmRpcmVjdGlvbi51cDogLy8xOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5yb3RhdGUoTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtQlMqMywgLUJTKjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFQSS5kaXJlY3Rpb24ubGVmdDogLy8yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5yb3RhdGUoTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoMCwgLUJTKjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFQSS5kaXJlY3Rpb24uZG93bjogLy8zOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFQSS5kaXJlY3Rpb24ucmlnaHQ6IC8vIDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgucm90YXRlKC0gTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLUJTKjMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCBCUywgQlMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoQlMrQlMsIDAsIEJTLCBCUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIEJTLCBCUywgQlMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoQlMsIEJTLCBCUywgQlMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoQlMrQlMsIEJTLCBCUywgQlMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChCUywgQlMrQlMsIEJTLCBCUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFQSS5vYmplY3RUeXBlLmZpcmViYWxsOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHAuY3VycmVudFN0YXRlLnhwb3MqNiwgcC5jdXJyZW50U3RhdGUueXBvcyo2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIEJTLCBCUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxhc3RUaWNrID0gdGljaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHdvcmspO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh3b3JrKTtcclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jbGllbnQvcmVuZGVyZXIuanMiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllci5qcyc7XHJcbmltcG9ydCB7IEZpcmViYWxsIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVJbmZvIHtcclxuICAgIHVzZXJQbGF5ZXJJZCA9IDA7XHJcbiAgICAvL3BsYXllciA9IG51bGw7XHJcbiAgICAvL3BsYXllcnMgPSB7fTtcclxuICAgIG9iamVjdHMgPSB7fTtcclxuICAgIG9iamVjdHNDb3VudCA9IDA7XHJcbiAgICAvL3BsYXllcnNDb3VudCA9IDA7XHJcblxyXG4gICAgZ2V0RmlyZWJhbGwoaWQpIHtcclxuICAgICAgICBpZighKGlkIGluIHRoaXMub2JqZWN0cykpIHtcclxuICAgICAgICAgICAgdmFyIGZpcmViYWxsID0gbmV3IEZpcmViYWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0c1tpZF0gPSBmaXJlYmFsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzW2lkXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0UGxheWVyKGlkKSB7XHJcbiAgICAgICAgaWYoIShpZCBpbiB0aGlzLnBsYXllcnMpKSB7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tpZF0gPSBwbGF5ZXI7XHJcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNbaWRdO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY2xpZW50L2dhbWUtaW5mby5qcyIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICcuL29iamVjdC5qcyc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4vYXBpLWNvZGVzLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFsbCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gICAgb2JqZWN0VHlwZSA9IEFQSS5vYmplY3RUeXBlLmZpcmViYWxsO1xyXG5cclxuICAgIC8qY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBuZXcgT2JqZWN0U3RhdGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTdGF0ZSk7XHJcbiAgICB9Ki9cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jbGllbnQvZmlyZWJhbGwuanMiXSwic291cmNlUm9vdCI6IiJ9