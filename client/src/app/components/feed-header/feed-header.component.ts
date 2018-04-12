import { Component, OnInit } from '@angular/core';
import { ChatService } from  '../../services/chat.service';
import { WebsocketService } from  '../../services/websocket.service';
import { UserService } from  '../../services/user.service';
import { Router } from '@angular/router';
import * as SimplePeer from 'simple-peer';

@Component({
  selector: 'app-feed-header',
  templateUrl: './feed-header.component.html',
  styleUrls: ['./feed-header.component.css']
})
export class FeedHeaderComponent implements OnInit {
  socket: any
  activeUserItem: any
  onlineUsers: any
  stream: any
  peerId: any
  peer: any

  constructor(private chatService: ChatService, private websocketService: WebsocketService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    let peerx

    this.socket = this.websocketService.socket

    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
    this.userService.currentOnlineUsers.subscribe(onlineUsers => this.onlineUsers = this.onlineUsers)

    this.socket.on('recieveSignal', data => this.peer.signal(data.peerId))

    navigator.getUserMedia({ video: true, audio: true }, stream => {
      peerx = new SimplePeer({
        initiator: location.hash === '#available',
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
      peerx.on('connect', () => {
        this.chatService.changePeer(this.peer)
        this.router.navigate(['peer'])
      })
      peerx.on('signal', data => this.peerId = data)
      peerx.on('stream', stream => {
        this.chatService.changeStream(stream)
      })
      peerx.on('close', () => this.router.navigate(['']))
    }, err => console.log(err))

    setTimeout(() => {
      this.peer = peerx
      console.log(this.peer)
    }, 3000)

  }

  startVideoCall(id) {
    this.socket.emit('sendSignal', { id: id, peerId: this.peerId })
  }

  startVoiceCall() {
    navigator.getUserMedia({ video: false, audio: true }, stream => {
      this.chatService.changeStream(stream)
      this.router.navigate(['peer'])
    }, err => console.log(err))
  }

}
