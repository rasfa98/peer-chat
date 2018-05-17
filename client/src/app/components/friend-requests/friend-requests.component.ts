import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.css']
})
export class FriendRequestsComponent implements OnInit {
  socket: any
  notification: any
  state: string

  constructor(private websocketService: WebsocketService, private chatService: ChatService) {}

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.chatService.state.subscribe(state => this.state = state)

    this.socket.on('newRequest', () => {
      this.chatService.getFriendRequests().subscribe(friendRequests => {
        this.chatService.changeFriendRequestUsers(friendRequests)

        if (this.state !== "friendRequest") { this.notification = true }
      })
    })

    this.socket.on('acceptRequest', () => {
      this.chatService.getFriends().subscribe(friends => {
      this.chatService.changeFriends(friends)
    })
  })
}
  viewFriendRequests() {
    this.chatService.getFriendRequests().subscribe(data => {
      this.chatService.changeFriendRequestUsers(data)
      this.notification = false;
      this.chatService.changeState("friendRequest")
    })
  }
}
