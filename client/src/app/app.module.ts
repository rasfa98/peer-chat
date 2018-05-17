import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { ChatService } from './services/chat.service';
import { WebsocketService } from './services/websocket.service';
import { PopupService } from './services/popup.service';

import { UserListComponent } from './components/user-list/user-list.component';
import { FeedComponent } from './components/feed/feed.component';
import { SendComponent } from './components/send/send.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { FeedHeaderComponent } from './components/feed-header/feed-header.component';
import { PeerChatComponent } from './components/peer-chat/peer-chat.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchComponent } from './components/search/search.component';
import { FriendRequestsComponent } from './components/friend-requests/friend-requests.component';
import { PopupComponent } from './components/popup/popup.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CurrentUserComponent } from './components/current-user/current-user.component';
import { FlashMessageComponent } from './components/flash-message/flash-message.component';

const appRoutes: Routes = [
  { path: '', component: ChatroomComponent },
  { path: 'peer', component: PeerChatComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    FeedComponent,
    SendComponent,
    ChatroomComponent,
    FeedHeaderComponent,
    PeerChatComponent,
    WelcomeComponent,
    SearchComponent,
    FriendRequestsComponent,
    PopupComponent,
    LoadingComponent,
    CurrentUserComponent,
    FlashMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, ChatService, WebsocketService, PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
