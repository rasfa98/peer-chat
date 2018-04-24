import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  calling: any

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.currentCalling.subscribe(calling => this.calling = calling)
  }

}
