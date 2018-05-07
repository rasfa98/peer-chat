import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
  currentUser: any
  socket: any

  constructor(private userService: UserService, private websocketService: WebsocketService) {
    this.currentUser = { status: 'online', fullName: 'Rasmus Falk', avatar: '../../assets/avatars/avatar-3.png' }
  }

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.userService.getCurrentUser().subscribe(user => {
      // this.currentUser = user
      // this.socket.emit('newUser', user)
    })

    this.socket.on('updateCurrentUserStatus', status => {
      this.currentUser.status = status
    })
  }
}
