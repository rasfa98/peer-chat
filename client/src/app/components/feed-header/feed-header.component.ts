import { Component, OnInit } from '@angular/core';
import { ChatService } from  '../../services/chat.service';
import { WebsocketService } from  '../../services/websocket.service';
import { UserService } from  '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-header',
  templateUrl: './feed-header.component.html',
  styleUrls: ['./feed-header.component.css']
})
export class FeedHeaderComponent implements OnInit {
  socket: any
  activeUserItem: any
  onlineUsers: any

  constructor(private chatService: ChatService, private websocketService: WebsocketService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
    this.userService.currentOnlineUsers.subscribe(onlineUsers => this.onlineUsers = this.onlineUsers)
  }

  startVideoCall() {
    navigator.getUserMedia({ video: true, audio: true }, stream => {
      this.router.navigate(['peer'])
    }, err => console.log(err))
  }

  startVoiceCall() {
    navigator.getUserMedia({ video: false, audio: true }, stream => {
      this.router.navigate(['peer'])
    }, err => console.log(err))
  }

}
