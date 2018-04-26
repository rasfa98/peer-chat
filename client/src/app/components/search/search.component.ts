import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private userService: UserService, private chatService: ChatService) { }

  ngOnInit() {}

  // Find the users by using the given query.
  search(query, e) {
    this.userService.getUsersByQuery(query).subscribe(users => {
      this.chatService.changeState("search")
      this.chatService.changeSearchUsers(users)
    })
  }
}
