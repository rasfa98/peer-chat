import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { WebsocketService } from '../../services/websocket.service';
import { environment } from '../../../environments/environment';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
  BASE_URL: string = environment.BASE_URL

  currentUser: any
  socket: any
  allowAudio: boolean

  constructor
    (private userService: UserService,
      private websocketService: WebsocketService,
      private chatService: ChatService) {}

  ngOnInit() {
    this.socket = this.websocketService.socket

    this.chatService.audio.subscribe(audio => this.allowAudio = audio)
    this.userService.currentUser.subscribe(currentUser => this.currentUser = currentUser)

    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user
      this.socket.emit('newUser', user)
    })

    this.socket.on('updateCurrentUserStatus', status => this.currentUser.status = status)
  }

  changeStatus(status) {
    if (status === 'signout') {
      window.location.href = `${this.BASE_URL}/signout`
    } else {
      this.socket.emit('updateStatus', status)
    }
  }

  toggleAudio() {
    this.chatService.changeAudio(!this.allowAudio)
  }
}
