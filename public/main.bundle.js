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

module.exports = "html,\nbody {\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chatroomComponent\">\n  <router-outlet></router-outlet>\n</div>\n"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_popup_service__ = __webpack_require__("./src/app/services/popup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_list_user_list_component__ = __webpack_require__("./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_feed_feed_component__ = __webpack_require__("./src/app/components/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_send_send_component__ = __webpack_require__("./src/app/components/send/send.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_chatroom_chatroom_component__ = __webpack_require__("./src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_feed_header_feed_header_component__ = __webpack_require__("./src/app/components/feed-header/feed-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_peer_chat_peer_chat_component__ = __webpack_require__("./src/app/components/peer-chat/peer-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_welcome_welcome_component__ = __webpack_require__("./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_friend_requests_friend_requests_component__ = __webpack_require__("./src/app/components/friend-requests/friend-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_popup_popup_component__ = __webpack_require__("./src/app/components/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_loading_loading_component__ = __webpack_require__("./src/app/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_current_user_current_user_component__ = __webpack_require__("./src/app/components/current-user/current-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_flash_message_flash_message_component__ = __webpack_require__("./src/app/components/flash-message/flash-message.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_10__components_user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_send_send_component__["a" /* SendComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_chatroom_chatroom_component__["a" /* ChatroomComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_feed_header_feed_header_component__["a" /* FeedHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_peer_chat_peer_chat_component__["a" /* PeerChatComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_friend_requests_friend_requests_component__["a" /* FriendRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_popup_popup_component__["a" /* PopupComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_current_user_current_user_component__["a" /* CurrentUserComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_flash_message_flash_message_component__["a" /* FlashMessageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_8__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_9__services_popup_service__["a" /* PopupService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.css":
/***/ (function(module, exports) {

module.exports = ".loading {\n  height: 100vh;\n  background-color: rgb(248, 246, 248);\n}\n\n.current-user {\n  background-color: #8e44ad;\n  height: 100px;\n}\n\n.error,\n.info {\n  position: absolute;\n  width: 100%\n}\n\n.search {\n  background-color: rgb(72, 21, 78);\n  height: 65px;\n}\n\n.friend-requests {\n  background-color: rgb(72, 21, 78);\n  height: 70px;\n}\n\n.user-list {\n  background-color: rgb(72, 21, 78);\n  position: absolute;\n  bottom: 0;\n  top: 235px;\n  width: 100%;\n  overflow-y: scroll;\n}\n\n.welcome {\n  background-color: rgb(248, 246, 248);\n  height: 100vh;\n  padding: 20px;\n  position: relative;\n}\n\n.feed-header {\n  background-color: white;\n  height: 70px;\n}\n\n.feed {\n  background-color: rgb(248, 246, 248);\n  overflow-y: scroll;\n  position: absolute;\n  bottom: 40px;\n  top: 70px;\n  width: 100%\n}\n\n.send {\n  background-color: white;\n  height: 40px;\n  position: fixed;\n  bottom: 0px;\n}\n"

/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!loading\">\n  <div class=\"loading\">\n    <app-loading></app-loading>\n  </div>\n</div>\n\n<div *ngIf=\"!loading\">\n  <div *ngIf=\"calling || dialing\">\n    <app-popup></app-popup>\n  </div>\n\n  <div *ngIf=\"flashMessage.type !== null\">\n    <app-flash-message></app-flash-message>\n  </div>\n\n  <div class=\"columns is-gapless\">\n    <div class=\"column is-one-third\">\n      <div class=\"current-user\">\n        <app-current-user></app-current-user>\n      </div>\n      <div class=\"search\">\n        <app-search></app-search>\n      </div>\n      <div class=\"friend-requests\">\n        <app-friend-requests></app-friend-requests>\n      </div>\n      <div class=\"user-list\">\n        <app-user-list></app-user-list>\n      </div>\n    </div>\n\n    <div class=\"column right\">\n      <div [style.display]=\"displayWelcome\">\n        <div class=\"welcome\">\n          <app-welcome></app-welcome>\n        </div>\n      </div>\n\n      <div [style.display]=\"displayChatComponents\">\n        <div class=\"feed-header\">\n          <app-feed-header></app-feed-header>\n        </div>\n\n        <div class=\"feed\">\n          <app-feed></app-feed>\n        </div>\n\n        <div class=\"send\">\n          <app-send></app-send>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

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
        this.loading = true;
    }
    ChatroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.websocketService.connect();
        this.socket = this.websocketService.socket;
        this.chatService.calling.subscribe(function (calling) { return _this.calling = calling; });
        this.chatService.dialing.subscribe(function (dialing) { return _this.dialing = dialing; });
        this.chatService.flashMessage.subscribe(function (flashMessage) { return _this.flashMessage = flashMessage; });
        this.chatService.activeUserItem.subscribe(function (activeUserItem) {
            if (activeUserItem.id === null) {
                _this.displayWelcome = 'block';
                _this.displayChatComponents = 'none';
            }
            else {
                _this.displayWelcome = 'none';
                _this.displayChatComponents = 'block';
            }
            _this.loading = false;
        });
        this.socket.on('friendResponseServer', function (data) {
            if (data.type === 'success') {
                _this.chatService.changeFlashMessage({ type: 'info', message: data.message, color: 'success' });
                _this.chatService.changeState("friendList");
            }
            if (data.type === 'error') {
                _this.chatService.changeFlashMessage({ type: 'info', message: data.message, color: 'warning' });
            }
        });
        this.socket.on('messageResponseServer', function (data) {
            _this.chatService.changeFlashMessage({ type: 'info', message: data.message, color: 'warning' });
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

/***/ "./src/app/components/current-user/current-user.component.css":
/***/ (function(module, exports) {

module.exports = ":host div {\n  margin-left: 12px;\n  padding-top: 10px;\n}\n\n:host img {\n  height: 80px;\n  margin-right: 20px;\n  border-radius: 100%;\n  float: left;\n  clear: both;\n}\n\n:host .name {\n  padding-top: 10px;\n  color: white;\n  font-size: 25px;\n  font-weight: 900;\n  display: block;\n}\n\n:host .select {\n  margin-top: -30px;\n  margin-left: -7px;\n  font-size: 18px;\n}\n\n:host .select select {\n  background-color: transparent;\n  border: none;\n  color: white;\n  margin-top: -15px;\n}\n\n:host .select:after {\n  margin-right: 1.5vw;\n  margin-top: -7px;\n}\n\n:host .status {\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  display: inline-block;\n  position: absolute;\n  margin-top: 55px;\n  margin-left: -40px;\n}\n\n.online {\n  background-color: rgb(4, 214, 134);\n}\n\n.offline {\n  background-color: rgb(255, 255, 255);\n}\n\n.away {\n  background-color: rgb(243, 247, 3);\n}\n\n.busy {\n  background-color: rgb(247, 6, 6);\n}\n\n:host button {\n  height: 70px;\n  width: 70px;\n  margin: 15px;\n  margin-top: -63px;\n  border-radius: 100%;\n  float: right;\n}\n\n:host button span {\n  font-size: 43px;\n}\n"

/***/ }),

/***/ "./src/app/components/current-user/current-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"{{currentUser.avatar}}\">\n  <span class=\"status\" [ngClass]=\"{'online' : currentUser.status === 'online', 'offline' : currentUser.status === 'offline', 'away' : currentUser.status === 'away', 'busy' : currentUser.status === 'busy'}\"></span>\n  <span class=\"name\">{{currentUser.fullName}}</span>\n  <br>\n</div>\n\n<div class=\"select\">\n  <select #status (input)=\"changeStatus(status.value)\">\n    <option value=\"online\" selected>online</option>\n    <option value=\"away\">away</option>\n    <option value=\"busy\">busy</option>\n    <option value=\"offline\">offline</option>\n    <hr>\n    <option value=\"signout\">sign out</option>\n  </select>\n</div>\n\n<button class=\"button is-primary\" (click)=\"toggleAudio()\">\n  <span class=\"icon is-small\">\n    <i [ngClass]=\"{'ion-ios-volume-high' : allowAudio, 'ion-android-volume-off' : !allowAudio}\"></i>\n  </span>\n</button>\n"

/***/ }),

/***/ "./src/app/components/current-user/current-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrentUserComponent = /** @class */ (function () {
    function CurrentUserComponent(userService, websocketService, chatService) {
        this.userService = userService;
        this.websocketService = websocketService;
        this.chatService = chatService;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
        this.currentUser = { id: 0, fullName: 'Getting user...', status: 'offline', avatar: '../../assets/avatars/avatar-1.png' };
    }
    CurrentUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.audio.subscribe(function (audio) { return _this.allowAudio = audio; });
        this.userService.getCurrentUser().subscribe(function (user) {
            _this.currentUser = user;
            _this.socket.emit('newUser', user);
        });
        this.socket.on('updateCurrentUserStatus', function (status) {
            _this.currentUser.status = status;
        });
    };
    CurrentUserComponent.prototype.changeStatus = function (status) {
        if (status === 'signout') {
            window.location.href = this.BASE_URL + "/signout";
        }
        else {
            this.socket.emit('updateStatus', status);
        }
    };
    CurrentUserComponent.prototype.toggleAudio = function () {
        this.chatService.changeAudio(!this.allowAudio);
    };
    CurrentUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-current-user',
            template: __webpack_require__("./src/app/components/current-user/current-user.component.html"),
            styles: [__webpack_require__("./src/app/components/current-user/current-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_4__services_chat_service__["a" /* ChatService */]])
    ], CurrentUserComponent);
    return CurrentUserComponent;
}());



/***/ }),

/***/ "./src/app/components/feed-header/feed-header.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: 0px;\n  padding: 0px;\n}\n\n:host h1 {\n  font-size: 30px;\n  margin: 10px;\n}\n\n:host button {\n  margin: 10px;\n}\n\n:host .navbar {\n  background-color: white;\n}\n\n:host .title {\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/feed-header/feed-header.component.html":
/***/ (function(module, exports) {

module.exports = "<audio #audio loop></audio>\n\n<div *ngIf=\"!calling && !dialing\">\n  <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"navbar-brand\">\n      <h1 class=\"title is-4\">{{activeUserItem.fullName}}</h1>\n    </div>\n\n    <div class=\"navbar-menu\">\n      <div class=\"navbar-end\">\n        <div class=\"navbar-item\">\n          <button class=\"button is-primary\" (click)=\"startVideoCall(activeUserItem.id)\">Video call</button>\n          <button class=\"button is-primary\" (click)=\"startVoiceCall(activeUserItem.id)\">Voice call</button>\n          <button class=\"button is-danger\" (click)=\"removeFriend(activeUserItem.id)\">Remove friend</button>\n        </div>\n      </div>\n    </div>\n  </nav>\n</div>\n\n<div *ngIf=\"calling\">\n  <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"navbar-brand\">\n      <h1 class=\"title is-4\">Incoming {{callInformation.callType}} call from {{callInformation.caller}}...</h1>\n    </div>\n  </nav>\n</div>\n\n<div *ngIf=\"dialing\">\n  <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"navbar-brand\">\n      <h1 class=\"title is-4\">Making a {{dialInformation.dialType}} call to {{dialInformation.receiver}}...</h1>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/components/feed-header/feed-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_popup_service__ = __webpack_require__("./src/app/services/popup.service.ts");
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
    function FeedHeaderComponent(chatService, websocketService, router, popupService) {
        this.chatService = chatService;
        this.websocketService = websocketService;
        this.router = router;
        this.popupService = popupService;
    }
    FeedHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.activeUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
        this.chatService.calling.subscribe(function (calling) { return _this.calling = calling; });
        this.chatService.dialing.subscribe(function (dialing) { return _this.dialing = dialing; });
        this.popupService.answerCall.subscribe(function (type) { if (type && _this.data) {
            _this.answerCall();
        } });
        this.popupService.hangUp.subscribe(function (type) { if (type && _this.data) {
            _this.hangUp();
        } });
        this.popupService.cancelCall.subscribe(function (type) { if (type && _this.dialInformation) {
            _this.cancelCall();
        } });
        this.chatService.friends.subscribe(function (friends) { return _this.friends = friends; });
        this.chatService.audio.subscribe(function (audio) { return _this.allowAudio = audio; });
        try {
            this.socket.on('newSignal', function (data) {
                if (data.type === 'offer') {
                    _this.startAudioRinging();
                    _this.chatService.changeCalling(true);
                    _this.data = data;
                    _this.callInformation = { caller: data.caller, callType: data.chatType };
                    _this.chatService.changeCallInformation(_this.callInformation);
                }
                else {
                    _this.peer.signal(data.peerId);
                }
            });
        }
        catch (err) {
            this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to establish a connection, please try again...', color: 'warning' });
        }
        this.socket.on('hangUp', function () {
            _this.chatService.changeDialing(false);
            _this.stopAudio();
            _this.localStream.getTracks().forEach(function (x) { return x.stop(); });
        });
        this.socket.on('cancelCall', function () {
            _this.chatService.changeCalling(false);
            _this.stopAudio();
        });
        this.socket.on('answered', function () { return _this.answered = true; });
    };
    FeedHeaderComponent.prototype.removeFriend = function (id) {
        this.socket.emit('removeFriend', id);
    };
    FeedHeaderComponent.prototype.startVideoCall = function (id) {
        var _this = this;
        this.dialInformation = { id: this.activeUserItem.id, receiver: this.activeUserItem.fullName, dialType: 'video' };
        this.chatService.changeDialInformation(this.dialInformation);
        this.chatService.changeDialing(true);
        this.startAudioDial();
        this.createPeer({ audio: true, video: true }, id, 'offer', 'video', null);
        setTimeout(function () { if (_this.answered !== true) {
            _this.cancelCall();
        } }, 10000);
    };
    FeedHeaderComponent.prototype.startVoiceCall = function (id) {
        var _this = this;
        this.dialInformation = { id: this.activeUserItem.id, receiver: this.activeUserItem.fullName, dialType: 'voice' };
        this.chatService.changeDialInformation(this.dialInformation);
        this.chatService.changeDialing(true);
        this.startAudioDial();
        this.createPeer({ audio: true, video: false }, id, 'offer', 'voice', null);
        setTimeout(function () { if (_this.answered !== true) {
            _this.cancelCall();
        } }, 10000);
    };
    FeedHeaderComponent.prototype.newError = function () {
        if (this.localStream) {
            this.localStream.getTracks().forEach(function (x) { return x.stop(); });
        }
        this.chatService.changeDialing(false);
        this.chatService.changeCalling(false);
        this.stopAudio();
    };
    FeedHeaderComponent.prototype.startAudioDial = function () {
        if (this.allowAudio) {
            this.audio.nativeElement.src = '../../../assets/sounds/dialing.mp3';
            this.audio.nativeElement.play();
        }
    };
    FeedHeaderComponent.prototype.stopAudio = function () {
        this.audio.nativeElement.pause();
    };
    FeedHeaderComponent.prototype.startAudioRinging = function () {
        if (this.allowAudio) {
            this.audio.nativeElement.src = '../../../assets/sounds/ringing.mp3';
            this.audio.nativeElement.play();
        }
    };
    FeedHeaderComponent.prototype.answerCall = function () {
        var _this = this;
        this.socket.emit('answered', this.data.id);
        this.chatService.changeActiveUserItem(this.friends.filter(function (x) { return x.id === _this.data.id; })[0]);
        this.chatService.changeActiveConversation(this.friends.filter(function (x) { return x.id === _this.data.id; })[0].id);
        if (this.data.chatType === 'video') {
            this.createPeer({ audio: true, video: true }, this.data.id, 'answer', null, this.data.peerId);
        }
        if (this.data.chatType !== 'video') {
            this.createPeer({ audio: true, video: false }, this.data.id, 'answer', null, this.data.peerId);
        }
    };
    FeedHeaderComponent.prototype.cancelCall = function () {
        this.chatService.changeDialing(false);
        this.stopAudio();
        this.localStream.getTracks().forEach(function (x) { return x.stop(); });
        this.socket.emit('cancelCall', this.dialInformation.id);
    };
    FeedHeaderComponent.prototype.hangUp = function () {
        this.chatService.changeCalling(false);
        this.stopAudio();
        this.socket.emit('hangUp', this.data.id);
    };
    FeedHeaderComponent.prototype.createPeer = function (options, receiver, type, chatType, peerId) {
        var _this = this;
        try {
            var peerx_1;
            var init_1;
            type === 'offer' ? init_1 = true : init_1 = false;
            navigator.mediaDevices.getUserMedia({ video: options.video, audio: options.audio })
                .then(function (stream) {
                _this.localStream = stream;
                peerx_1 = new __WEBPACK_IMPORTED_MODULE_5_simple_peer__({
                    initiator: init_1,
                    trickle: false,
                    stream: stream,
                    objectMode: true,
                    reconnectTimer: 250,
                    config: {
                        iceServers: [{
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
                peerx_1.on('error', function (err) {
                    _this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to establish a connection, please try again...', color: 'warning' });
                });
                peerx_1.on('connect', function () {
                    _this.chatService.changeCalling(false);
                    _this.chatService.changeDialing(false);
                    _this.stopAudio();
                    _this.chatService.changePeer(_this.peer);
                    _this.popupService.hangUpEvent(false);
                    _this.popupService.answerCallEvent(false);
                    _this.popupService.cancelCallEvent(false);
                    _this.router.navigate(['peer']);
                });
                peerx_1.on('signal', function (data) {
                    _this.peerId = data;
                    _this.socket.emit('sendSignal', { id: receiver, peerId: data, chatType: chatType, type: type });
                });
                peerx_1.on('stream', function (stream) {
                    _this.chatService.changeStream(stream);
                    _this.chatService.changeLocalStream(_this.localStream);
                });
                peerx_1.on('close', function () {
                    _this.localStream.getTracks().forEach(function (x) { return x.stop(); });
                    _this.router.navigate(['']);
                });
            })
                .catch(function (err) {
                _this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to establish a connection, please try again...', color: 'warning' });
            });
            // Sets "dummy variable" values when view is fully rendered.
            setTimeout(function () {
                _this.peer = peerx_1;
                type === 'answer' ? _this.peer.signal(peerId) : null;
            }, 2000);
        }
        catch (err) {
            this.chatService.changeFlashMessage({ type: 'error', message: 'There was an error when trying to use your camera/microphone', color: 'warning' });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('audio'),
        __metadata("design:type", Object)
    ], FeedHeaderComponent.prototype, "audio", void 0);
    FeedHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feed-header',
            template: __webpack_require__("./src/app/components/feed-header/feed-header.component.html"),
            styles: [__webpack_require__("./src/app/components/feed-header/feed-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_popup_service__["a" /* PopupService */]])
    ], FeedHeaderComponent);
    return FeedHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/feed/feed.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: 0px;\n  padding: 0px;\n}\n\n:host .message {\n  width: 30%;\n  word-wrap: break-word;\n  clear: both;\n  font-size: 16px;\n  word-break: break-all;\n  position: relative;\n  padding: 10px;\n  border-radius: 7px;\n  z-index: 0;\n  margin: 10px;\n}\n\n:host .peer {\n  background-color: rgb(106, 105, 194);\n  float: left;\n  margin-left: 2vw\n}\n\n:host .you {\n  background-color: rgb(255, 255, 255);\n  float: right;\n  margin-right: 35.3vw;\n}\n\n:host .peer:before {\n  left: -5px;\n  background-color: rgb(106, 105, 194);\n}\n\n:host .you:before {\n  right: -5px;\n  background-color: rgb(255, 255, 255);\n}\n\n:host .message:before {\n  position: absolute;\n  display: block;\n  width: 30px;\n  height: 26px;\n  top: 9px;\n  content: \"\";\n  -webkit-transform: rotate(29deg) skew(-25deg);\n          transform: rotate(29deg) skew(-25deg);\n  z-index: -100;\n}\n\n:host ul {\n  padding-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let message of activeConversation\">\n    <div *ngIf=\"message.sender === 'you'\">\n      <div class=\"message you\">\n        <p>{{message.message}}</p>\n      </div>\n    </div>\n\n    <div *ngIf=\"message.sender !== 'you'\">\n      <div class=\"message peer\">\n        <p class=\"has-text-white\">{{message.message}}</p>\n      </div>\n    </div>\n  </li>\n</ul>\n"

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
        this.chatService.activeUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
        this.chatService.activeConversation.subscribe(function (id) { return _this.activeConversation = _this.conversations[id]; });
        this.chatService.getConversations().subscribe(function (conversations) {
            _this.conversations = conversations;
            if (_this.activeUserItem.id !== null) {
                _this.activeConversation = _this.conversations[_this.activeUserItem.id];
            }
        });
        this.socket.on('newMessage', function (data) {
            if (_this.conversations[data.id]) {
                _this.conversations[data.id].push({ message: data.message, sender: data.name });
            }
            else {
                _this.conversations[data.id] = [];
                _this.conversations[data.id].push({ message: data.message, sender: data.name });
                _this.activeUserItem.id === data.id ? _this.activeConversation = _this.conversations[data.id] : null;
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

/***/ "./src/app/components/flash-message/flash-message.component.css":
/***/ (function(module, exports) {

module.exports = ":host .notification {\n  z-index: 100;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  font-size: 16px;\n}\n"

/***/ }),

/***/ "./src/app/components/flash-message/flash-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notification is-{{flashMessage.color}}\">\n  {{flashMessage.message}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/flash-message/flash-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlashMessageComponent = /** @class */ (function () {
    function FlashMessageComponent(chatService) {
        this.chatService = chatService;
    }
    FlashMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.flashMessage.subscribe(function (flashMessage) {
            _this.flashMessage = flashMessage;
            if (flashMessage.type !== null) {
                setTimeout(function () { _this.chatService.changeFlashMessage({ type: null, message: null, color: null }); }, 5000);
            }
        });
    };
    FlashMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flash-message',
            template: __webpack_require__("./src/app/components/flash-message/flash-message.component.html"),
            styles: [__webpack_require__("./src/app/components/flash-message/flash-message.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]])
    ], FlashMessageComponent);
    return FlashMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/friend-requests/friend-requests.component.css":
/***/ (function(module, exports) {

module.exports = ":host button {\n  height: 40px;\n  width: 31vw;\n  margin-left: 1vw;\n  margin-top: 9px;\n}\n\n:host .notificationDot {\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  display: inline-block;\n  position: absolute;\n  margin-top: 19px;\n  margin-left: -40px;\n  background-color: rgb(205, 17, 226);\n}\n"

/***/ }),

/***/ "./src/app/components/friend-requests/friend-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"button is-primary\" (click)=\"viewFriendRequests()\">Friend requests</button>\n<span [ngClass]=\"{'notificationDot' : notification}\"></span>\n"

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
    }
    FriendRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.state.subscribe(function (state) { return _this.state = state; });
        this.socket.on('newRequest', function () {
            _this.chatService.getFriendRequests().subscribe(function (friendRequests) {
                _this.chatService.changeFriendRequestUsers(friendRequests);
                if (_this.state !== "friendRequest") {
                    _this.notification = true;
                    _this.chatService.changeFlashMessage({ type: 'info', message: 'You have a new friend request!', color: 'info' });
                }
            });
        });
        this.socket.on('acceptRequest', function () {
            _this.chatService.getFriends().subscribe(function (friends) {
                _this.chatService.changeFriends(friends);
            });
        });
    };
    FriendRequestsComponent.prototype.viewFriendRequests = function () {
        var _this = this;
        this.chatService.getFriendRequests().subscribe(function (data) {
            _this.chatService.changeFriendRequestUsers(data);
            _this.notification = false;
            _this.chatService.changeState("friendRequest");
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

/***/ "./src/app/components/loading/loading.component.css":
/***/ (function(module, exports) {

module.exports = ".loading:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 100px;\n  width: 100px;\n  margin-top: -50px;\n  margin-left: -50px;\n  border-radius: 50%;\n  border: 7px solid rgb(145, 145, 145);\n  border-top-color: rgb(205, 17, 226);\n  -webkit-animation: spinner 0.8s linear infinite;\n          animation: spinner 0.8s linear infinite;\n}\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"loading\"></p>\n"

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
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

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () { };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: __webpack_require__("./src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__("./src/app/components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/peer-chat/peer-chat.component.css":
/***/ (function(module, exports) {

module.exports = ":host .background {\n  height: 100vh;\n  overflow-y: hidden;\n}\n\n:host .peer {\n  height: 100%;\n}\n\n:host .you {\n  position: absolute;\n  height: 40vh;\n  top: 0;\n  right: 0;\n}\n\n:host .background {\n  background-color: rgb(248, 246, 248);\n}\n\n:host .buttons {\n  position: absolute;\n  bottom: 30px;\n  margin: 0 auto;\n  width: 100%;\n  display: block\n}\n\n:host button {\n  height: 70px;\n  width: 70px;\n  margin: 15px;\n  font-size: 30px;\n  border-radius: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/peer-chat/peer-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!loading\">\n  <div class=\"loading\">\n    <app-loading></app-loading>\n  </div>\n</div>\n\n<div class=\"has-text-centered background\" #chat hidden>\n  <video class=\"peer\" #videoChat poster=\"../../../assets/images/poster.png\"></video>\n  <video class=\"you\" #localVideo poster=\"../../../assets/images/poster.png\"></video>\n\n  <div class=\"buttons\">\n    <button class=\"button\" [ngClass]=\"{'is-primary' : clickMic, 'is-default' : !clickMic}\" (click)=\"toggleMicrophone()\" #mic>\n      <span class=\"icon is-small\">\n        <i class=\"ion-android-microphone\"></i>\n      </span>\n    </button>\n\n\n    <button class=\"button\" [ngClass]=\"{'is-primary' : clickVid, 'is-default' : !clickVid}\" (click)=\"toggleCamera()\" #video>\n      <span class=\"icon is-small\">\n        <i class=\"ion-android-camera\"></i>\n      </span>\n    </button>\n\n\n    <button class=\"button is-danger\" (click)=\"endCall()\" #end>\n      <span class=\"icon is-small\">\n        <i class=\"ion-android-call\"></i>\n      </span>\n    </button>\n  </div>\n</div>\n"

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
    function PeerChatComponent(chatService, router, zone) {
        this.chatService = chatService;
        this.router = router;
        this.zone = zone;
        this.loading = true;
        this.clickMic = true;
        this.clickVid = true;
    }
    PeerChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.localStream.subscribe(function (stream) {
            if (!_this.hasPlayedLocal) {
                _this.localStream = stream;
                _this.chatComponents.nativeElement.hidden = false;
                _this.loading = false;
                _this.getCallType();
                _this.localVideo.nativeElement.srcObject = stream;
                _this.localVideo.nativeElement.play();
                _this.hasPlayedLocal = true;
            }
        });
        this.chatService.stream.subscribe(function (stream) {
            if (!_this.hasPlayedPeer) {
                _this.stream = stream;
                _this.chatService.peer.subscribe(function (peer) {
                    _this.peer = peer;
                    _this.videoChat.nativeElement.srcObject = stream;
                    _this.videoChat.nativeElement.play()
                        .then(function () { return _this.hasPlayedPeer = true; })
                        .catch(function (err) {
                        _this.hasPlayedPeer = false;
                        _this.peer.destroy();
                        _this.chatService.changeFlashMessage({ type: 'error', message: 'There was an error with the stream, please try again...', color: 'warning' });
                    });
                });
            }
        });
    };
    PeerChatComponent.prototype.endCall = function () {
        this.peer.destroy();
    };
    PeerChatComponent.prototype.toggleCamera = function () {
        this.localStream.getVideoTracks().forEach(function (x) { return x.enabled = !x.enabled; });
        this.clickVid = !this.clickVid;
        this.zone.run(function () { });
    };
    PeerChatComponent.prototype.toggleMicrophone = function () {
        this.localStream.getAudioTracks().forEach(function (x) { return x.enabled = !x.enabled; });
        this.clickMic = !this.clickMic;
        this.zone.run(function () { });
    };
    PeerChatComponent.prototype.getCallType = function () {
        var tracks = this.localStream.getTracks().filter(function (x) { return x.kind === 'video'; });
        if (tracks.length > 0) {
            this.chatType = 'video';
        }
        else {
            this.chatType = 'voice';
            this.localVideo.nativeElement.style.display = 'none';
            this.videoBtn.nativeElement.style.display = 'none';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('videoChat'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "videoChat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mic'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "micBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('video'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "videoBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('localVideo'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "localVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('end'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "endCallBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('chat'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "chatComponents", void 0);
    PeerChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-peer-chat',
            template: __webpack_require__("./src/app/components/peer-chat/peer-chat.component.html"),
            styles: [__webpack_require__("./src/app/components/peer-chat/peer-chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], PeerChatComponent);
    return PeerChatComponent;
}());



/***/ }),

/***/ "./src/app/components/popup/popup.component.css":
/***/ (function(module, exports) {

module.exports = ":host .card {\n  width: 70vw;\n  position: absolute;\n  z-index: 200;\n  margin-top: 20vh;\n  display: block;\n  left: 50%;\n  margin-left: -35%;\n  -webkit-box-shadow: 14px 14px 39px -3px rgba(0, 0, 0, 0.75);\n          box-shadow: 14px 14px 39px -3px rgba(0, 0, 0, 0.75);\n}\n\n:host h1 {\n  padding: 20px;\n}\n\n:host .card-header {\n  background-color: rgb(205, 17, 226);\n}\n\n:host button {\n  margin: 10px;\n  font-size: 20px;\n  width: 95%;\n}\n\n:host .card-content {\n  padding: 0px;\n}\n"

/***/ }),

/***/ "./src/app/components/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"calling\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h1 class=\"subtitle is-4 has-text-white\">Incoming {{callInformation.callType}} call from {{callInformation.caller}}...</h1>\n    </div>\n    <div class=\"card-content has-text-centered\">\n      <button class=\"button is-success\" (click)=\"answerCall()\" #answerBtn>Answer</button>\n      <button class=\"button is-danger\" (click)=\"hangUp()\" #hangUpBtn>Hang up</button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"dialing\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h1 class=\"subtitle is-4 has-text-white\">Making a {{dialInformation.dialType}} call to {{dialInformation.receiver}}...</h1>\n    </div>\n    <div class=\"card-content has-text-centered\">\n      <button class=\"button is-danger\" (click)=\"cancelCall()\">Cancel</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_popup_service__ = __webpack_require__("./src/app/services/popup.service.ts");
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



var PopupComponent = /** @class */ (function () {
    function PopupComponent(popupService, chatService) {
        this.popupService = popupService;
        this.chatService = chatService;
    }
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.callInformation.subscribe(function (callInformation) { return _this.callInformation = callInformation; });
        this.chatService.dialInformation.subscribe(function (dialInformation) { return _this.dialInformation = dialInformation; });
        this.chatService.calling.subscribe(function (calling) { return _this.calling = calling; });
        this.chatService.dialing.subscribe(function (dialing) { return _this.dialing = dialing; });
    };
    PopupComponent.prototype.answerCall = function () {
        this.answerBtn.nativeElement.disabled = true;
        this.hangUpBtn.nativeElement.disabled = true;
        this.popupService.answerCallEvent(true);
    };
    PopupComponent.prototype.hangUp = function () {
        this.popupService.hangUpEvent(true);
    };
    PopupComponent.prototype.cancelCall = function () {
        this.popupService.cancelCallEvent(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('answerBtn'),
        __metadata("design:type", Object)
    ], PopupComponent.prototype, "answerBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('hangUpBtn'),
        __metadata("design:type", Object)
    ], PopupComponent.prototype, "hangUpBtn", void 0);
    PopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-popup',
            template: __webpack_require__("./src/app/components/popup/popup.component.html"),
            styles: [__webpack_require__("./src/app/components/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_popup_service__["a" /* PopupService */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ":host .field {\n  padding-top: 13px;\n  width: 31vw;\n  margin-left: 1vw;\n}\n\n:host input {\n  height: 40px;\n}\n"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"field\">\n  <p class=\"control has-icons-left\">\n    <input class=\"input\" type=\"text\" placeholder=\"Search for a user...\" #query (input)=\"search(query.value)\">\n    <span class=\"icon is-small is-left\">\n      <i class=\"ion-search\"></i>\n    </span>\n  </p>\n</div>\n"

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
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.search = function (query) {
        var _this = this;
        if (query !== "") {
            this.userService.getUsersByQuery(query).subscribe(function (users) {
                _this.chatService.changeState("search");
                _this.chatService.changeSearchUsers(users.users);
            });
        }
        else {
            this.chatService.changeState('friendList');
        }
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

module.exports = ":host {\n  margin: 0px;\n  padding: 0px;\n}\n\n:host input {\n  height: 40px;\n  width: 52vw;\n}\n\n:host .emojis {\n  height: 40px;\n  width: 5vw;\n}\n\n:host .send {\n  height: 40px;\n  width: 10vw;\n}\n\n:host button i {\n  font-size: 25px;\n}\n\n:host .emojiPopup {\n  position: absolute;\n  text-align: center;\n  display: block;\n  width: 60%;\n  bottom: 75px;\n  margin-left: 10px;\n  border-radius: 7px;\n  background-color: white;\n}\n\n:host .emojiPopup:before {\n  background-color: white;\n  position: absolute;\n  display: block;\n  margin-left: 10px;\n  width: 30px;\n  height: 26px;\n  bottom: -10px;\n  content: \"\";\n  -webkit-transform: rotate(29deg) skew(-25deg);\n          transform: rotate(29deg) skew(-25deg);\n  z-index: -100;\n}\n\n:host ul li {\n  display: inline;\n  font-size: 30px;\n  padding: 7px;\n}\n\n:host ul li:hover {\n  opacity: 0.7;\n}\n"

/***/ }),

/***/ "./src/app/components/send/send.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showEmojis\">\n  <div class=\"emojiPopup\">\n    <ul>\n      <li *ngFor=\"let emoji of emojis; let x = index\">\n        <a [innerHtml]=\"emoji.code\" (click)=\"addEmoji(x)\"></a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"field has-addons\">\n  <div class=\"control\">\n    <button type=\"btn\" class=\"button is-primary emojis\" (click)=\"getEmojis()\">\n      <span class=\"icon is-small\">\n        <i class=\"ion-happy-outline\"></i>\n      </span>\n    </button>\n  </div>\n  <div class=\"control\">\n    <input type=\"text\" placeholder=\"Enter message...\" class=\"input\" #message>\n  </div>\n  <div class=\"control\">\n    <button type=\"btn\" class=\"button is-primary send\" (click)=\"sendMessage(message.value, activeUserItem.id)\">\n      <span class=\"icon is-small\">\n        <i class=\"ion-android-send\"></i>\n      </span>\n    </button>\n  </div>\n</div>\n"

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
        this.showEmojis = false;
        this.emojis = [
            { code: '&#x1F642', text: ':smile:' }, { code: '&#x1F600', text: ':happy:' }, { code: '&#x1F60E', text: ':cool:' },
            { code: '&#x1F62E', text: ':surprised:' }, { code: '&#x1F61B', text: ':cheeky:' }, { code: '&#x1F918', text: ':horns:' },
            { code: '&#x1F914', text: ':thinking:' }, { code: '&#x1F60A', text: ':blush:' }, { code: '&#x1F602', text: ':joy:' },
            { code: '&#x1F610', text: ':neutral:' }, { code: '&#x1F631', text: ':scream:' }, { code: '&#x1F621', text: ':rage:' },
            { code: '&#x1F634', text: ':sleeping:' }, { code: '&#x1F607', text: ':halo:' }, { code: '&#x1F440', text: ':eyes:' },
            { code: '&#x1F912', text: ':sick:' }, { code: '&#x1F643', text: ':silly:' }, { code: '&#x1F615', text: ':confused:' },
            { code: '&#x1F62C', text: ':grimacing:' }, { code: '&#x1F611', text: ':expressionless:' }, { code: '&#x1F910', text: ':zipper:' },
            { code: '&#x1F629', text: ':weary:' }, { code: '&#x1F633', text: ':flushed:' }, { code: '&#x1F44D', text: ':thumbsup:' }
        ];
    }
    SendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.activeUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
    };
    SendComponent.prototype.sendMessage = function (message, id) {
        this.socket.emit('sendMessage', { message: message, id: id });
        this.input.nativeElement.value = "";
    };
    SendComponent.prototype.getEmojis = function () {
        this.showEmojis = !this.showEmojis;
    };
    SendComponent.prototype.addEmoji = function (index) {
        this.input.nativeElement.value += this.emojis[index].text + " ";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('message'),
        __metadata("design:type", Object)
    ], SendComponent.prototype, "input", void 0);
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

module.exports = ":host {\n  margin: 0px;\n  padding: 0px;\n}\n\n.user-item {\n  font-size: 30px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.listTitle {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  padding-top: 5px;\n}\n\n.friends {\n  margin-top: 0px;\n}\n\n:host .back {\n  margin-top: 0vh;\n  margin-bottom: 10px;\n  height: 40px;\n  width: 31vw;\n  margin-left: 1vw;\n}\n\n:host .status {\n  font-size: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  font-style: italic;\n}\n\n:host .menu {\n  background-color: rgb(72, 21, 78);\n  padding: 0px;\n}\n\n:host .menu li {\n  margin-bottom: 20px;\n}\n\n:host .menu a {\n  height: 84px;\n  ;\n}\n\n:host .menu .name {\n  margin-top: 8px;\n  color: white;\n  font-size: 20px;\n  font-weight: 900;\n  display: block;\n}\n\n:host .menu .email {\n  color: white;\n  font-size: 16px;\n  margin-top: -15px;\n  display: block;\n}\n\n:host .menu .status {\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  display: inline-block;\n  position: absolute;\n  margin-top: 45px;\n  margin-left: -40px;\n}\n\n.online {\n  background-color: rgb(4, 214, 134);\n}\n\n.offline {\n  background-color: rgb(255, 255, 255);\n}\n\n.away {\n  background-color: rgb(243, 247, 3);\n}\n\n.busy {\n  background-color: rgb(247, 6, 6);\n}\n\n:host .menu img {\n  width: 70px;\n  height: 70px;\n  margin-right: 20px;\n  border-radius: 100%;\n  float: left;\n  clear: both;\n}\n\n:host .add {\n  background-color: transparent;\n  height: 84px;\n  margin-top: -77px;\n  width: 58px;\n  margin-right: 67vw;\n  padding: 0px;\n  float: right;\n  font-size: 50px;\n  clear: both;\n}\n\n:host .add:hover {\n  color: rgb(205, 17, 226);\n}\n\n:host .notificationDot {\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  position: absolute;\n  margin-top: -30px;\n  margin-left: 20%;\n  background-color: rgb(205, 17, 226);\n}\n\n:host .accept {\n  background-color: transparent;\n  height: 74px;\n  margin-top: -72px;\n  width: 40px;\n  margin-right: 67vw;\n  padding: 0px;\n  float: right;\n  font-size: 45px;\n  clear: both;\n}\n\n:host .accept:hover {\n  color: rgb(17, 226, 128);\n}\n\n:host .decline {\n  background-color: transparent;\n  height: 74px;\n  margin-top: -72px;\n  width: 40px;\n  margin-right: 70.5vw;\n  padding: 0px;\n  float: right;\n  font-size: 45px;\n}\n\n:host .decline:hover {\n  color: rgb(205, 17, 226);\n}\n\n:Host .decline span,\n:host .accept span {\n  width: 10px;\n}\n\n:host .select {\n  right: -18vw;\n  font-size: 18px;\n  margin-top: -40px;\n}\n\n:host .select select {\n  background-color: transparent;\n  border: none;\n  color: transparent;\n  height: 30px;\n}\n\n:host .select:after {\n  margin-right: 20px;\n  margin-top: -15px;\n  font-size: 35px;\n}\n"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"state === 'friendList'\">\n  <h1 class=\"subtitle has-text-white listTitle friends\">Friend list</h1>\n\n  <div class=\"menu\">\n    <ul class=\"menu-list\">\n      <li *ngFor=\"let friend of friends\">\n        <a (click)=\"changeItem(friend)\">\n          <img src=\"{{friend.avatar}}\">\n          <span class=\"status\" [ngClass]=\"{'online' : friend.status === 'online', 'offline' : friend.status === 'offline', 'away' : friend.status === 'away', 'busy' : friend.status === 'busy'}\"></span>\n          <span class=\"name\">{{friend.fullName}}</span>\n          <br>\n          <span class=\"email\">{{friend.email}}</span>\n          <span [ngClass]=\"{'notificationDot' : friend.notification}\"></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div *ngIf=\"state === 'search'\">\n  <button class=\"button back\" (click)=\"back()\">Go back</button>\n\n  <div *ngIf=\"!searchUsers.length > 0\">\n    <h1 class=\"subtitle has-text-white listTitle\">No matching users...</h1>\n  </div>\n\n  <div *ngIf=\"searchUsers.length > 0\">\n    <h1 class=\"subtitle has-text-white listTitle\">Matching users</h1>\n    <div class=\"menu\">\n      <ul class=\"menu-list\">\n        <li *ngFor=\"let user of searchUsers\">\n          <a>\n            <img src=\"{{user.avatar}}\">\n            <span class=\"status\" [ngClass]=\"{'online' : user.status === 'online', 'offline' : user.status === 'offline', 'away' : user.status === 'away', 'busy' : user.status === 'busy'}\"></span>\n            <span class=\"name\">{{user.fullName}}</span>\n            <br>\n            <span class=\"email\">{{user.email}}</span>\n            <button (click)=\"addUser(user.id)\" class=\"button add is-primary\">\n              <span class=\"icon is-small\">\n                <i class=\"ion-android-person-add\"></i>\n              </span>\n            </button>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"state === 'friendRequest'\">\n  <button class=\"button back\" (click)=\"back()\">Go back</button>\n  <div *ngIf=\"!friendRequestUsers.length > 0\">\n    <h1 class=\"subtitle has-text-white listTitle\">You don't have any friend requests...</h1>\n  </div>\n\n  <div *ngIf=\"friendRequestUsers.length > 0\">\n    <h1 class=\"subtitle has-text-white listTitle\">Friend requests</h1>\n    <div class=\"menu\">\n      <ul class=\"menu-list\">\n        <li *ngFor=\"let request of friendRequestUsers\">\n          <a>\n            <img src=\"{{request.avatar}}\">\n            <span class=\"name\">{{request.fullName}}</span>\n            <br>\n            <span class=\"email\">{{request.email}}</span>\n\n            <div class=\"select\">\n              <select #friendRequest (input)=\"answerRequest(friendRequest.value, request.id)\">\n                <option selected disabled hidden></option>\n                <option value=\"accept\">accept</option>\n                <option value=\"decline\">decline</option>\n              </select>\n            </div>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

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
        this.chatService.activeUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
        this.chatService.searchUsers.subscribe(function (searchUsers) { return _this.searchUsers = searchUsers; });
        this.chatService.state.subscribe(function (state) { return _this.state = state; });
        this.chatService.friendRequestUsers.subscribe(function (friendRequestUsers) { return _this.friendRequestUsers = friendRequestUsers; });
        this.chatService.friends.subscribe(function (friends) { return _this.friends = friends; });
        this.chatService.getFriends().subscribe(function (friends) {
            _this.friends = friends;
            _this.chatService.changeFriends(friends);
        });
        this.socket.on('updateFriendStatus', function (friend) {
            for (var i = 0; i < _this.friends.length; i++) {
                if (_this.friends[i].id === friend.id) {
                    _this.friends[i].status = friend.status;
                }
            }
        });
        this.socket.on('updateFriends', function (friends) {
            _this.chatService.changeFriends(friends);
            _this.chatService.changeActiveUserItem({ id: null, fullName: 'no user selected' });
            _this.chatService.changeActiveConversation(null);
        });
        this.socket.on('messageNotification', function (id) {
            var friend = _this.friends.filter(function (x) { return x.id === id; })[0];
            if (_this.activeUserItem.id !== id) {
                friend.notification = true;
                _this.chatService.changeFlashMessage({ type: 'info', message: 'You have a new message!', color: 'info' });
            }
        });
    };
    UserListComponent.prototype.changeItem = function (user) {
        this.chatService.changeActiveUserItem(user);
        this.chatService.changeActiveConversation(user.id);
        if (this.activeUserItem.notification) {
            this.activeUserItem.notification = false;
        }
    };
    UserListComponent.prototype.addUser = function (id) {
        this.socket.emit('newRequest', id);
    };
    UserListComponent.prototype.acceptRequest = function (id) {
        this.socket.emit('acceptRequest', id);
    };
    UserListComponent.prototype.declineRequest = function (id) {
        this.socket.emit('declineRequest', id);
    };
    UserListComponent.prototype.back = function () {
        this.chatService.changeState('friendList');
    };
    UserListComponent.prototype.answerRequest = function (answer, id) {
        if (answer === 'accept') {
            this.acceptRequest(id);
        }
        else if (answer === 'decline') {
            this.declineRequest(id);
        }
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__("./src/app/components/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: 0px;\n  padding: 0px;\n}\n\n:host h1 {\n  font-size: 70px;\n}\n"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title has-text-centered\">Welcome</h1>\n\n<p class=\"has-text-centered is-size-5\">This is PeerChat, a new and simple chat application for you and your friends! Add a friend by searching in the field to your\n  left and start chating.</p>\n"

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
    WelcomeComponent.prototype.ngOnInit = function () { };
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
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
        this.ActiveUserItem = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({ id: null, fullName: 'no user selected' });
        this.Stream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.Peer = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.ActiveConversation = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.SearchUsers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.FriendRequestUsers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.Friends = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.State = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('friendList');
        this.Calling = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.CallInformation = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.Dialing = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.DialInformation = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.FlashMessage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({ type: null, message: null, color: null });
        this.LocalStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.Audio = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.activeUserItem = this.ActiveUserItem.asObservable();
        this.stream = this.Stream.asObservable();
        this.peer = this.Peer.asObservable();
        this.activeConversation = this.ActiveConversation.asObservable();
        this.searchUsers = this.SearchUsers.asObservable();
        this.state = this.State.asObservable();
        this.friendRequestUsers = this.FriendRequestUsers.asObservable();
        this.friends = this.Friends.asObservable();
        this.calling = this.Calling.asObservable();
        this.dialing = this.Dialing.asObservable();
        this.callInformation = this.CallInformation.asObservable();
        this.dialInformation = this.DialInformation.asObservable();
        this.flashMessage = this.FlashMessage.asObservable();
        this.localStream = this.LocalStream.asObservable();
        this.audio = this.Audio.asObservable();
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
    }
    // Changes values that's shared between components.
    ChatService.prototype.changeActiveUserItem = function (user) {
        this.ActiveUserItem.next(user);
    };
    ChatService.prototype.changeStream = function (stream) {
        this.Stream.next(stream);
    };
    ChatService.prototype.changeLocalStream = function (stream) {
        this.LocalStream.next(stream);
    };
    ChatService.prototype.changeActiveConversation = function (conversation) {
        this.ActiveConversation.next(conversation);
    };
    ChatService.prototype.changePeer = function (peer) {
        this.Peer.next(peer);
    };
    ChatService.prototype.changeSearchUsers = function (searchUsers) {
        this.SearchUsers.next(searchUsers);
    };
    ChatService.prototype.changeState = function (state) {
        this.State.next(state);
    };
    ChatService.prototype.changeFriendRequestUsers = function (friendRequestUsers) {
        this.FriendRequestUsers.next(friendRequestUsers);
    };
    ChatService.prototype.changeFriends = function (friends) {
        this.Friends.next(friends);
    };
    ChatService.prototype.changeCalling = function (calling) {
        this.Calling.next(calling);
    };
    ChatService.prototype.changeDialing = function (dialing) {
        this.Dialing.next(dialing);
    };
    ChatService.prototype.changeCallInformation = function (callInformation) {
        this.CallInformation.next(callInformation);
    };
    ChatService.prototype.changeDialInformation = function (dialInformation) {
        this.DialInformation.next(dialInformation);
    };
    ChatService.prototype.changeFlashMessage = function (flashMessage) {
        this.FlashMessage.next(flashMessage);
    };
    ChatService.prototype.changeAudio = function (audio) {
        this.Audio.next(audio);
    };
    ChatService.prototype.getFriendRequests = function () {
        return this.http.get(this.BASE_URL + "/user/friendRequests")
            .map(function (res) { return res.json().requests; });
    };
    ChatService.prototype.getFriends = function () {
        return this.http.get(this.BASE_URL + "/user/friends")
            .map(function (res) { return res.json().friends; });
    };
    ChatService.prototype.getConversations = function () {
        return this.http.get(this.BASE_URL + "/user/conversations")
            .map(function (res) { return res.json().conversations; });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/popup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupService; });
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


var PopupService = /** @class */ (function () {
    function PopupService() {
        this.AnswerCall = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.HangUp = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.CancelCall = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.answerCall = this.AnswerCall.asObservable();
        this.hangUp = this.HangUp.asObservable();
        this.cancelCall = this.CancelCall.asObservable();
    }
    PopupService.prototype.answerCallEvent = function (bool) {
        this.AnswerCall.next(bool);
    };
    PopupService.prototype.hangUpEvent = function (bool) {
        this.HangUp.next(bool);
    };
    PopupService.prototype.cancelCallEvent = function (bool) {
        this.CancelCall.next(bool);
    };
    PopupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL;
    }
    UserService.prototype.getCurrentUser = function () {
        return this.http.get(this.BASE_URL + "/user/current")
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUsersByQuery = function (query) {
        return this.http.post(this.BASE_URL + "/user/query", { query: query })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.acceptAudio = function () {
        return this.http.get(this.BASE_URL + "/user/audio")
            .map(function (res) { return res.json(); });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL;
    }
    WebsocketService.prototype.connect = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](this.BASE_URL);
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
    production: false,
    BASE_URL: 'http://localhost:8000'
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