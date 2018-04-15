webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_list_user_list_component__ = __webpack_require__("./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_feed_feed_component__ = __webpack_require__("./src/app/components/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_send_send_component__ = __webpack_require__("./src/app/components/send/send.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_chatroom_chatroom_component__ = __webpack_require__("./src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_feed_header_feed_header_component__ = __webpack_require__("./src/app/components/feed-header/feed-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_peer_chat_peer_chat_component__ = __webpack_require__("./src/app/components/peer-chat/peer-chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_chatroom_chatroom_component__["a" /* ChatroomComponent */] },
    { path: 'peer', component: __WEBPACK_IMPORTED_MODULE_15__components_peer_chat_peer_chat_component__["a" /* PeerChatComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_send_send_component__["a" /* SendComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_chatroom_chatroom_component__["a" /* ChatroomComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_feed_header_feed_header_component__["a" /* FeedHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_peer_chat_peer_chat_component__["a" /* PeerChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_8__services_websocket_service__["a" /* WebsocketService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column is-one-fifth\">\n    <app-user-list class=\"box\"></app-user-list>\n  </div>\n\n  <div class=\"columns\">\n    <div class=\"column\">\n      <app-feed-header class=\"box\"></app-feed-header>\n      <app-feed class=\"box\"></app-feed>\n      <app-send></app-send>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent(websocketService) {
        this.websocketService = websocketService;
    }
    ChatroomComponent.prototype.ngOnInit = function () {
        this.socket = this.websocketService.connect();
    };
    ChatroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chatroom',
            template: __webpack_require__("./src/app/components/chatroom/chatroom.component.html"),
            styles: [__webpack_require__("./src/app/components/chatroom/chatroom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */]])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/components/feed-header/feed-header.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    height: 12vh;\n    width: 79vw;\n    margin-right: 25px;\n    margin-left: 10px;\n    margin-top: 25px;\n}"

/***/ }),

/***/ "./src/app/components/feed-header/feed-header.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"subtitle\">{{activeUserItem.fullName}}</h1>\n<button class=\"button\" (click)=\"startVideoCall(activeUserItem.id)\">Video call</button> \n<button class=\"button\" (click)=\"startVoiceCall(activeUserItem.id)\">Voice call</button> \n"

/***/ }),

