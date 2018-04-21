import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {
  private activeUserItem = new BehaviorSubject({ id: null, fullName: 'no user selected' })
  private stream = new BehaviorSubject(null)
  private peer = new BehaviorSubject(null)
  private activeConversation = new BehaviorSubject(null)
  private searchUsers = new BehaviorSubject({ users: null })
  private friendRequestUsers = new BehaviorSubject({ requests: null })
  private state = new BehaviorSubject('friendList')

  currentActiveUserItem = this.activeUserItem.asObservable()
  currentStream = this.stream.asObservable()
  currentPeer = this.peer.asObservable()
  currentActiveConversation = this.activeConversation.asObservable()
  currentSearchUsers = this.searchUsers.asObservable()
  currentState = this.state.asObservable()
  currentFriendRequestUsers = this.friendRequestUsers.asObservable()
  
  constructor(private http: Http) { }

  changeActiveUserItem(user) {
    this.activeUserItem.next(user)
  }

  changeStream(stream) {
    this.stream.next(stream)
  }

  changeActiveConversation(conversation) {
    this.activeConversation.next(conversation)
  }

  changePeer(peer) {
    this.peer.next(peer)
  }

  changeSearchUsers(searchUsers) {
    this.searchUsers.next(searchUsers)
  }

  changeState(state) {
    this.state.next(state)
  }

  changeFriendRequestUsers(friendRequestUsers) {
    this.friendRequestUsers.next(friendRequestUsers)
  }

  getFriendRequests() {
    return this.http.get('http://localhost:8000/user/friendRequests')
    .map(res => res.json().requests)
  }
}
