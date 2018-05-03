import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { ChatService } from '../../services/chat.service'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  callInformation: object
  dialInformation: object
  calling: boolean
  dialing: boolean

  constructor(private popupService: PopupService, private chatService: ChatService) { }

  ngOnInit() {
    // Observables.
    this.chatService.currentCallInformation.subscribe(callInformation => this.callInformation = callInformation)
    this.chatService.currentDialInformation.subscribe(dialInformation => this.dialInformation = dialInformation)
    this.chatService.currentCalling.subscribe(calling => this.calling = calling)
    this.chatService.currentDialing.subscribe(dialing => this.dialing = dialing)
  }

  // Triggers answerCall() in feed-header component.
  answerCall() {
    this.popupService.answerCallEvent(true)
  }

  // Triggers hangUp() in feed-header component
  hangUp() {
    this.popupService.hangUpEvent(true)
  }

  cancelCall() {
    this.popupService.cancelCallEvent(true)
  }
}
