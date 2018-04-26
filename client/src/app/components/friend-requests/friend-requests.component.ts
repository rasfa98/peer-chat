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
  friendRequests: any

  constructor(private websocketService: WebsocketService, private chatService: ChatService) {
    this.friendRequests = []
  }

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.socket.on('addUser', request => {
      this.friendRequests.push(request)

      this.chatService.changeFriendRequestUsers(this.friendRequests)
    })

    this.socket.on('acceptRequest', () => this.chatService.getFriends().subscribe(friends => this.chatService.changeFriends(friends)))
  }

  // Gets a users friend requests.
  viewFriendRequests() {
    this.chatService.getFriendRequests().subscribe(data => {
      this.chatService.changeState("friendRequest")
      this.chatService.changeFriendRequestUsers(data)

      this.friendRequests = data
    })
  }
}