/***/ "./src/app/components/feed-header/feed-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_simple_peer__ = __webpack_require__("./node_modules/simple-peer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_simple_peer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_simple_peer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedHeaderComponent = /** @class */ (function () {
    function FeedHeaderComponent(chatService, websocketService, userService, router) {
        this.chatService = chatService;
        this.websocketService = websocketService;
        this.userService = userService;
        this.router = router;
    }
    FeedHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.currentActiveUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
        this.userService.currentOnlineUsers.subscribe(function (onlineUsers) { return _this.onlineUsers = _this.onlineUsers; });
        this.socket.on('recieveSignal', function (data) {
            if (data.type === 'offer') {
                if (data.chatType === 'video') {
                    _this.createPeer({ audio: true, video: true }, data.id, 'answer', null, data.peerId);
                }
                else {
                    _this.createPeer({ audio: true, video: false }, data.id, 'answer', null, data.peerId);
                }
            }
            else {
                _this.peer.signal(data.peerId);
            }
        });
    };
    FeedHeaderComponent.prototype.startVideoCall = function (id) {
        this.createPeer({ audio: true, video: true }, id, 'offer', 'video', null);
    };
    FeedHeaderComponent.prototype.startVoiceCall = function (id) {
        this.createPeer({ audio: true, video: false }, id, 'offer', 'voice', null);
    };
    FeedHeaderComponent.prototype.createPeer = function (options, id, type, chatType, peerId) {
        var _this = this;
        var peerx;
        navigator.getUserMedia({ video: options.video, audio: options.audio }, function (stream) {
            peerx = new __WEBPACK_IMPORTED_MODULE_5_simple_peer__({
                initiator: location.hash === '#available',
                trickle: false,
                stream: stream,
                objectMode: true,
                reconnectTimer: 150,
                config: {
                    iceServers: [{ urls: [
                                'stun:stun.l.google.com:19302',
                                'stun:stun1.l.google.com:19302',
                                'stun:stun2.l.google.com:19302',
                                'stun:stun3.l.google.com:19302',
                                'stun:stun4.l.google.com:19302'
                            ] }
                    ]
                }
            });
            peerx.on('error', function (err) { return console.log(err); });
            peerx.on('connect', function () {
                _this.chatService.changePeer(_this.peer);
                _this.router.navigate(['peer']);
            });
            peerx.on('signal', function (data) {
                _this.peerId = data;
                _this.socket.emit('sendSignal', { id: id, peerId: data, chatType: chatType, type: type });
            });
            peerx.on('stream', function (stream) { return _this.chatService.changeStream(stream); });
            peerx.on('close', function () { return _this.router.navigate(['']); });
        }, function (err) { return console.log(err); });
        setTimeout(function () {
            _this.peer = peerx;
            if (type === 'answer') {
                _this.peer.signal(peerId);
            }
        }, 3000);
    };
    FeedHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feed-header',
            template: __webpack_require__("./src/app/components/feed-header/feed-header.component.html"),
            styles: [__webpack_require__("./src/app/components/feed-header/feed-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], FeedHeaderComponent);
    return FeedHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/feed/feed.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    height: 69vh;\n    width: 79vw;\n    margin-right: 25px;\n    margin-left: 10px;\n    margin-top: 25px;\n}"

/***/ }),

/***/ "./src/app/components/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let message of activeConversation\">{{message.message}}</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedComponent = /** @class */ (function () {
    function FeedComponent(websocketService, chatService) {
        this.websocketService = websocketService;
        this.chatService = chatService;
        this.conversations = [];
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.currentActiveUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
        this.chatService.currentActiveConversation.subscribe(function (id) {
            _this.activeConversation = _this.conversations[id];
        });
        this.socket.on('newMessage', function (data) {
            if (_this.conversations[data.id]) {
                _this.conversations[data.id].push({ message: data.message });
            }
            else {
                _this.conversations[data.id] = [{ message: data.message }];
            }
        });
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feed',
            template: __webpack_require__("./src/app/components/feed/feed.component.html"),
            styles: [__webpack_require__("./src/app/components/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" href=\"/\">\n      <h1 class=\"title is-4 has-text-white\">PeerChat</h1>\n    </a>\n  </div>\n\n  <div class=\"navbar-menu\">\n    <div class=\"navbar-end\">\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/peer-chat/peer-chat.component.css":
/***/ (function(module, exports) {

module.exports = ":host div {\n    height: 80vh;\n}"

/***/ }),

/***/ "./src/app/components/peer-chat/peer-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"has-text-centered\">\n<div class=\"box\">\n  <video #videoChat></video>\n</div>\n\n<button class=\"button\" (click)=\"endCall()\">End call</button>\n</div>"

/***/ }),

/***/ "./src/app/components/peer-chat/peer-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeerChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeerChatComponent = /** @class */ (function () {
    function PeerChatComponent(chatService, router) {
        this.chatService = chatService;
        this.router = router;
    }
    PeerChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var video = this.videoChat.nativeElement;
        this.chatService.currentStream.subscribe(function (stream) {
            _this.stream = _this.stream;
            video.src = window.URL.createObjectURL(stream);
            video.play();
        });
        this.chatService.currentPeer.subscribe(function (peer) { return _this.peer = peer; });
    };
    PeerChatComponent.prototype.endCall = function () {
        this.peer.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('videoChat'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "videoChat", void 0);
    PeerChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-peer-chat',
            template: __webpack_require__("./src/app/components/peer-chat/peer-chat.component.html"),
            styles: [__webpack_require__("./src/app/components/peer-chat/peer-chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], PeerChatComponent);
    return PeerChatComponent;
}());



/***/ }),

