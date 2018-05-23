import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { ChatService } from '../../services/chat.service';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @ViewChild('answerBtn') answerBtn: any
  @ViewChild('hangUpBtn') hangUpBtn: any
  @ViewChild('cancelBtn') cancelBtn: any

  socket: any
  callInformation: object
  dialInformation: object
  calling: boolean
  dialing: boolean

  constructor
    (private popupService: PopupService,
      private chatService: ChatService,
      private websocketService: WebsocketService) {}

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.chatService.callInformation.subscribe(callInformation => this.callInformation = callInformation)
    this.chatService.dialInformation.subscribe(dialInformation => this.dialInformation = dialInformation)
    this.chatService.calling.subscribe(calling => this.calling = calling)
    this.chatService.dialing.subscribe(dialing => this.dialing = dialing)

    this.socket.on('answered', () => { if (this.cancelBtn) { this.cancelBtn.nativeElement.disabled = true } })
}

  answerCall() {
    this.answerBtn.nativeElement.disabled = true
    this.hangUpBtn.nativeElement.disabled = true

    this.popupService.answerCallEvent(true)
  }

  hangUp() {
    this.popupService.hangUpEvent(true)
  }

  cancelCall() {
    this.popupService.cancelCallEvent(true)
  }
}
