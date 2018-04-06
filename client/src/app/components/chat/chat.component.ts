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
  peerId: any
  currentUser: CurrentUser

  constructor(private userService: UserService) {
    this.socket = io()
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

    this.socket.on('recieveSignal', data => {
      this.peer.signal(data)
    })

    //Setup simple-peer.
    this.peer = new SimplePeer({
      initiator: location.hash === '#1',
      trickle: false,
      objectMode: true,
      config: {
        iceServers: [ { urls: 'stun:stun.1.google.com:19302' } ] 
      }
    })

    this.peer.on('error', err => console.log(err))

    this.peer.on('signal', data => this.peerId = data)

    this.peer.on('connect', () => console.log('Peer2Peer connection established!'))

    this.peer.on('data', data => console.log(data))
  }

  signal(id) {
    this.socket.emit('sendSignal', { id: id, peerId: this.peerId })
  }

  send(message) {
    this.peer.send(message)
  }
}

interface CurrentUser {
  id: string
}
