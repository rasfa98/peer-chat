import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peer-chat',
  templateUrl: './peer-chat.component.html',
  styleUrls: ['./peer-chat.component.css']
})
export class PeerChatComponent implements OnInit {
  @ViewChild('localVideo') localVideo: any
  @ViewChild('peerVideo') peerVideo: any
  @ViewChild('mic') micBtn: any
  @ViewChild('video') videoBtn: any
  @ViewChild('end') endCallBtn: any
  @ViewChild('chat') chatComponents: any

  peer: any
  localStream: any
  stream: object
  chatType: string
  loading: boolean
  hasPlayedLocal: boolean
  hasPlayedPeer: boolean
  clickVid: boolean
  clickMic: boolean

  constructor(private chatService: ChatService, private router: Router, private zone: NgZone) {
    this.loading = true
    this.clickMic = true
    this.clickVid = true
  }

  ngOnInit() {
    this.chatService.localStream.subscribe(stream => {
      if (!this.hasPlayedLocal) {
        this.localStream = stream

        this.chatComponents.nativeElement.hidden = false
        this.loading = false

        this.getCallType()

        this.localVideo.nativeElement.srcObject = stream
        this.localVideo.nativeElement.play()
        this.hasPlayedLocal = true
      }
    })

    this.chatService.stream.subscribe(stream => {
      if (!this.hasPlayedPeer) {
        this.stream = stream

        this.chatService.peer.subscribe(peer => {
          this.peer = peer
  
          this.peerVideo.nativeElement.srcObject = stream
          this.peerVideo.nativeElement.play()
          .then(() => this.hasPlayedPeer = true)
          .catch(err => {
            this.hasPlayedPeer = false
            this.peer.destroy()
            this.chatService.changeFlashMessage({ type: 'error', message: 'There was an error with the stream, please try again...', color: 'warning' })
          })
        }) 
      }
    })
  }

  endCall() {
    this.peer.destroy()
  }

  toggleCamera() {
    this.localStream.getVideoTracks().forEach(x => x.enabled = !x.enabled)
    this.clickVid = !this.clickVid
    this.zone.run(() => {})
  }

  toggleMicrophone() {
    this.localStream.getAudioTracks().forEach(x => x.enabled = !x.enabled)
    this.clickMic = !this.clickMic
    this.zone.run(() => {})
  }

  getCallType() {
    const tracks = this.localStream.getTracks().filter(x => x.kind === 'video')

      if (tracks.length > 0) {
        this.chatType = 'video'
      } else {
        this.chatType = 'voice'

        this.localVideo.nativeElement.style.display = 'none'
        this.videoBtn.nativeElement.style.display = 'none'
      }
  }
}
