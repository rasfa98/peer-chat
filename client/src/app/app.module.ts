import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';

import { WebsocketService } from './services/websocket.service';
import { DatabaseService } from './services/database.service';

const appRoutes: Routes = [
  { path: '', component: ChatComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WebsocketService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
