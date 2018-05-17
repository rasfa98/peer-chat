import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  socket: void
  displayWelcome: string
  displayChatComponents: string
  loading: boolean
  calling: boolean
  dialing: boolean
  flashMessage: any

  constructor(private websocketService: WebsocketService, private chatService: ChatService) {
    this.loading = true
  }

  ngOnInit() {
    this.socket = this.websocketService.connect()

    this.chatService.calling.subscribe(calling => this.calling = calling)
    this.chatService.dialing.subscribe(dialing => this.dialing = dialing)
    this.chatService.flashMessage.subscribe(flashMessage => this.flashMessage  = flashMessage)
    

    this.chatService.activeUserItem.subscribe(activeUserItem => {
      if (activeUserItem.id === null) {
        this.displayWelcome = 'block'
        this.displayChatComponents = 'none'
      } else {
        this.displayWelcome = 'none'
        this.displayChatComponents = 'block'
      }

      this.loading = false
    })
  }
}
