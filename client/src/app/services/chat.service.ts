import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService {
  private activeUserItem = new BehaviorSubject({ fullName: 'Messages' })

  currentActiveUserItem = this.activeUserItem.asObservable()
  
  constructor() { }

  changeActiveUserItem(user) {
    this.activeUserItem.next(user)
  }

}