/***/ "./src/app/components/send/send.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    position: fixed;\n    bottom: 40px;\n    height: 5vh;\n    width: 65vw;\n    margin-right: 25px;\n    margin-top: 25px;\n}\n\n:host input {\n    margin-left: 140px;\n    width: 60vw;\n}"

/***/ }),

/***/ "./src/app/components/send/send.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"field has-addons\">\n  <div class=\"control\">\n    <input type=\"text\" placeholder=\"Enter message...\" class=\"input\" #message>\n  </div>\n  <div class=\"control\">\n    <button type=\"btn\" class=\"button is-link\" (click)=\"sendMessage(message.value, activeUserItem.id)\">Send</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/send/send.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendComponent = /** @class */ (function () {
    function SendComponent(websocketService, chatService) {
        this.websocketService = websocketService;
        this.chatService = chatService;
    }
    SendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.currentActiveUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
    };
    SendComponent.prototype.sendMessage = function (message, id) {
        this.socket.emit('sendMessage', { message: message, id: id });
    };
    SendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-send',
            template: __webpack_require__("./src/app/components/send/send.component.html"),
            styles: [__webpack_require__("./src/app/components/send/send.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], SendComponent);
    return SendComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    height: 88.5vh;\n    margin-top: 14px;\n    margin-left: 14px;\n}\n\n:host a {\n    font-size: 20px;\n}"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">Online Users</h1>\n\n<ul>\n  <li *ngFor=\"let user of onlineUsers\"><a (click)=\"changeItem(user)\">{{user.fullName}}</a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserListComponent = /** @class */ (function () {
    function UserListComponent(websocketService, userService, chatService) {
        this.websocketService = websocketService;
        this.userService = userService;
        this.chatService = chatService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.currentActiveUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
        this.userService.getCurrentUser()
            .subscribe(function (user) {
            _this.currentUser = user;
            _this.socket.emit('newUser', user);
        });
        this.socket.on('updateOnlineUsers', function (onlineUsers) {
            _this.onlineUsers = onlineUsers;
            for (var i = 0; i < _this.onlineUsers.length; i++) {
                if (_this.onlineUsers[i].id === _this.currentUser.id) {
                    _this.onlineUsers.splice(i, 1);
                }
            }
        });
        this.onlineUsers = [
            { fullName: 'Kalle' },
            { fullName: 'Sven' },
            { fullName: 'Erik' }
        ];
    };
    UserListComponent.prototype.changeItem = function (user) {
        this.chatService.changeActiveUserItem(user);
        this.chatService.changeActiveConversation(user.id);
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__("./src/app/components/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatService = /** @class */ (function () {
    function ChatService() {
        this.activeUserItem = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({ id: null, fullName: 'none' });
        this.stream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.peer = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.activeConversation = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentActiveUserItem = this.activeUserItem.asObservable();
        this.currentStream = this.stream.asObservable();
        this.currentPeer = this.peer.asObservable();
        this.currentActiveConversation = this.activeConversation.asObservable();
    }
    ChatService.prototype.changeActiveUserItem = function (user) {
        this.activeUserItem.next(user);
    };
    ChatService.prototype.changeStream = function (stream) {
        this.stream.next(stream);
    };
    ChatService.prototype.changeActiveConversation = function (conversation) {
        this.activeConversation.next(conversation);
    };
    ChatService.prototype.changePeer = function (peer) {
        this.peer.next(peer);
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.onlineUsersSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentOnlineUsers = this.onlineUsersSource.asObservable();
    }
    UserService.prototype.changeOnlineUsers = function (onlineUsers) {
        this.onlineUsersSource.next(onlineUsers);
    };
    UserService.prototype.getCurrentUser = function () {
        return this.http.get('http://localhost:8000/user/current')
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]('http://localhost:8000');
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map