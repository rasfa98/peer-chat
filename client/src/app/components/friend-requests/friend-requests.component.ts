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

    // Observables.
    this.chatService.currentState.subscribe(state => {
      this.state = state
      console.log(state)
    })

    this.socket.on('addUser', () => {
      this.chatService.getFriendRequests().subscribe(friendRequests => {
        this.chatService.changeFriendRequestUsers(friendRequests)

        console.log(this.state)

        if (this.state !== "friendRequest") { this.notification = true }
      })
    })

    this.socket.on('acceptRequest', () => {
      this.chatService.getFriends().subscribe(friends => {
      this.chatService.changeFriends(friends)
    })
  })
  }

  // Gets a users friend requests.
  viewFriendRequests() {
    this.chatService.getFriendRequests().subscribe(data => {
      this.chatService.changeState("friendRequest")
      this.chatService.changeFriendRequestUsers(data)
      this.notification = false;
    })
  }
}
