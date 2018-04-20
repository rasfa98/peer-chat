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
  onlineUsers: any
  socket: any
  currentUser: any
  activeUserItem: any
  search: any
  searchUsers: any

  constructor(private websocketService: WebsocketService, private userService: UserService, private chatService: ChatService) {
    this.onlineUsers = [{
      fullName: 'Kalle'
    }]
  }

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
    this.chatService.currentSearchUsers.subscribe(searchUsers => this.searchUsers = searchUsers.users)
    this.chatService.currentSearch.subscribe(search => this.search = search)

    this.userService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user
      this.socket.emit('newUser', user)
    })

    this.socket.on('updateOnlineUsers', onlineUsers => {
      this.onlineUsers = onlineUsers
      
      for (let i = 0; i < this.onlineUsers.length; i++) {
        if (this.onlineUsers[i].id === this.currentUser.id) {
          this.onlineUsers.splice(i, 1)
        }
      }
    })
  }

  changeItem(user) {
    this.chatService.changeActiveUserItem(user)
    this.chatService.changeActiveConversation(user.id)
  }

}
