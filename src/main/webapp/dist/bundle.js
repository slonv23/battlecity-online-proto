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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectState = __webpack_require__(1);

var _object = __webpack_require__(4);

var _apiCodes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = exports.Player = function (_GameObject) {
    _inherits(Player, _GameObject);

    function Player() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Player);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Player.__proto__ || Object.getPrototypeOf(Player)).call.apply(_ref, [this].concat(args))), _this), _this.objectType = _apiCodes.API.objectType.tank, _this.pendingStates = [], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Player, [{
        key: 'update',


        /*constructor() {
            this.currentState = new ObjectState();
            console.log(this.currentState);
        }*/

        value: function update(tick, delta) {
            if (this.pendingStates.length > 0 && tick >= this.pendingStates[0].tick) {
                delta = tick - this.pendingStates[0].tick;
                this.currentState = this.pendingStates[0].state;
                this.pendingStates.shift();
            }

            this.currentState.xpos = this.currentState.xpos + delta * this.currentState.vx;
            this.currentState.ypos = this.currentState.ypos + delta * this.currentState.vy;
        }
    }]);

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
        _classCallCheck(this, GameObject);

        this.currentState = new _objectState.ObjectState();
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
                            if (element.type == 1) {
                                //console.log(element.data.d);
                                //newState.orientation = +element.data.d;
                                newState.vx = _settings.SETTINGS.speed * (newState.orientation % 2) * (2 - newState.orientation);
                                newState.vy = _settings.SETTINGS.speed * ((newState.orientation + 1) % 2) * (newState.orientation - 1);
                            } else if (element.type == 2) {
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
                        gameObj.currentState = newState;
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
                delete _this.gameInfo.objects[id];
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
                for (var id in _this.gameInfo.objects) {
                    var p = _this.gameInfo.objects[id];
                    p.update(tick, delta);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTE2NTJiYWU3N2M0N2RmZjMzZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY2xpZW50L2FwaS1jb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jbGllbnQvb2JqZWN0LXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NsaWVudC9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jbGllbnQvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NsaWVudC9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY2xpZW50L2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jbGllbnQvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY2xpZW50L2dhbWUtaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jbGllbnQvZmlyZWJhbGwuanMiXSwibmFtZXMiOlsiQVBJIiwiY21kIiwic3Bhd24iLCJtb3ZlIiwic3RvcCIsImZpcmUiLCJldmVudFR5cGUiLCJvYmplY3RUeXBlIiwidGFuayIsImZpcmViYWxsIiwiZGlyZWN0aW9uIiwidXAiLCJyaWdodCIsImRvd24iLCJsZWZ0IiwibXNnVHlwZSIsImdhbWVTdGF0ZSIsInBsYXllckluZm8iLCJPYmplY3RTdGF0ZSIsIm9yaWVudGF0aW9uIiwieHBvcyIsInlwb3MiLCJ2eCIsInZ5IiwiU0VUVElOR1MiLCJzcGVlZCIsIm1hcFdpZHRoIiwibWFwSGVpZ2h0IiwiYmxvY2tTaXplIiwiUGxheWVyIiwicGVuZGluZ1N0YXRlcyIsInRpY2siLCJkZWx0YSIsImxlbmd0aCIsImN1cnJlbnRTdGF0ZSIsInN0YXRlIiwic2hpZnQiLCJHYW1lT2JqZWN0Iiwic3RhcnQiLCJDbGllbnQiLCJvcHRpb25zIiwic2lkIiwib25PcGVuIiwiY29uc29sZSIsImxvZyIsIm9uSW5pdCIsImUiLCJub3ciLCJEYXRlIiwibXNnIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsIm9mZnNldCIsInNlcnZlclRpbWUiLCJ3aW5kb3ciLCJzZW5kTWVzc2FnZSIsImNvbm5lY3Rpb24iLCJvbm1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJtZXNzYWdlSGFuZGxlcnMiLCJvYmplY3RzQnVmZmVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2FtZUluZm8iLCJvYmplY3RzIiwib2JqZWN0IiwiaWQiLCJnYW1lT2JqIiwidHlwZSIsInBsYXllciIsIm5ld1N0YXRlIiwibmV3UG9zIiwieCIsInkiLCJkIiwiYWN0aW9ucyIsImZvckVhY2giLCJlbGVtZW50IiwicHVzaCIsImluaXRDb250cm9scyIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJlbmRwb2ludCIsIm9ub3BlbiIsImxhc3Rfa2V5X2NvZGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJjaWQiLCJ1bmRlZmluZWQiLCJtZXNzYWdlIiwic2VuZCIsInN0cmluZ2lmeSIsImNsaWVudCIsInJlbmRlcmVyIiwicmVuZGVyIiwiQlMiLCJSZW5kZXJlciIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImN0eCIsImdldENvbnRleHQiLCJjbGVhck1hcCIsImZpbGxSZWN0IiwibGFzdFRpY2siLCJ3b3JrIiwiZmlsbFN0eWxlIiwicCIsInVwZGF0ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsInNldFRyYW5zZm9ybSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkdhbWVJbmZvIiwidXNlclBsYXllcklkIiwib2JqZWN0c0NvdW50IiwicGxheWVycyIsIkZpcmViYWxsIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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QUEsUTs7OzthQUNUQyxZLEdBQWUsQzthQUdmekQsTyxHQUFVLEU7YUFDVjBELFksR0FBZSxDOztBQUhmO0FBQ0E7Ozs7OztBQUdBOztvQ0FFWXhELEUsRUFBSTtBQUNaLGdCQUFHLEVBQUVBLE1BQU0sS0FBS0YsT0FBYixDQUFILEVBQTBCO0FBQ3RCLG9CQUFJeEQsV0FBVyxzQkFBZjtBQUNBLHFCQUFLd0QsT0FBTCxDQUFhRSxFQUFiLElBQW1CMUQsUUFBbkI7QUFDQSx1QkFBT0EsUUFBUDtBQUNIOztBQUVELG1CQUFPLEtBQUt3RCxPQUFMLENBQWFFLEVBQWIsQ0FBUDtBQUNIOzs7a0NBRVNBLEUsRUFBSTtBQUNWLGdCQUFHLEVBQUVBLE1BQU0sS0FBS3lELE9BQWIsQ0FBSCxFQUEwQjtBQUN0QixvQkFBSXRELFNBQVMsb0JBQWI7QUFDQSxxQkFBS3NELE9BQUwsQ0FBYXpELEVBQWIsSUFBbUJHLE1BQW5CO0FBQ0EsdUJBQU9BLE1BQVA7QUFDSDs7QUFFRCxtQkFBTyxLQUFLc0QsT0FBTCxDQUFhekQsRUFBYixDQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCTDs7QUFDQTs7Ozs7Ozs7SUFFYTBELFEsV0FBQUEsUTs7O0FBR1Q7Ozs7Ozs7Ozs7Ozs7Ozs4TEFGQXRILFUsR0FBYSxjQUFJQSxVQUFKLENBQWVFLFEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTE2NTJiYWU3N2M0N2RmZjMzZDUiLCJleHBvcnQgY29uc3QgQVBJID0ge1xyXG4gICAgY21kOiB7XHJcbiAgICAgICAgc3Bhd246IDEsXHJcbiAgICAgICAgbW92ZTogMixcclxuICAgICAgICBzdG9wOiAzLFxyXG4gICAgICAgIGZpcmU6IDRcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGV2ZW50VHlwZToge1xyXG4gICAgICAgIHNwYXduOiAxLFxyXG4gICAgICAgIG1vdmU6IDIsXHJcbiAgICAgICAgc3RvcDogNFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb2JqZWN0VHlwZToge1xyXG4gICAgICAgIHRhbms6IDEsXHJcbiAgICAgICAgZmlyZWJhbGw6IDJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGRpcmVjdGlvbjoge1xyXG4gICAgICAgIHVwOiAwLFxyXG4gICAgICAgIHJpZ2h0OiAxLFxyXG4gICAgICAgIGRvd246IDIsXHJcbiAgICAgICAgbGVmdDogM1xyXG4gICAgfSxcclxuXHJcbiAgICBtc2dUeXBlOiB7XHJcbiAgICAgICAgZ2FtZVN0YXRlOiAxLFxyXG4gICAgICAgIHBsYXllckluZm86IDJcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jbGllbnQvYXBpLWNvZGVzLmpzIiwiZXhwb3J0IGNsYXNzIE9iamVjdFN0YXRlIHtcclxuICAgIG9yaWVudGF0aW9uID0gMDtcclxuICAgIHhwb3MgPSAwO1xyXG4gICAgeXBvcyA9IDA7XHJcbiAgICB2eCA9IDA7XHJcbiAgICB2eSA9IDA7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jbGllbnQvb2JqZWN0LXN0YXRlLmpzIiwiZXhwb3J0IGNvbnN0IFNFVFRJTkdTID0ge1xyXG4gICAgc3BlZWQ6IDAuMDA2LFxyXG4gICAgbWFwV2lkdGg6IDQ4MCxcclxuICAgIG1hcEhlaWdodDogMzI0LFxyXG4gICAgYmxvY2tTaXplOiA2XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jbGllbnQvc2V0dGluZ3MuanMiLCJpbXBvcnQgeyBPYmplY3RTdGF0ZSB9IGZyb20gJy4vb2JqZWN0LXN0YXRlLmpzJztcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vb2JqZWN0LmpzJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi9hcGktY29kZXMuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gICAgb2JqZWN0VHlwZSA9IEFQSS5vYmplY3RUeXBlLnRhbms7XHJcbiAgICBwZW5kaW5nU3RhdGVzID0gW107XHJcblxyXG4gICAgLypjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IG5ldyBPYmplY3RTdGF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFN0YXRlKTtcclxuICAgIH0qL1xyXG5cclxuICAgIHVwZGF0ZSh0aWNrLCBkZWx0YSkge1xyXG4gICAgICAgIGlmKHRoaXMucGVuZGluZ1N0YXRlcy5sZW5ndGggPiAwICYmIHRpY2sgPj0gdGhpcy5wZW5kaW5nU3RhdGVzWzBdLnRpY2spIHtcclxuICAgICAgICAgICAgZGVsdGEgPSB0aWNrIC0gdGhpcy5wZW5kaW5nU3RhdGVzWzBdLnRpY2s7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5wZW5kaW5nU3RhdGVzWzBdLnN0YXRlO1xyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdTdGF0ZXMuc2hpZnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlLnhwb3MgPSB0aGlzLmN1cnJlbnRTdGF0ZS54cG9zICsgZGVsdGEgKiB0aGlzLmN1cnJlbnRTdGF0ZS52eDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZS55cG9zID0gdGhpcy5jdXJyZW50U3RhdGUueXBvcyArIGRlbHRhICogdGhpcy5jdXJyZW50U3RhdGUudnk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY2xpZW50L3BsYXllci5qcyIsImltcG9ydCB7IE9iamVjdFN0YXRlIH0gZnJvbSAnLi9vYmplY3Qtc3RhdGUuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBuZXcgT2JqZWN0U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFNwZWVkKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlLnZ4ID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZS52eSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpY2ssIGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUueHBvcyA9IHRoaXMuY3VycmVudFN0YXRlLnhwb3MgKyBkZWx0YSAqIHRoaXMuY3VycmVudFN0YXRlLnZ4O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlLnlwb3MgPSB0aGlzLmN1cnJlbnRTdGF0ZS55cG9zICsgZGVsdGEgKiB0aGlzLmN1cnJlbnRTdGF0ZS52eTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NsaWVudC9vYmplY3QuanMiLCJpbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXIuanMnO1xyXG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gJy4vZ2FtZS1pbmZvLmpzJztcclxuaW1wb3J0IHsgT2JqZWN0U3RhdGUgfSBmcm9tICcuL29iamVjdC1zdGF0ZS5qcyc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4vYXBpLWNvZGVzLmpzJztcclxuaW1wb3J0IHsgU0VUVElOR1MgfSBmcm9tICcuL3NldHRpbmdzLmpzJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xyXG5pbXBvcnQgeyBGaXJlYmFsbCB9IGZyb20gJy4vZmlyZWJhbGwuanMnO1xyXG4vL2ltcG9ydCAqIGFzIGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xyXG5cclxuY2xhc3MgQ2xpZW50IHtcclxuICAgIHNpZCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZ2FtZUluZm8gPSBuZXcgR2FtZUluZm8oKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KG9wdGlvbnMuZW5kcG9pbnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9ub3BlbiA9IHRoaXMub25PcGVuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9ubWVzc2FnZSA9IHRoaXMub25Jbml0O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBvcGVuXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkluaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBtc2cgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcblxyXG4gICAgICAgIHZhciBvZmZzZXQgPSBtc2cuc2VydmVyVGltZSAtIG5vdztcclxuICAgICAgICB3aW5kb3cuc2VydmVyVGltZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSArIG9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaWQgPSBtc2cuc2lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaWQ6ICcgKyB0aGlzLnNpZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShBUEkuY21kLnNwYXduKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2U7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdmFyIG1zZyA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyc1ttc2cubXNnVHlwZV0obXNnKTtcclxuICAgIH07XHJcblxyXG4gICAgbWVzc2FnZUhhbmRsZXJzID0ge1xyXG4gICAgICAgIFtBUEkubXNnVHlwZS5nYW1lU3RhdGVdOiAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgdmFyIG9iamVjdHNCdWZmZXIgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdhbWVJbmZvLm9iamVjdHMpOyAvLywgeydjbG9uZSc6IHRydWV9KTtcclxuICAgICAgICAgICAgZm9yKHZhciBvYmplY3Qgb2YgbXNnLm9iamVjdHMpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYob2JqZWN0LmlkIGluIG9iamVjdHNCdWZmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtZU9iaiA9IG9iamVjdHNCdWZmZXJbb2JqZWN0LmlkXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqZWN0c0J1ZmZlcltvYmplY3QuaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZ2FtZU9iaik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iamVjdC50eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhBUEkub2JqZWN0VHlwZS50YW5rKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihvYmplY3QudHlwZSA9PSBBUEkub2JqZWN0VHlwZS5maXJlYmFsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlyZWJhbGwgPSBuZXcgRmlyZWJhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5mby5vYmplY3RzW29iamVjdC5pZF0gPSBmaXJlYmFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iaiA9IGZpcmViYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnYW1lT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9iamVjdC50eXBlID09IEFQSS5vYmplY3RUeXBlLnRhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5mby5vYmplY3RzW29iamVjdC5pZF0gPSBwbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmogPSBwbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdhbWVPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vdmFyIHBsYXllciA9IHRoaXMuZ2FtZUluZm8uZ2V0UGxheWVyKG9iamVjdC5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9wbGF5ZXIuY3VycmVudFN0YXRlLnhwb3MgPSBvYmplY3QubmV3UG9zLng7XHJcbiAgICAgICAgICAgICAgICAvL3BsYXllci5jdXJyZW50U3RhdGUueXBvcyA9IG9iamVjdC5uZXdQb3MueTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3U3RhdGUgPSBuZXcgT2JqZWN0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnhwb3MgPSBvYmplY3QubmV3UG9zLng7XHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS55cG9zID0gb2JqZWN0Lm5ld1Bvcy55O1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUub3JpZW50YXRpb24gPSBvYmplY3QuZDsgLy9nYW1lT2JqLmN1cnJlbnRTdGF0ZS5vcmllbnRhdGlvbjsgLy8gVE9ETyAoZG9uZSlcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmKG9iamVjdC50eXBlID09IEFQSS5vYmplY3RUeXBlLnRhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuYWN0aW9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsZW1lbnQuZGF0YS5kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbmV3U3RhdGUub3JpZW50YXRpb24gPSArZWxlbWVudC5kYXRhLmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS52eCA9IFNFVFRJTkdTLnNwZWVkICogKG5ld1N0YXRlLm9yaWVudGF0aW9uICUgMikgKiAoMiAtIG5ld1N0YXRlLm9yaWVudGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLnZ5ID0gU0VUVElOR1Muc3BlZWQgKiAoKG5ld1N0YXRlLm9yaWVudGF0aW9uICsgMSkgJSAyKSAqIChuZXdTdGF0ZS5vcmllbnRhdGlvbiAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZWxlbWVudC50eXBlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbGVtZW50Lm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU9iai5wZW5kaW5nU3RhdGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrOiBtc2cudGljayAtIG9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IG5ld1N0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYob2JqZWN0LnR5cGUgPT0gQVBJLm9iamVjdFR5cGUuZmlyZWJhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gob2JqZWN0LmQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFQSS5kaXJlY3Rpb24udXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Auc2V0VnkoLVNQRUVEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLnZ5ID0gLTAuMDA5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQVBJLmRpcmVjdGlvbi5yaWdodDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLnZ4ID0gMC4wMDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBUEkuZGlyZWN0aW9uLmRvd246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS52eSA9IDAuMDA5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQVBJLmRpcmVjdGlvbi5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUudnggPSAtMC4wMDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU9iai5jdXJyZW50U3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobXNnLnRpY2spO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGlkIGluIG9iamVjdHNCdWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmdhbWVJbmZvLm9iamVjdHNbaWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQVBJLm1zZ1R5cGUucGxheWVySW5mb106IChtc2cpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q29udHJvbHMoKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBpbml0Q29udHJvbHMoKSB7XHJcbiAgICAgICAvLyB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICB2YXIgbGFzdF9rZXlfY29kZSA9IDA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYobGFzdF9rZXlfY29kZSA9PSBldmVudC5rZXlDb2RlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGFzdF9rZXlfY29kZSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmtleUNvZGUpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKEFQSS5jbWQubW92ZSwgQVBJLmRpcmVjdGlvbi51cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgbXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUExBWUVSLnNldFZ5KC1TUEVFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoQVBJLmNtZC5tb3ZlLCBBUEkuZGlyZWN0aW9uLnJpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCBtdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUExBWUVSLnNldFZ4KFNQRUVEKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShBUEkuY21kLm1vdmUsIEFQSS5kaXJlY3Rpb24uZG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgbXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdkb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9QTEFZRVIuc2V0VnkoU1BFRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKEFQSS5jbWQubW92ZSwgQVBJLmRpcmVjdGlvbi5sZWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCBtdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUExBWUVSLnNldFZ4KC1TUEVFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoQVBJLmNtZC5maXJlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCBmaXJlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9QTEFZRVIuc2V0VngoLVNQRUVEKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID49IDM3ICYmIGV2ZW50LmtleUNvZGUgPD0gNDApe1xyXG4gICAgICAgICAgICAgICAgbGFzdF9rZXlfY29kZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKEFQSS5jbWQuc3RvcCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSAzMikge1xyXG4gICAgICAgICAgICAgICAgbGFzdF9rZXlfY29kZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlyZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9QTEFZRVIucmVzZXRTcGVlZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICBzZW5kTWVzc2FnZShjaWQsIGRhdGEpe1xyXG4gICAgICAgIGlmKGRhdGEgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkYXRhID0gJyc7XHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgICBjaWQ6IGNpZCxcclxuICAgICAgICAgICAgJ2RhdGEnOiBkYXRhXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuc2VydmVyVGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KG9wdGlvbnMpIHtcclxuICAgIHZhciBjbGllbnQgPSBuZXcgQ2xpZW50KG9wdGlvbnMpO1xyXG5cclxuICAgIHZhciByZW5kZXJlciA9IG5ldyBSZW5kZXJlcihcclxuICAgICAgICBjbGllbnQuZ2FtZUluZm9cclxuICAgICk7XHJcblxyXG4gICAgcmVuZGVyZXIucmVuZGVyKCk7XHJcblxyXG4gICAgY2xpZW50LmNvbm5lY3QoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NsaWVudC9jbGllbnQuanMiLCJpbXBvcnQgeyBTRVRUSU5HUyB9IGZyb20gJy4vc2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuL2FwaS1jb2Rlcy5qcyc7XHJcblxyXG52YXIgQlMgPSBTRVRUSU5HUy5ibG9ja1NpemU7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZUluZm8pIHtcclxuICAgICAgICB0aGlzLmdhbWVJbmZvID0gZ2FtZUluZm87XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5pZCA9IFwiZ2FtZS1tYXBcIjtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IFNFVFRJTkdTLm1hcFdpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IFNFVFRJTkdTLm1hcEhlaWdodDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhck1hcCgpIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCBTRVRUSU5HUy5tYXBXaWR0aCwgU0VUVElOR1MubWFwSGVpZ2h0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBsYXN0VGljayA9IHNlcnZlclRpbWUoKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgd29yayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmN0eC5maWxsUmVjdCgwLCAwLCBXLCBIKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJNYXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRpY2sgPSBzZXJ2ZXJUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSAodGljayAtIGxhc3RUaWNrKTsgLy8gLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2Zvcih2YXIgaWQgaW4gdGhpcy5nYW1lSW5mby5wbGF5ZXJzKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIHZhciBwID0gdGhpcy5nYW1lSW5mby5wbGF5ZXJzW2lkXTtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaWQgaW4gdGhpcy5nYW1lSW5mby5vYmplY3RzKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ2FtZUluZm8ub2JqZWN0c1tpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgcC51cGRhdGUodGljaywgZGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChwLm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBUEkub2JqZWN0VHlwZS50YW5rOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwLnVwZGF0ZSh0aWNrLCBkZWx0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShwLmN1cnJlbnRTdGF0ZS54cG9zKjYsIHAuY3VycmVudFN0YXRlLnlwb3MqNik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHAuY3VycmVudFN0YXRlLm9yaWVudGF0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFQSS5kaXJlY3Rpb24udXA6IC8vMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgucm90YXRlKE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLUJTKjMsIC1CUyozKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBUEkuZGlyZWN0aW9uLmxlZnQ6IC8vMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgucm90YXRlKE1hdGguUEkgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKDAsIC1CUyozKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBUEkuZGlyZWN0aW9uLmRvd246IC8vMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBUEkuZGlyZWN0aW9uLnJpZ2h0OiAvLyA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnJvdGF0ZSgtIE1hdGguUEkgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1CUyozLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgQlMsIEJTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KEJTK0JTLCAwLCBCUywgQlMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCBCUywgQlMsIEJTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KEJTLCBCUywgQlMsIEJTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KEJTK0JTLCBCUywgQlMsIEJTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoQlMsIEJTK0JTLCBCUywgQlMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBUEkub2JqZWN0VHlwZS5maXJlYmFsbDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShwLmN1cnJlbnRTdGF0ZS54cG9zKjYsIHAuY3VycmVudFN0YXRlLnlwb3MqNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCBCUywgQlMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYXN0VGljayA9IHRpY2s7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh3b3JrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUod29yayk7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY2xpZW50L3JlbmRlcmVyLmpzIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xyXG5pbXBvcnQgeyBGaXJlYmFsbCB9IGZyb20gJy4vcGxheWVyLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lSW5mbyB7XHJcbiAgICB1c2VyUGxheWVySWQgPSAwO1xyXG4gICAgLy9wbGF5ZXIgPSBudWxsO1xyXG4gICAgLy9wbGF5ZXJzID0ge307XHJcbiAgICBvYmplY3RzID0ge307XHJcbiAgICBvYmplY3RzQ291bnQgPSAwO1xyXG4gICAgLy9wbGF5ZXJzQ291bnQgPSAwO1xyXG5cclxuICAgIGdldEZpcmViYWxsKGlkKSB7XHJcbiAgICAgICAgaWYoIShpZCBpbiB0aGlzLm9iamVjdHMpKSB7XHJcbiAgICAgICAgICAgIHZhciBmaXJlYmFsbCA9IG5ldyBGaXJlYmFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9iamVjdHNbaWRdID0gZmlyZWJhbGw7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJlYmFsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0c1tpZF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFBsYXllcihpZCkge1xyXG4gICAgICAgIGlmKCEoaWQgaW4gdGhpcy5wbGF5ZXJzKSkge1xyXG4gICAgICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcigpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbaWRdID0gcGxheWVyO1xyXG4gICAgICAgICAgICByZXR1cm4gcGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzW2lkXTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NsaWVudC9nYW1lLWluZm8uanMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9vYmplY3QuanMnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuL2FwaS1jb2Rlcy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlyZWJhbGwgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAgIG9iamVjdFR5cGUgPSBBUEkub2JqZWN0VHlwZS5maXJlYmFsbDtcclxuXHJcbiAgICAvKmNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gbmV3IE9iamVjdFN0YXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50U3RhdGUpO1xyXG4gICAgfSovXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY2xpZW50L2ZpcmViYWxsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==