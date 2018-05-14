import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-peer-chat',
  templateUrl: './peer-chat.component.html',
  styleUrls: ['./peer-chat.component.css']
})
export class PeerChatComponent implements OnInit {
  @ViewChild('videoChat') videoChat: any
  @ViewChild('mic') micBtn: any
  @ViewChild('video') videoBtn: any
  @ViewChild('localVideo') localVideo: any
  @ViewChild('end') endCallBtn: any
  @ViewChild('chat') chatComponents: any

  peer: any
  stream: any
  localStream: any
  chatType: string
  loading: boolean

  constructor(private chatService: ChatService, private router: Router) {
    this.loading = true
  }

  ngOnInit() {
    // Observables.
    this.chatService.currentLocalStream.subscribe(stream => {
      this.localStream = stream

      this.chatComponents.nativeElement.hidden = false
      this.loading = false

      this.getCallType()

      this.localVideo.nativeElement.srcObject = stream
      this.localVideo.nativeElement.play()
    })

    this.chatService.currentStream.subscribe(stream => {
      this.stream = stream

      this.chatService.currentPeer.subscribe(peer => {
        this.peer = peer

        this.endCallBtn.nativeElement.disabled = false

        this.videoChat.nativeElement.srcObject = stream

        this.videoChat.nativeElement.play()
        .catch(err => {
          this.peer.destroy()
          this.chatService.changeError({ error: true, message: 'There was an error with the stream, please try again...' })
          console.log(err)
        })
      })
    })
  }

  // Ends the current Peer2Peer call.
  endCall() {
    this.peer.destroy()
  }

  toggleCamera() {
    this.localStream.getVideoTracks().forEach(x => x.enabled = !x.enabled)
  }

  toggleMicrophone() {
    this.localStream.getAudioTracks().forEach(x => x.enabled = !x.enabled)
  }

  getCallType() {
    const tracks = this.localStream.getTracks().filter(x => x.kind === 'video')

      if (tracks.length > 0) {
        this.chatType = 'video'

        this.micBtn.nativeElement.disabled = false
        this.videoBtn.nativeElement.disabled = false
      } else {
        this.chatType = 'voice'

        this.localVideo.nativeElement.style.display = 'none'
        this.micBtn.nativeElement.disabled = false
        this.videoBtn.nativeElement.disabled = false
      }
  }
}
