import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';
import * as io from 'socket.io-client'; 
import * as SimplePeer from 'simple-peer';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild('videoChat') videoChat: any

  onlineUsers: any
  activeUserItem: any
  socket: any
  peer: any
  peerId: any
  currentUser: any
  n = <any>navigator

  constructor(private userService: UserService, private chatService: ChatService) {
    this.socket = io('http://localhost:8000')
    this.onlineUsers = []
  }

  ngOnInit() {
    this.userService.currentOnlineUsers.subscribe(onlineUsers => this.onlineUsers = onlineUsers)
    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)

    this.chatService.changeActiveUserItem(this.onlineUsers[0])

    this.socket.on('updateOnlineUsers', users => {
      this.onlineUsers = users

      for (let i = 0; i < this.onlineUsers.length; i++) {
        if (this.onlineUsers[i].id === this.currentUser.id) {
          this.onlineUsers.splice(i, 1)
        }
      }

      this.userService.changeOnlineUsers(this.onlineUsers)
    })

    this.userService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user
      this.socket.emit('newUser', user)
    })

    this.socket.on('recieveSignal', data => {
      this.peer.signal(data)
    })

    // this.peer.on('data', data => console.log(data))

    let peerx: any
    let video = this.videoChat.nativeElement
    this.n.getUserMedia({ video: true, audio: true }, (stream) => {
      peerx = new SimplePeer({
        initiator: location.hash === '#1',
        trickle: false,
        stream: stream,
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
      
      peerx.on('error', err => console.log(err))
      peerx.on('connect', () => console.log('Peer2Peer connection established!'))
      peerx.on('signal', data => this.peerId = data)
      peerx.on('stream', (stream => {
        video.src = window.URL.createObjectURL(stream)
        video.play()
      }))
    }, err => console.log('ERROR:', err))

    setTimeout(() => {
      this.peer = peerx
      console.log(this.peer)
    }, 5000)
}

  signal(id) {
    this.socket.emit('sendSignal', { id: id, peerId: this.peerId })
  }
}
