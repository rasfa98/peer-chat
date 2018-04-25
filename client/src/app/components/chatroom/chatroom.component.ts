import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service'
import { ChatService } from '../../services/chat.service'

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  socket: any
  activeUserItem: any
  displayWelcome: any
  displayChatComponents: any
  calling: any

  constructor(private websocketService: WebsocketService, private chatService: ChatService) {
    this.displayWelcome = 'block'
    this.displayChatComponents = 'none'
  }

  ngOnInit() {
    this.socket = this.websocketService.connect()

    this.chatService.currentCalling.subscribe(calling => this.calling = calling)

    this.chatService.currentActiveUserItem.subscribe(activeUserItem => {
      this.activeUserItem = activeUserItem

      if (activeUserItem.id !== null) {
        this.displayWelcome = 'none'
        this.displayChatComponents = 'block'
      }
    })
  }

}
