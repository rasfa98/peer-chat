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

  constructor(private popupService: PopupService, private chatService: ChatService) { }

  ngOnInit() {
    // Observables.
    this.chatService.currentCallInformation.subscribe(callInformation => this.callInformation = callInformation)
  }

  // Triggers answerCall() in feed-header component.
  answerCall() {
    this.popupService.answerCallEvent()
  }

  // Triggers hangUp() in feed-header component
  hangUp() {
    this.popupService.hangUpEvent()
  }
}
