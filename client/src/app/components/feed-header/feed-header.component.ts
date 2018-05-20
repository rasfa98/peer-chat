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
  stream: object
  peerId: string
  peer: any
  calling: boolean
  dialing: boolean
  data: any
  localStream: any
  callInformation: object
  dialInformation: any
  answered: boolean
  friends: any
  allowAudio: boolean

  constructor
    (private chatService: ChatService,
      private websocketService: WebsocketService,
      private router: Router,
      private popupService: PopupService) {}

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.chatService.activeUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
    this.chatService.calling.subscribe(calling => this.calling = calling)
    this.chatService.dialing.subscribe(dialing => this.dialing = dialing)
    this.popupService.answerCall.subscribe(type => { if (type && this.data) {this.answerCall() } })
    this.popupService.hangUp.subscribe(type => { if (type && this.data) { this.hangUp() } })
    this.popupService.cancelCall.subscribe(type => { if (type && this.dialInformation) { this.cancelCall() } })
    this.chatService.friends.subscribe(friends => this.friends = friends)
    this.chatService.audio.subscribe(audio => this.allowAudio = audio)

    try {
      this.socket.on('newSignal', data => {
        if (data.type === 'offer') {
          this.startAudioRinging()

          this.chatService.changeCalling(true)

          this.data = data

          this.callInformation = { caller: data.caller, callType: data.chatType }

          this.chatService.changeCallInformation(this.callInformation)
        } else { this.peer.signal(data.peerId) }
      })
    } catch (err) {
      this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to establish a connection, please try again...', color: 'warning' })
      this.newError()
    }

    this.socket.on('callError', () => {
      if (this.localStream) { this.localStream.getTracks().forEach(x => x.stop()) }

      this.chatService.changeDialing(false)
      this.chatService.changeCalling(false)
      this.stopAudio()
    })
    
    this.socket.on('hangUp', () => {
      this.chatService.changeDialing(false)
      this.stopAudio()
      if (this.localStream) { this.localStream.getTracks().forEach(x => x.stop()) }
    })

    this.socket.on('cancelCall', () => {
      this.chatService.changeCalling(false)
      this.stopAudio()
    })
  
    this.socket.on('answered', () => this.answered = true)
  }
  
  removeFriend(id) {
    this.socket.emit('removeFriend', id)
  }

  startVideoCall(id) {
    this.dialInformation = { id: this.activeUserItem.id, receiver: this.activeUserItem.fullName, dialType: 'video' }

    this.chatService.changeDialInformation(this.dialInformation)
    this.chatService.changeDialing(true)
    this.startAudioDial()
    this.createPeer({ audio: true, video: true }, id, 'offer', 'video', null)

    setTimeout(() => { if (this.answered !== true) { this.cancelCall() } }, 10000)
  }

  startVoiceCall(id) {
    this.dialInformation = { id: this.activeUserItem.id, receiver: this.activeUserItem.fullName, dialType: 'voice' }

    this.chatService.changeDialInformation(this.dialInformation)
    this.chatService.changeDialing(true)
    this.startAudioDial()
    this.createPeer({ audio: true, video: false }, id, 'offer', 'voice', null)

    setTimeout(() => { if (this.answered !== true) { this.cancelCall() } }, 10000)
  }

  newError() {
    if (this.localStream) { this.localStream.getTracks().forEach(x => x.stop()) }

    this.chatService.changeDialing(false)
    this.chatService.changeCalling(false)
    this.stopAudio()

    if (this.data) {
      this.socket.emit('callError', this.data.id)
    }
  }

  startAudioDial() {
    if (this.allowAudio) {
      this.audio.nativeElement.src = '../../../assets/sounds/dialing.mp3'
      this.audio.nativeElement.play()
    }
  }

  stopAudio() {
    this.audio.nativeElement.pause()
  }

  startAudioRinging() {
    if (this.allowAudio) {
      this.audio.nativeElement.src = '../../../assets/sounds/ringing.mp3'
      this.audio.nativeElement.play()
    }
  }

  answerCall() {
    this.socket.emit('answered', this.data.id)

    this.chatService.changeActiveUserItem(this.friends.filter(x => x.id === this.data.id)[0])
    this.chatService.changeActiveConversation(this.friends.filter(x => x.id === this.data.id)[0].id)

    if (this.data.chatType === 'video') {
      this.createPeer({ audio: true, video: true }, this.data.id, 'answer', null, this.data.peerId)
    }

    if (this.data.chatType !== 'video') {
      this.createPeer({ audio: true, video: false }, this.data.id, 'answer', null, this.data.peerId)
    }
  }

  cancelCall() {
    this.chatService.changeDialing(false)
    this.stopAudio()
    if (this.localStream) { this.localStream.getTracks().forEach(x => x.stop()) }

    this.socket.emit('cancelCall', this.dialInformation.id)
  }

  hangUp() {
    this.chatService.changeCalling(false)
    this.stopAudio()

    this.socket.emit('hangUp', this.data.id)
  }

  createPeer(options, receiver, type, chatType, peerId) {
    try {
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
              ]
            }
          })

          peerx.on('error', err => {
            this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to establish a connection, please try again...', color: 'warning' })
            this.newError()
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

          peerx.on('stream', stream => {
            this.chatService.changeStream(stream)
            this.chatService.changeLocalStream(this.localStream)
          })

          peerx.on('close', () => {
            if (this.localStream) { this.localStream.getTracks().forEach(x => x.stop()) }

            this.router.navigate([''])
          })
        })
        .catch(err => {
          this.chatService.changeFlashMessage({ type: 'error', message: 'There was an error when trying to use your camera/microphone', color: 'warning' })
          this.newError()
        })

      setTimeout(() => {
        this.peer = peerx

        if (this.peer) {
          type === 'answer' ? this.peer.signal(peerId) : null
        }
      }, 5000)
    } catch (err) {
      this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to establish a connection, please try again...', color: 'warning' })
      this.newError()
    }
  }
}
