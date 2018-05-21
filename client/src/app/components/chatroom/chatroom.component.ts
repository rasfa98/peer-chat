import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  socket: any
  displayWelcome: string
  displayChatComponents: string
  loading: boolean
  calling: boolean
  dialing: boolean
  flashMessage: object

  constructor(private websocketService: WebsocketService, private chatService: ChatService) {
    this.loading = true
  }

  ngOnInit() {
    this.websocketService.connect()
    this.socket = this.websocketService.socket

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

    this.socket.on('friendResponseServer', data => {
      if (data.type === 'success') {
        this.chatService.changeFlashMessage({ type: 'info', message: data.message, color: 'success' })
        this.chatService.changeState("friendList")
      }

      if (data.type === 'error') {
        this.chatService.changeFlashMessage({ type: 'info', message: data.message, color: 'warning' })
      }
    })

    this.socket.on('messageResponseServer', data => {
      this.chatService.changeFlashMessage({ type: 'info', message: data.message, color: 'warning' })
    })
  }
}
