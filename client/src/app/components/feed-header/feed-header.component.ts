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
  calling: any
  data: any
  localStream: any

  constructor(private chatService: ChatService, private websocketService: WebsocketService, private userService: UserService, private router: Router) {
    this.calling = false
  }

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
    this.userService.currentOnlineUsers.subscribe(onlineUsers => this.onlineUsers = this.onlineUsers)

    this.socket.on('recieveSignal', data => {
      if (data.type === 'offer') {
        this.calling = true
        this.data = data
      } else {
        this.peer.signal(data.peerId)
      }
    })

    this.socket.on('hangUp', () => {
      this.localStream.getTracks()
      .forEach(x => x.stop())
    })
  }

  startVideoCall(id) {
    this.createPeer({ audio: true, video: true }, id, 'offer', 'video', null)
  }

  startVoiceCall(id) {
    this.createPeer({ audio: true, video: false }, id, 'offer', 'voice', null)
  }

  answerCall() {
    if (this.data.chatType === 'video') {
      this.createPeer({ audio: true, video: true }, this.data.id, 'answer', null, this.data.peerId)
    } else {
      this.createPeer({ audio: true, video: false }, this.data.id, 'answer', null, this.data.peerId)
    } 
  }

  hangUp() {
    this.calling = false
    this.socket.emit('hangUp', this.data.id)
  }

  createPeer(options, id, type, chatType, peerId) {
    let peerx
    let init

    if (type === 'offer') {
      init = true
    } else {
      init = false
    }

    navigator.getUserMedia({ video: options.video, audio: options.audio }, stream => {
      this.localStream = stream

      peerx = new SimplePeer({
        initiator: init,
        trickle: false,
        stream: stream,
        objectMode: true,
        reconnectTimer: 250,
        config: {
          iceServers: [{ urls:  [
            'stun:stun.l.google.com:19302',
            'stun:stun1.l.google.com:19302',
            'stun:stun2.l.google.com:19302',
            'stun:stun3.l.google.com:19302',
            'stun:stun4.l.google.com:19302' ]},
            {
              urls: 'stun:numb.viagenie.ca',
              username: 'rasmus.falk@live.se',
              credential: 'M581Z6DzR97BPSQltlbvq2jGXwObjoZB'
            },
            {
              urls: 'turn:numb.viagenie.ca',
              username: 'rasmus.falk@live.se',
              credential: 'M581Z6DzR97BPSQltlbvq2jGXwObjoZB'
            }
          ]}
      })

      peerx.on('error', err => console.log(err))
      peerx.on('connect', () => {
        this.chatService.changePeer(this.peer)
        this.router.navigate(['peer'])
      })
      peerx.on('signal', data => {
        this.peerId = data
        this.socket.emit('sendSignal', { id: id, peerId: data, chatType: chatType, type: type })
      })
      peerx.on('stream', stream => this.chatService.changeStream(stream))

      peerx.on('close', () => {
        this.router.navigate([''])
        
        this.localStream.getTracks()
        .forEach(x => x.stop())
      })
    }, err => console.log(err))

    setTimeout(() => {
      this.peer = peerx

      if (type === 'answer') { this.peer.signal(peerId) }
    }, 1000)
  }

}
