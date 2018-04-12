import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service'

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  socket: any

  constructor(private websocketService: WebsocketService) { }

  ngOnInit() {
    this.socket = this.websocketService.connect()
  }

}
