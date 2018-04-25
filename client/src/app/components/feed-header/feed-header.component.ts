import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from  '../../services/chat.service';
import { WebsocketService } from  '../../services/websocket.service';
import { UserService } from  '../../services/user.service';
import { PopupService } from '../../services/popup.service';
import { Router } from '@angular/router';
import * as SimplePeer from 'simple-peer';

@Component({
  selector: 'app-feed-header',
  templateUrl: './feed-header.component.html',
  styleUrls: ['./feed-header.component.css']
})
export class FeedHeaderComponent implements OnInit {
  @ViewChild('audio') audio: any

  socket: any
  activeUserItem: any
  stream: any
  peerId: any
  peer: any
  calling: any
  data: any
  localStream: any
  callInformation: any

  constructor
  (private chatService: ChatService,
   private websocketService: WebsocketService, 
   private userService: UserService,
   private router: Router,
   private popupService: PopupService) {}

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
    this.chatService.currentCalling.subscribe(calling => this.calling = calling)
    this.popupService.answerCallObs.subscribe(type => { if (type) { this.answerCall() } })
    this.popupService.hangUpObs.subscribe(type => { if (type) { this.hangUp() } })

    this.socket.on('recieveSignal', data => {
      if (data.type === 'offer') {
        this.startAudioRinging()
        this.chatService.changeCalling(true)
        this.data = data

        this.callInformation = {
          caller: data.caller,
          callType: data.chatType
        }

        this.chatService.changeCallInformation(this.callInformation)
      } else {
        this.peer.signal(data.peerId)
      }
    })

    this.socket.on('hangUp', () => {
      this.stopAudio()
      this.localStream.getTracks()
      .forEach(x => x.stop())
    })
  }

  startVideoCall(id) {
    this.startAudioDial()
    this.createPeer({ audio: true, video: true }, id, 'offer', 'video', null)
  }

  startVoiceCall(id) {
    this.startAudioDial()
    this.createPeer({ audio: true, video: false }, id, 'offer', 'voice', null)
  }

  startAudioDial() {
    this.audio.nativeElement.src = '../../../assets/dialing.mp3'
    this.audio.nativeElement.play()
  }

  stopAudio() {
    this.audio.nativeElement.pause()
  }

  startAudioRinging() {
    this.audio.nativeElement.src = '../../../assets/ringing.mp3'
    this.audio.nativeElement.play()
  }

  answerCall() {
    if (this.data.chatType === 'video') {
      this.createPeer({ audio: true, video: true }, this.data.id, 'answer', null, this.data.peerId)
    } else {
      this.createPeer({ audio: true, video: false }, this.data.id, 'answer', null, this.data.peerId)
    } 
  }

  hangUp() {
    this.audio.nativeElement.pause()
    this.chatService.changeCalling(false)
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

    navigator.mediaDevices.getUserMedia({ video: options.video, audio: options.audio })
    .then(stream => {
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

      peerx.on('error', err => {
        console.log(err)

        this.localStream.getTracks()
        .forEach(x => x.stop())
      })

      peerx.on('connect', () => {
        this.chatService.changeCalling(false)
        this.stopAudio()
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

        this.chatService.getFriends()
      })
    })
    .catch(err => console.log(err))

    setTimeout(() => {
      this.peer = peerx

      if (type === 'answer') { this.peer.signal(peerId) }
    }, 2000)
  }

}
