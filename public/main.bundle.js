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

module.exports = ".navbarComponent {\n    height: 5vh;\n}\n\n.chatroomComponent {\n    height: 95vh;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"navbarComponent\">\n  <app-navbar></app-navbar>\n</div> -->\n\n<div class=\"chatroomComponent\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_welcome_welcome_component__ = __webpack_require__("./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_friend_requests_friend_requests_component__ = __webpack_require__("./src/app/components/friend-requests/friend-requests.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_15__components_peer_chat_peer_chat_component__["a" /* PeerChatComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_friend_requests_friend_requests_component__["a" /* FriendRequestsComponent */]
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

module.exports = ".show {\n    display: block;\n}\n\n.hide {\n    display: none;\n}\n\n.search {\n    background-color: rgb(72, 21, 78);\n    height: 8vh;\n}\n\n.friend-requests {\n    background-color: rgb(72, 21, 78);\n    height: 8vh;\n}\n\n.user-list {\n    background-color: rgb(72, 21, 78);\n    height: 84vh;\n}\n\n.welcome {\n    background-color: rgb(248, 246, 248);\n    height: 100vh;\n    padding: 20px;\n}\n\n.feed-header {\n    background-color: white;\n    height:8vh;\n}\n\n.feed {\n    background-color: rgb(248, 246, 248);\n    height: 87vh;\n}\n\n.send {\n    background-color: white;\n    height: 5vh;\n}"

/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-gapless\">\n  <div class=\"column is-one-fifth\">\n    <div class=\"search\">\n      <app-search></app-search>\n    </div>\n    <div class=\"friend-requests\">\n        <app-friend-requests></app-friend-requests>\n      </div>\n    <div class=\"user-list\">\n      <app-user-list></app-user-list>\n    </div>\n  </div>\n\n  <div class=\"column\">\n    <div [style.display]=\"displayWelcome\">\n      <div class=\"welcome\">\n        <app-welcome></app-welcome>\n      </div>\n\n    </div>\n\n    <div [style.display]=\"displayChatComponents\">\n      <div class=\"feed-header\">\n        <app-feed-header></app-feed-header>\n      </div>\n\n      <div class=\"feed\">\n        <app-feed></app-feed>\n      </div>\n\n      <div class=\"send\">\n        <app-send></app-send>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomComponent; });
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



var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent(websocketService, chatService) {
        this.websocketService = websocketService;
        this.chatService = chatService;
        this.displayWelcome = 'block';
        this.displayChatComponents = 'none';
    }
    ChatroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.connect();
        this.chatService.currentActiveUserItem.subscribe(function (activeUserItem) {
            _this.activeUserItem = activeUserItem;
            if (activeUserItem.id !== null) {
                _this.displayWelcome = 'none';
                _this.displayChatComponents = 'block';
            }
        });
    };
    ChatroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chatroom',
            template: __webpack_require__("./src/app/components/chatroom/chatroom.component.html"),
            styles: [__webpack_require__("./src/app/components/chatroom/chatroom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/components/feed-header/feed-header.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    margin: 0px;\n    padding: 0px;\n}\n\n:host h1 {\n    font-size: 30px;\n    margin: 10px;\n}\n\n:host button {\n    margin: 10px;\n}\n\n:host .navbar {\n    background-color: white;\n}"

/***/ }),

