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
  activeUserItem: any
  searchUsers: object[]
  friendRequestUsers: object[]
  state: string

  constructor(private websocketService: WebsocketService, private userService: UserService, private chatService: ChatService) {
  }

  ngOnInit() {
    this.socket = this.websocketService.socket

    // Observables.
    this.chatService.activeUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
    this.chatService.searchUsers.subscribe(searchUsers => this.searchUsers = searchUsers)
    this.chatService.state.subscribe(state => this.state = state)
    this.chatService.friendRequestUsers.subscribe(friendRequestUsers => this.friendRequestUsers = friendRequestUsers)
    this.chatService.friends.subscribe(friends => this.friends = friends)
    this.chatService.getFriends().subscribe(friends => {
      this.friends = friends
      this.chatService.changeFriends(friends)
    })

    this.socket.on('updateFriendStatus', friend => {
      for (let i = 0; i < this.friends.length; i++) {
        if (this.friends[i].id === friend.id) {
          this.friends[i].status = friend.status
        }
      }
    })

    this.socket.on('updateFriends', friends => {
      this.chatService.changeFriends(friends)
      this.chatService.changeActiveUserItem({ id: null, fullName: 'no user selected' });
      this.chatService.changeActiveConversation(null)
    })

    this.socket.on('messageNotification', id => {
      const friend = this.friends.filter(x => x.id === id)[0]

      if (this.activeUserItem.id !== id) {
        friend.notification = true
      }
    })
  }

  // Changes the selected friend in the friend list.
  changeItem(user) {
    this.chatService.changeActiveUserItem(user)
    this.chatService.changeActiveConversation(user.id)

    if (this.activeUserItem.notification) { this.activeUserItem.notification = false }
  }

  // Sends a friend request to a specific user.
  addUser(id) {
    this.socket.emit('newRequest', id)
    this.chatService.changeState("friendList")
    this.chatService.changeFlashMessage({ type: 'info', message: 'Friend request has been sent.', color: 'success' })
  }

  // Accepts a friend request.
  acceptRequest(id) {
    this.socket.emit('acceptRequest', id)
    this.chatService.changeState("friendList")
    this.chatService.changeFlashMessage({ type: 'info', message: 'User has been added to your friend list!', color: 'success' })
  }

  // Declines a friend request.
  declineRequest(id) {
    this.socket.emit('declineRequest', id)
    this.chatService.changeState("friendList")
    this.chatService.changeFlashMessage({ type: 'info', message: 'Friend request has been declined...', color: 'danger' })
  }

  back() {
    this.chatService.changeState('friendList')
  }
}
