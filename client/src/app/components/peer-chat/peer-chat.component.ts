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
  @ViewChild('end') endCallBtn: any

  peer: any

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    // Observables.
    this.chatService.currentStream.subscribe(stream => {
      this.videoChat.nativeElement.srcObject = stream

      this.videoChat.nativeElement.play()
      .catch(err => {
        this.peer.destroy()
      })
    })

    this.chatService.currentPeer.subscribe(peer => {
      this.peer = peer
      this.endCallBtn.nativeElement.disabled = false
    })
  }

  // Ends the current Peer2Peer call.
  endCall() {
    this.peer.destroy()
  }
}
