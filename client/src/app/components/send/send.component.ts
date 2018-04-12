import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service'
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  socket: any
  activeUserItem: any

  constructor(private websocketService: WebsocketService, private chatService: ChatService) {}

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
  }
}
