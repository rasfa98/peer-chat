import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private onlineUsersSource = new BehaviorSubject(null)

  currentOnlineUsers = this.onlineUsersSource.asObservable()

  constructor(private http: Http) { }

  changeOnlineUsers(onlineUsers) {
    this.onlineUsersSource.next(onlineUsers)
  }

  getCurrentUser() {
    return this.http.get('https://rasmusfalk.se/user/current')
    .map(res => res.json())
  }
}
