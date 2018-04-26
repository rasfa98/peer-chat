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

  stream: any
  peer: any

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    // Observables.
    this.chatService.currentStream.subscribe(stream => {
      this.stream = this.stream

      this.videoChat.nativeElement.src = window.URL.createObjectURL(stream)
      this.videoChat.nativeElement.play()
    })

    this.chatService.currentPeer.subscribe(peer => this.peer = peer)
  }

  // Ends the current Peer2Peer call.
  endCall() {
    this.peer.destroy()
  }
}