/***/ "./src/app/components/feed-header/feed-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!calling\">\n  <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"navbar-brand\">\n        <h1 class=\"title is-4\">{{activeUserItem.fullName}}</h1>\n    </div>\n\n    <div class=\"navbar-menu\">\n      <div class=\"navbar-end\">\n        <div class=\"navbar-item\">\n          <button class=\"button is-primary\" (click)=\"startVideoCall(activeUserItem.id)\">Video call</button>\n          <button class=\"button is-primary\" (click)=\"startVoiceCall(activeUserItem.id)\">Voice call</button>\n        </div>\n      </div>\n    </div>\n  </nav>\n</div>\n\n<div *ngIf=\"calling\">\n  <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"navbar-brand\">\n        <h1 class=\"title is-4\">{{activeUserItem.fullName}}</h1>\n    </div>\n\n    <div class=\"navbar-menu\">\n      <div class=\"navbar-end\">\n        <div class=\"navbar-item\">\n          <button class=\"button is-success\" (click)=\"answerCall()\">Answer call</button>\n          <button class=\"button is-danger\" (click)=\"hangUp()\">Hang up</button>\n        </div>\n      </div>\n    </div>\n  </nav>\n</div>\n"

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
        this.calling = false;
    }
    FeedHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.currentActiveUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
        this.socket.on('recieveSignal', function (data) {
            if (data.type === 'offer') {
                _this.calling = true;
                _this.data = data;
            }
            else {
                _this.peer.signal(data.peerId);
            }
        });
        this.socket.on('hangUp', function () {
            _this.localStream.getTracks()
                .forEach(function (x) { return x.stop(); });
        });
    };
    FeedHeaderComponent.prototype.startVideoCall = function (id) {
        this.createPeer({ audio: true, video: true }, id, 'offer', 'video', null);
    };
    FeedHeaderComponent.prototype.startVoiceCall = function (id) {
        this.createPeer({ audio: true, video: false }, id, 'offer', 'voice', null);
    };
    FeedHeaderComponent.prototype.answerCall = function () {
        if (this.data.chatType === 'video') {
            this.createPeer({ audio: true, video: true }, this.data.id, 'answer', null, this.data.peerId);
        }
        else {
            this.createPeer({ audio: true, video: false }, this.data.id, 'answer', null, this.data.peerId);
        }
    };
    FeedHeaderComponent.prototype.hangUp = function () {
        this.calling = false;
        this.socket.emit('hangUp', this.data.id);
    };
    FeedHeaderComponent.prototype.createPeer = function (options, id, type, chatType, peerId) {
        var _this = this;
        var peerx;
        var init;
        if (type === 'offer') {
            init = true;
        }
        else {
            init = false;
        }
        navigator.mediaDevices.getUserMedia({ video: options.video, audio: options.audio })
            .then(function (stream) {
            _this.localStream = stream;
            peerx = new __WEBPACK_IMPORTED_MODULE_5_simple_peer__({
                initiator: init,
                trickle: false,
                stream: stream,
                objectMode: true,
                reconnectTimer: 250,
                config: {
                    iceServers: [{ urls: [
                                'stun:stun.l.google.com:19302',
                                'stun:stun1.l.google.com:19302',
                                'stun:stun2.l.google.com:19302',
                                'stun:stun3.l.google.com:19302',
                                'stun:stun4.l.google.com:19302'
                            ] },
                        {
                            urls: 'stun:numb.viagenie.ca',
                            username: 'rasmus.falk@live.se',
                            credential: 'M581Z6DzR97BPSQltlbvq2jGXwObjoZB'
                        },
                        {
                            urls: 'turn:numb.viagenie.ca',
                            username: 'rasmus.falk@live.se',
                            credential: 'M581Z6DzR97BPSQltlbvq2jGXwObjoZB'
                        }
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
            peerx.on('close', function () {
                _this.router.navigate(['']);
                _this.localStream.getTracks()
                    .forEach(function (x) { return x.stop(); });
            });
        })
            .catch(function (err) { return console.log(err); });
        setTimeout(function () {
            _this.peer = peerx;
            if (type === 'answer') {
                _this.peer.signal(peerId);
            }
        }, 2000);
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

module.exports = ":host {\n    margin: 0px;\n    padding: 0px;\n}\n\n:host .message {\n    width: 30%;\n}\n\n:host .peer {\n    background-color: rgb(106, 105, 194);\n    float: right;\n}\n\n:host .you {\n    background-color: rgb(255, 255, 255);\n    float: left;\n}\n\n:host .message .card-content {\n    font-size: 16px;\n}"

/***/ }),

/***/ "./src/app/components/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let message of activeConversation\">\n    <div *ngIf=\"message.sender === 'you'\">\n      <div class=\"card message you\">\n        <div class=\"card-content\">\n          <p>{{message.message}}</p>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"message.sender === 'peer'\">\n        <div class=\"card message you\">\n          <div class=\"card-content\">\n            <p class=\"has-text-white\">{{message.message}}</p>\n          </div>\n        </div>\n      </div>\n  </li>\n</ul>\n"

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
                _this.conversations[data.id].push({ message: data.message, sender: data.name });
            }
            else {
                _this.conversations[data.id] = [];
                _this.conversations[data.id].push({ message: data.message, sender: data.name });
                if (_this.activeUserItem.id === data.id) {
                    _this.activeConversation = _this.conversations[data.id];
                }
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

/***/ "./src/app/components/friend-requests/friend-requests.component.css":
/***/ (function(module, exports) {

module.exports = ":host button {\n    margin-top: 0vh;\n    height: 4vh;\n    width: 18vw;\n    margin-left: 1vw;\n}"

/***/ }),

/***/ "./src/app/components/friend-requests/friend-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"button is-primary\" (click)=\"viewFriendRequests()\">Friend requests</button>\n"

/***/ }),

/***/ "./src/app/components/friend-requests/friend-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendRequestsComponent; });
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



var FriendRequestsComponent = /** @class */ (function () {
    function FriendRequestsComponent(websocketService, chatService) {
        this.websocketService = websocketService;
        this.chatService = chatService;
        this.friendRequests = [];
    }
    FriendRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.socket.on('addUser', function (request) {
            _this.friendRequests.push(request);
            _this.chatService.changeFriendRequestUsers(_this.friendRequests);
        });
        this.socket.on('acceptRequest', function () {
            _this.chatService.getFriends()
                .subscribe(function (friends) { return _this.chatService.changeFriends(friends); });
        });
    };
    FriendRequestsComponent.prototype.viewFriendRequests = function () {
        var _this = this;
        this.chatService.getFriendRequests()
            .subscribe(function (data) {
            _this.chatService.changeState("friendRequest");
            _this.chatService.changeFriendRequestUsers(data);
            _this.friendRequests = data;
        });
    };
    FriendRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-friend-requests',
            template: __webpack_require__("./src/app/components/friend-requests/friend-requests.component.html"),
            styles: [__webpack_require__("./src/app/components/friend-requests/friend-requests.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], FriendRequestsComponent);
    return FriendRequestsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" href=\"/\">\n      <h1 class=\"title is-4 has-text-white\">PeerChat</h1>\n    </a>\n  </div>\n\n  <div class=\"navbar-menu\">\n    <div class=\"navbar-end\">\n        <a class=\"navbar-item\" href=\"/signout\">Sign out</a>\n    </div>\n  </div>\n</nav>\n"

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

module.exports = ":host video {\n    width: 50%;\n    margin-top: 5vh;\n}\n\n:host .background {\n    background-color: rgb(248, 246, 248);\n    height: 100vh;\n}\n\n:host button {\n    font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/peer-chat/peer-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"has-text-centered background\">\n<div>\n  <video #videoChat poster=\"../../../assets/poster.png\"></video>\n</div>\n\n<button class=\"button is-danger\" (click)=\"endCall()\">End call</button>\n</div>"

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

/***/ "./src/app/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".searchInput input {\n    margin-top: 2vh;\n    height: 4vh;\n    width: 14vw;\n    margin-left: 1vw\n}\n\n.searchInput button {\n    margin-top: 2vh;\n    height: 4vh;\n    width: 4vw;\n}"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"field has-addons searchInput\">\n    <div class=\"control\">\n      <input type=\"text\" placeholder=\"Search for a user...\" class=\"input\" #query>\n    </div>\n    <div class=\"control\">\n      <button type=\"btn\" class=\"button is-primary\" (click)=\"search(query.value)\">Find</button>\n    </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
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



var SearchComponent = /** @class */ (function () {
    function SearchComponent(userService, chatService) {
        this.userService = userService;
        this.chatService = chatService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (query) {
        var _this = this;
        this.userService.getUsersByFullName(query)
            .subscribe(function (users) {
            _this.chatService.changeState("search");
            _this.chatService.changeSearchUsers(users);
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/send/send.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    margin: 0px;\n    padding: 0px;\n}\n\n:host input {\n    height: 5vh;\n    width: 70vw;\n}\n\n:host button {\n    height: 5vh;\n    width: 10vw;\n}"

/***/ }),

/***/ "./src/app/components/send/send.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"field has-addons\">\n  <div class=\"control\">\n    <input type=\"text\" placeholder=\"Enter message...\" class=\"input\" #message>\n  </div>\n  <div class=\"control\">\n    <button type=\"btn\" class=\"button is-primary\" (click)=\"sendMessage(message.value, activeUserItem.id)\">Send</button>\n  </div>\n</div>\n"

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

module.exports = ":host {\n    margin: 0px;\n    padding: 0px;\n}\n\n.user-item {\n    font-size: 30px;\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n.friendTitle {\n    font-size: 40px;\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n:host .back {\n    margin-top: 0vh;\n    height: 4vh;\n    width: 18vw;\n    margin-left: 1vw;\n    margin-bottom: 3vh;\n}"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"state === 'friendList'\">\n  <h1 class=\"title has-text-white friendTitle\">Friend list</h1>\n  <ul>\n    <li *ngFor=\"let friend of friends\">\n      <a (click)=\"changeItem(friend)\" class=\"has-text-link user-item\">{{friend.fullName}}</a>\n    </li>\n  </ul>\n</div>\n\n<div *ngIf=\"state === 'search'\">\n  <button class=\"button back\" (click)=\"state = 'friendList'\">Go back</button>\n  <ul>\n    <li *ngFor=\"let user of searchUsers\">\n      <span class=\"has-text-white user-item\">{{user.fullName}}</span>\n      <button class=\"button is-link\" (click)=\"addUser(user.id)\">Add</button>\n    </li>\n  </ul>\n</div>\n\n<div *ngIf=\"state === 'friendRequest'\">\n  <button class=\"button back\" (click)=\"state = 'friendList'\">Go back</button>\n  <ul>\n    <li *ngFor=\"let request of friendRequestUsers\">\n      <span class=\"has-text-white user-item\">{{request.fullName}}</span>\n      <button class=\"button is-success\" (click)=\"acceptUser(request.email)\">Accept</button>\n      <button class=\"button is-danger\" (click)=\"declineRequest(request.email)\">Decline</button>\n    </li>\n  </ul>\n</div>\n"

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
        this.chatService.currentSearchUsers.subscribe(function (searchUsers) { return _this.searchUsers = searchUsers; });
        this.chatService.currentState.subscribe(function (state) { return _this.state = state; });
        this.chatService.currentFriendRequestUsers.subscribe(function (friendRequestUsers) { return _this.friendRequestUsers = friendRequestUsers; });
        this.chatService.currentFriends.subscribe(function (friends) { return _this.friends = friends; });
        this.userService.getCurrentUser()
            .subscribe(function (user) {
            _this.currentUser = user;
            _this.socket.emit('newUser', user);
        });
        this.chatService.getFriends()
            .subscribe(function (friends) {
            _this.friends = friends;
        });
        // this.socket.on('updateOnlineUsers', onlineUsers => {
        //   this.onlineUsers = onlineUsers
        //   for (let i = 0; i < this.onlineUsers.length; i++) {
        //     if (this.onlineUsers[i].id === this.currentUser.id) {
        //       this.onlineUsers.splice(i, 1)
        //     }
        //   }
        // })
    };
    UserListComponent.prototype.changeItem = function (user) {
        this.chatService.changeActiveUserItem(user);
        this.chatService.changeActiveConversation(user.id);
    };
    UserListComponent.prototype.addUser = function (id) {
        this.socket.emit('addUser', id);
        this.chatService.changeState("friendList");
    };
    UserListComponent.prototype.acceptUser = function (email) {
        this.socket.emit('acceptRequest', email);
        this.chatService.changeState("friendList");
    };
    UserListComponent.prototype.declineRequest = function (email) {
        this.socket.emit('declineRequest', email);
        this.chatService.changeState("friendList");
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

/***/ "./src/app/components/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    margin: 0px;\n    padding: 0px;\n}"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">Welcome to PeerChat!</h1>\n<p>We are glad to the that you choose to use our brand new chat application! Select an online user from the list to the left and start chating. You can make video or voice calls, aswell as writing regular textmessages.</p>\n<br>\n<h2 class=\"subtitle\">Have fun!</h2>\n"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
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

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/components/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
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




var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.activeUserItem = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({ id: null, fullName: 'no user selected' });
        this.stream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.peer = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.activeConversation = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.searchUsers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.friendRequestUsers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.friends = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.state = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('friendList');
        this.currentActiveUserItem = this.activeUserItem.asObservable();
        this.currentStream = this.stream.asObservable();
        this.currentPeer = this.peer.asObservable();
        this.currentActiveConversation = this.activeConversation.asObservable();
        this.currentSearchUsers = this.searchUsers.asObservable();
        this.currentState = this.state.asObservable();
        this.currentFriendRequestUsers = this.friendRequestUsers.asObservable();
        this.currentFriends = this.friends.asObservable();
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
    ChatService.prototype.changeSearchUsers = function (searchUsers) {
        this.searchUsers.next(searchUsers);
    };
    ChatService.prototype.changeState = function (state) {
        this.state.next(state);
    };
    ChatService.prototype.changeFriendRequestUsers = function (friendRequestUsers) {
        this.friendRequestUsers.next(friendRequestUsers);
    };
    ChatService.prototype.getFriendRequests = function () {
        return this.http.get('https://rasmusfalk.se/user/friendRequests')
            .map(function (res) { return res.json().requests; });
    };
    ChatService.prototype.changeFriends = function (friends) {
        this.friends.next(friends);
    };
    ChatService.prototype.getFriends = function () {
        return this.http.get('https://rasmusfalk.se/user/friends')
            .map(function (res) { return res.json().friends; });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
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
    }
    UserService.prototype.getCurrentUser = function () {
        return this.http.get('https://rasmusfalk.se/user/current')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUsersByFullName = function (name) {
        return this.http.post('https://rasmusfalk.se/user/fullName', { fullName: name })
            .map(function (res) { return res.json().users; });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
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
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]('https://rasmusfalk.se');
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