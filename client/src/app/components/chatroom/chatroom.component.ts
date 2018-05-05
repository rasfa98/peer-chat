import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service'
import { ChatService } from '../../services/chat.service'

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

  constructor(private websocketService: WebsocketService, private chatService: ChatService) {
    this.loading = true
  }

  ngOnInit() {
    this.socket = this.websocketService.connect()

    // Observables.
    this.chatService.currentCalling.subscribe(calling => this.calling = calling)
    this.chatService.currentDialing.subscribe(dialing => this.dialing = dialing)

    this.chatService.currentActiveUserItem.subscribe(activeUserItem => {
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
