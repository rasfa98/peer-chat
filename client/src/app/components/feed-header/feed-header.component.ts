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
    this.socket = this.websocketService.socket

    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
    this.userService.currentOnlineUsers.subscribe(onlineUsers => this.onlineUsers = this.onlineUsers)

    this.socket.on('recieveSignal', data => {
      if (data.type === 'offer') {
        this.createPeer({ audio: true, video: true }, data.id, 'answer', data.peerId)
      } else {
        this.peer.signal(data.peerId)
      }
    })

  }

  startVideoCall(id) {
    this.createPeer({ audio: true, video: true }, id, 'offer')
  }

  startVoiceCall(id) {
    this.createPeer({ audio: true, video: false }, id, 'offer')
  }

  createPeer(options, id, type, peerId = null) {
    let peerx

    navigator.getUserMedia({ video: options.video, audio: options.audio }, stream => {
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
      peerx.on('signal', data => {
        this.peerId = data
        this.socket.emit('sendSignal', { id: id, peerId: data, type: type })
      })
      peerx.on('stream', stream => this.chatService.changeStream(stream))

      peerx.on('close', () => this.router.navigate(['']))
    }, err => console.log(err))

    setTimeout(() => {
      this.peer = peerx

      if (type === 'answer') { this.peer.signal(peerId) }
    }, 3000)
  }

}
