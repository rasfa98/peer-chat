import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  friends: any
  socket: any
  currentUser: any
  activeUserItem: any
  searchUsers: any
  friendRequestUsers: any
  state: any

  constructor(private websocketService: WebsocketService, private userService: UserService, private chatService: ChatService) {}

  ngOnInit() {
    this.socket = this.websocketService.socket

    // Observables.
    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
    this.chatService.currentSearchUsers.subscribe(searchUsers => this.searchUsers = searchUsers)
    this.chatService.currentState.subscribe(state => this.state = state)
    this.chatService.currentFriendRequestUsers.subscribe(friendRequestUsers => this.friendRequestUsers = friendRequestUsers)
    this.chatService.currentFriends.subscribe(friends => this.friends = friends)
    this.chatService.getFriends().subscribe(friends => this.friends = friends.filter(x => x.status === 'online'))

    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user
      this.socket.emit('newUser', user)
    })
  }

  // Changes the selected friend in the friend list.
  changeItem(user) {
    this.chatService.changeActiveUserItem(user)
    this.chatService.changeActiveConversation(user.id)
  }

  // Sends a friend request to a specific user.
  addUser(id) {
    this.socket.emit('addUser', id)
    this.chatService.changeState("friendList")
  }

  // Accepts a friend request.
  acceptUser(email) {
    this.socket.emit('acceptRequest', email)
    this.chatService.changeState("friendList")
  }

  // Declines a friend request.
  declineRequest(email) {
    this.socket.emit('declineRequest', email)
    this.chatService.changeState("friendList")
  }
}
