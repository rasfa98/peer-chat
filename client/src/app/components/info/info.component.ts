import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  info: any

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    // Observables.
    this.chatService.currentInfo.subscribe(info => {
      this.info = info

      if (info.info === true) {
        setTimeout(() => {
          this.chatService.changeInfo({ info: false, message: null, type: null })
        }, 4000)
      }
    })
  }

}
