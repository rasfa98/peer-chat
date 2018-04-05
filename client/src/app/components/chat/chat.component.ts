import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client'; 
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  onlineUsers: object[]
  socket

  constructor(private userService: UserService) {
    this.socket = io()
  }

  ngOnInit() {
    this.socket.on('updateOnlineUsers', users => {
      this.onlineUsers = users
    })

    this.userService.getCurrentUser()
    .subscribe(currentUser => this.socket.emit('newUser', currentUser))

    this.socket.on('getPing', message => console.log(message))
  }

  pingUser(id) {
    this.socket.emit('pingUser', id)
  }
}
