import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  socket: any
  activeUserItem: any
  conversations: any
  activeConversation: any

  constructor(private websocketService: WebsocketService, private chatService: ChatService) {
    this.conversations = []
  }

  ngOnInit() {
    this.socket = this.websocketService.socket

    // Observables.
    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
    this.chatService.currentActiveConversation.subscribe(id => this.activeConversation = this.conversations[id])
    this.chatService.getConversations().subscribe(conversations => this.conversations = conversations)
    
    // Adds new messages to the client.
    this.socket.on('newMessage', data => {
      if (this.conversations[data.id]) {
        this.conversations[data.id].push({ message: data.message, sender: data.name })
      } else {
        this.conversations[data.id] = []
        this.conversations[data.id].push({ message: data.message, sender: data.name })

        this.activeUserItem.id === data.id ? this.activeConversation = this.conversations[data.id] : null
      }
    })
  }
}
