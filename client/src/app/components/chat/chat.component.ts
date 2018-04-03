import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  connectedUsers: string[]

  constructor(
    private websocketService: WebsocketService,
    private databaseService: DatabaseService) {}

  ngOnInit() {
    this.websocketService.connect()
  }

}
