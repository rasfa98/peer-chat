import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService {
  private activeUserItem = new BehaviorSubject({ id: null, fullName: 'no user selected' })
  private stream = new BehaviorSubject(null)
  private peer = new BehaviorSubject(null)
  private activeConversation = new BehaviorSubject(null)

  currentActiveUserItem = this.activeUserItem.asObservable()
  currentStream = this.stream.asObservable()
  currentPeer = this.peer.asObservable()
  currentActiveConversation = this.activeConversation.asObservable()
  
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

}
