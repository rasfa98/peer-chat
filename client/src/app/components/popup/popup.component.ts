import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { ChatService } from '../../services/chat.service'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  callInformation: any

  constructor(private popupService: PopupService, private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.currentCallInformation.subscribe(callInformation => this.callInformation = callInformation)
  }

  answerCall() {
    this.popupService.answerCallEvent()
  }

  hangUp() {
    this.popupService.hangUpEvent()
  }
}
