import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  toggleError() {
    this.chatService.changeError(false)
  }

}
