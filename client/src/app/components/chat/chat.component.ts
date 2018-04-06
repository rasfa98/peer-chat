import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import * as io from 'socket.io-client'; 
import * as SimplePeer from 'simple-peer';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  onlineUsers: object[]
  socket: any
  peer: any
  currentUser: CurrentUser

  constructor(private userService: UserService) {
    this.socket = io('http://localhost:8000')
  }

  ngOnInit() {
    // Setup websocket server.
    this.socket.on('updateOnlineUsers', users => {
      this.onlineUsers = users
    })

    this.userService.getCurrentUser()
    .subscribe(currentUser => {
      this.currentUser = currentUser
      this.socket.emit('newUser', currentUser)
    })

    this.socket.on('getPing', message => console.log(message))

    //Setup simple-peer.
    this.peer = new SimplePeer({ initiator: location.hash === '#1', trickle: false })

    this.peer.on('error', err => console.log(err))

    this.peer.on('signal', data => this.userService.savePeerId(this.currentUser.id, data).subscribe())

    // this.peer.on('connect')
  }

  signal(id) {
    console.log(id)
    // this.socket.emit('pingUser', id)
  }
}

interface CurrentUser {
  id: string
}
