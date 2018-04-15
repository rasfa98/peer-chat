import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { ChatService } from './services/chat.service';
import { WebsocketService } from './services/websocket.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FeedComponent } from './components/feed/feed.component';
import { SendComponent } from './components/send/send.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { FeedHeaderComponent } from './components/feed-header/feed-header.component';
import { PeerChatComponent } from './components/peer-chat/peer-chat.component';

const appRoutes: Routes = [
  { path: '', component: ChatroomComponent },
  { path: 'peer', component: PeerChatComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    FeedComponent,
    SendComponent,
    ChatroomComponent,
    FeedHeaderComponent,
    PeerChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, ChatService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
