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
  peerId: string
  peer: any
  calling: boolean
  dialing: boolean
  data: any
  localStream: any
  callInformation: object
  dialInformation: any
  error: boolean

  constructor
  (private chatService: ChatService,
   private websocketService: WebsocketService, 
   private router: Router,
   private popupService: PopupService) {
     this.error = false
   }

  ngOnInit() {
    this.socket = this.websocketService.socket

    // Observables.
    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
    this.chatService.currentCalling.subscribe(calling => this.calling = calling)
    this.chatService.currentDialing.subscribe(dialing => this.dialing = dialing)
    this.popupService.answerCallObs.subscribe(type => { if (type) { this.answerCall() } })
    this.popupService.hangUpObs.subscribe(type => { if (type) { this.hangUp() } })
    this.popupService.cancelCallObs.subscribe(type => { if (type) { this.cancelCall() } })

    // When the users gets a Peer2Peer call.
    this.socket.on('newSignal', data => {
      if (data.type === 'offer') {
        this.startAudioRinging()
        
        this.chatService.changeCalling(true)

        this.data = data

        this.callInformation = { caller: data.caller, callType: data.chatType }

        this.chatService.changeCallInformation(this.callInformation)
      } else { this.peer.signal(data.peerId) }
    })

    // When the called user hangs up.
    this.socket.on('hangUp', () => {
      this.chatService.changeDialing(false)
      this.stopAudio()
      this.localStream.getTracks().forEach(x => x.stop())
    })

    this.socket.on('cancelCall', () => {
      this.chatService.changeCalling(false)
      this.stopAudio()
    })
  }

  removeFriend(id) {
    this.socket.emit('removeFriend', id)
  }

  // Starts a new video call.
  startVideoCall(id) {
    this.dialInformation = { id: this.activeUserItem.id, receiver: this.activeUserItem.fullName, dialType: 'video' }
    this.chatService.changeDialInformation(this.dialInformation)
    this.chatService.changeDialing(true)
    this.startAudioDial()
    this.createPeer({ audio: true, video: true }, id, 'offer', 'video', null)

    setTimeout(() => this.cancelCall(), 10000)
  }

  // Starts a new voice call.
  startVoiceCall(id) {
    this.dialInformation = { id: this.activeUserItem.id, receiver: this.activeUserItem.fullName, dialType: 'voice' }
    this.chatService.changeDialInformation(this.dialInformation)
    this.chatService.changeDialing(true)
    this.startAudioDial()
    this.createPeer({ audio: true, video: false }, id, 'offer', 'voice', null)

    setTimeout(() => this.cancelCall(), 10000)
  }

  // Starts the dial sound.
  startAudioDial() {
    this.audio.nativeElement.src = '../../../assets/dialing.mp3'
    this.audio.nativeElement.play()
  }

  // Stops the call audio (dial/ringing)
  stopAudio() {
    this.audio.nativeElement.pause()
  }

  // Starts teh ringing sound.
  startAudioRinging() {
    this.audio.nativeElement.src = '../../../assets/ringing.mp3'
    this.audio.nativeElement.play()
  }

  // Answer the incoming call.
  answerCall() {
    if (this.data.chatType === 'video') { this.createPeer({ audio: true, video: true }, this.data.id, 'answer', null, this.data.peerId) } 
    if (this.data.chatType !== 'video') { this.createPeer({ audio: true, video: false }, this.data.id, 'answer', null, this.data.peerId) }
  }

  cancelCall() {
    this.chatService.changeDialing(false)
    this.stopAudio()
    this.localStream.getTracks().forEach(x => x.stop())

    this.socket.emit('cancelCall', this.dialInformation.id )
  }

  // Decline incoming call.
  hangUp() {
    this.chatService.changeCalling(false)
    this.stopAudio()
    this.socket.emit('hangUp', this.data.id)
  }

  // Creates a new Peer.
  createPeer(options, receiver, type, chatType, peerId) {
    let peerx
    let init

    type === 'offer' ? init = true : init = false

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
          iceServers: [{
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
        this.localStream.getTracks().forEach(x => x.stop())
        this.chatService.changeDialing(false)
        this.chatService.changeCalling(false)
        this.stopAudio()
        this.error = true
      })

      peerx.on('connect', () => {
        this.chatService.changeCalling(false)
        this.chatService.changeDialing(false)
        this.stopAudio()
        
        this.chatService.changePeer(this.peer)

        this.popupService.hangUpEvent(false)
        this.popupService.answerCallEvent(false)
        this.popupService.cancelCallEvent(false)
        
        this.router.navigate(['peer'])
      })

      peerx.on('signal', data => {
        this.peerId = data
        this.socket.emit('sendSignal', { id: receiver, peerId: data, chatType: chatType, type: type })
      })

      peerx.on('stream', stream => this.chatService.changeStream(stream))

      peerx.on('close', () => {
        this.localStream.getTracks().forEach(x => x.stop())

        this.router.navigate([''])
      })
    })
    .catch(err => console.log(err))

    // Sets "dummy variable" values when view is fully rendered.
    setTimeout(() => {
      this.peer = peerx

      type === 'answer' ? this.peer.signal(peerId) : null
    }, 2000)
  }
}
