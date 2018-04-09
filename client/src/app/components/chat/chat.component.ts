import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import * as io from 'socket.io-client'; 
import * as SimplePeer from 'simple-peer';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  onlineUsers: User[]
  socket: any
  peer: any
  peerId: any
  currentUser: any

  constructor(private userService: UserService) {
    // this.socket = io()
    this.onlineUsers = []
  }

  ngOnInit() {
    // Setup websocket server.
    this.socket.on('updateOnlineUsers', users => {
      this.onlineUsers = users

      for (let i = 0; i < this.onlineUsers.length; i++) {
        if (this.onlineUsers[i].id === this.currentUser.id) {
          this.onlineUsers.splice(i, 1)
        }
      }
    })

    this.userService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user
      this.socket.emit('newUser', user)
    })

    this.socket.on('recieveSignal', data => {
      this.peer.signal(data)
    })

    //Setup simple-peer.
    this.peer = new SimplePeer({
      initiator: location.hash === '#1',
      trickle: false,
      objectMode: true,
      reconnectTimer: 150,
      config: {
        iceServers: [{ urls:  [
          'stun:stun.l.google.com:19302',
          'stun:stun1.l.google.com:19302',
          'stun:stun2.l.google.com:19302',
          'stun:stun3.l.google.com:19302',
          'stun:stun4.l.google.com:19302' ]} 
        ]}
    })

    this.peer.on('error', err => console.log(err))
    this.peer.on('signal', data => this.peerId = data)
    this.peer.on('connect', () => console.log('Peer2Peer connection established!'))
    this.peer.on('data', data => console.log(data))
  }

  signal(id) { this.socket.emit('sendSignal', { id: id, peerId: this.peerId }) }
  send(message) { this.peer.send(message) }
}
