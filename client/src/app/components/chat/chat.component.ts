import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client'; 

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  onlineUsers: object[]
  socket

  constructor() {
    this.socket = io()
  }

  ngOnInit() {
    this.socket.on('updateOnlineUsers', users => {
      this.onlineUsers = users
    })
  }
}
