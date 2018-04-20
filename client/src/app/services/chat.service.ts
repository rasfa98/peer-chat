import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService {
  private activeUserItem = new BehaviorSubject({ id: null, fullName: 'no user selected' })
  private stream = new BehaviorSubject(null)
  private peer = new BehaviorSubject(null)
  private activeConversation = new BehaviorSubject(null)
  private searchUsers = new BehaviorSubject({ users: null })
  private search = new BehaviorSubject(false)
  private friendRequest = new BehaviorSubject(false)
  private friendRequestUsers = new BehaviorSubject(false)

  currentActiveUserItem = this.activeUserItem.asObservable()
  currentStream = this.stream.asObservable()
  currentPeer = this.peer.asObservable()
  currentActiveConversation = this.activeConversation.asObservable()
  currentSearchUsers = this.searchUsers.asObservable()
  currentSearch = this.search.asObservable()
  currentFriendRequest = this.friendRequest.asObservable()
  currentFriendRequestUsers = this.friendRequestUsers.asObservable()
  
  constructor() { }

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

  changeSearch(search) {
    this.search.next(search)
  }

  changeFriendRequest(friendRequest) {
    this.friendRequest.next(friendRequest)
  }

  changeFriendRequestUsers(friendRequestUsers) {
    this.friendRequestUsers.next(friendRequestUsers)
  }
}
