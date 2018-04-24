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
  private searchUsers = new BehaviorSubject(null)
  private friendRequestUsers = new BehaviorSubject(null)
  private friends = new BehaviorSubject(null)
  private state = new BehaviorSubject('friendList')
  private calling = new BehaviorSubject(false)

  currentActiveUserItem = this.activeUserItem.asObservable()
  currentStream = this.stream.asObservable()
  currentPeer = this.peer.asObservable()
  currentActiveConversation = this.activeConversation.asObservable()
  currentSearchUsers = this.searchUsers.asObservable()
  currentState = this.state.asObservable()
  currentFriendRequestUsers = this.friendRequestUsers.asObservable()
  currentFriends = this.friends.asObservable()
  currentCalling = this.calling.asObservable()
  
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

  changeFriends(friends) {
    this.friends.next(friends)
  }

  changeCalling(calling) {
    this.calling.next(calling)
  }

  getFriends() {
    return this.http.get('http://localhost:8000/user/friends')
    .map(res => res.json().friends)
  }
}
