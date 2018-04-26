import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service'
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  @ViewChild('message') input: any

  socket: any
  activeUserItem: any

  constructor(private websocketService: WebsocketService, private chatService: ChatService) {}

  ngOnInit() {
    this.socket = this.websocketService.socket

    // Observables.
    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
  }

  // Sends a message to user with matching id.
  sendMessage(message, id) {
    this.socket.emit('sendMessage', { message: message, id: id })
    this.input.nativeElement.value = ""
  }
}
