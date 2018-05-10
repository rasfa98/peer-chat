import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service'
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  @ViewChild('message') input: any

  socket: any
  activeUserItem: any
  showEmojis: boolean
  emojis: any

  constructor(private websocketService: WebsocketService, private chatService: ChatService) {
    this.showEmojis = false

    this.emojis = [
      { code: '&#x1F642', text: ':smile:' }, { code: '&#x1F600', text: ':happy:' }, { code: '&#x1F60E', text: ':cool:' },
      { code: '&#x1F62E', text: ':surprised:' }, { code: '&#x1F61B', text: ':cheeky:' }, { code: '&#x1F918', text: ':horns:' },
      { code: '&#x1F914', text: ':thinking:' }, { code: '&#x1F60A', text: ':blush:' }, { code: '&#x1F602', text: ':joy:' },
      { code: '&#x1F610', text: ':neutral:' }, { code: '&#x1F631', text: ':scream:' }, { code: '&#x1F621', text: ':rage:' },
      { code: '&#x1F634', text: ':sleeping:' }, { code: '&#x1F607', text: ':halo:' }, { code: '&#x1F440', text: ':eyes:' },
      { code: '&#x1F912', text: ':sick:' }, { code: '&#x1F643', text: ':silly:' }, { code: '&#x1F615', text: ':confused:' },
      { code: '&#x1F62C', text: ':grimacing:' }, { code: '&#x1F611', text: ':expressionless:' }, { code: '&#x1F910', text: ':zipper:' },
      { code: '&#x1F629', text: ':weary:' }, { code: '&#x1F633', text: ':flushed:' }, { code: '&#x1F44D', text: ':+1:' }
    ]
  }

  ngOnInit() {
    this.socket = this.websocketService.socket

    // Observables.
    this.chatService.currentActiveUserItem.subscribe(activeUserItem => this.activeUserItem = activeUserItem)
  }

  // Sends a message to user with matching id.
  sendMessage(message, id) {
    this.socket.emit('sendMessage', { message: message, id: id })
    this.input.nativeElement.value = ""
  }

  getEmojis() {
    this.showEmojis = !this.showEmojis
  }

  addEmoji(index) {
    console.log(index)
  }
}
