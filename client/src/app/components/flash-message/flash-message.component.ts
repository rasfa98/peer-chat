import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit {
  flashMessage: any

  constructor(private chatService: ChatService, private userService: UserService) {}

  ngOnInit() {
    this.chatService.flashMessage.subscribe(flashMessage => {
      this.flashMessage = flashMessage

      if (flashMessage.type === 'info' || flashMessage.type === 'error') {
        setTimeout(() => { this.chatService.changeFlashMessage({ type: null, message: null, color: null }) }, 5000)
      }
    })
  }

  // Loads specific resources again.
  retry() {
    if (this.flashMessage.dataType === 'current-user') {
      this.userService.getCurrentUser().subscribe(currentUser => {
        this.userService.changeCurrentUser(currentUser)
      })
    }

    if (this.flashMessage.dataType === 'friends') {
      this.chatService.getFriends().subscribe(friends => {
        this.chatService.changeFriends(friends)
      })
    }

    if (this.flashMessage.dataType === 'conversations') {
      this.chatService.getConversations().subscribe(conversations => {
        this.chatService.changeConversations(conversations)
      })
    }

    this.chatService.changeFlashMessage({ type: null, message: null, color: null, dataType: null })
  }
}
