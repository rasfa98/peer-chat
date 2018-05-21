import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('query') input: any

  constructor(private userService: UserService, private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.state.subscribe(state => { if (state !== 'search') { this.input.nativeElement.value = '' } })
  }

  search(query) {
    if (query !== "") {
      this.userService.getUsersByQuery(query).subscribe(users => {
        this.chatService.changeState("search")
        this.chatService.changeSearchUsers(users)
      })
    } else { this.chatService.changeState('friendList') }
  }
}
