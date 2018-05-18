import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { WebsocketService } from '../../services/websocket.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
  BASE_URL: string = environment.BASE_URL

  currentUser: any
  socket: any

  constructor(private userService: UserService, private websocketService: WebsocketService) {
    this.currentUser = { id: 0, fullName: 'Getting user...', status: 'offline', avatar: '../../assets/avatars/avatar-1.png' }
  }

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user
      this.socket.emit('newUser', user)
    })

    this.socket.on('updateCurrentUserStatus', status => {
      this.currentUser.status = status
    })
  }

  changeStatus(status) {
    if (status === 'signout') {
      window.location.href = `${this.BASE_URL}/signout`
    } else {
      this.socket.emit('updateStatus', status)
    }
  }
}
