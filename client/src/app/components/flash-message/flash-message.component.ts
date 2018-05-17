import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit {
  flashMessage: any

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.flashMessage.subscribe(flashMessage => {
      this.flashMessage = flashMessage

      if (flashMessage.type !== null) {
        setTimeout(() => {
          this.chatService.changeFlashMessage({ type: null, message: null })
        }, 4000)
      }
    })
  }

}
