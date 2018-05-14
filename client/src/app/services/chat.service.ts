import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ChatService {
  private activeUserItem = new BehaviorSubject({ id: null, fullName: 'no user selected' })
  private stream = new BehaviorSubject(null)
  private peer = new BehaviorSubject(null)
  private activeConversation = new BehaviorSubject(null)
  private searchUsers = new BehaviorSubject(null)
  private friendRequestUsers = new BehaviorSubject(null)
  private friends = new BehaviorSubject([])
  private state = new BehaviorSubject('friendList')
  private calling = new BehaviorSubject(false)
  private callInformation = new BehaviorSubject(null)
  private dialing = new BehaviorSubject(false)
  private dialInformation = new BehaviorSubject(null)
  private error = new BehaviorSubject({ error: false, message: null })
  private localStream = new BehaviorSubject(null)

  currentActiveUserItem = this.activeUserItem.asObservable()
  currentStream = this.stream.asObservable()
  currentPeer = this.peer.asObservable()
  currentActiveConversation = this.activeConversation.asObservable()
  currentSearchUsers = this.searchUsers.asObservable()
  currentState = this.state.asObservable()
  currentFriendRequestUsers = this.friendRequestUsers.asObservable()
  currentFriends = this.friends.asObservable()
  currentCalling = this.calling.asObservable()
  currentDialing = this.dialing.asObservable()
  currentCallInformation = this.callInformation.asObservable()
  currentDialInformation = this.dialInformation.asObservable()
  currentError = this.error.asObservable()
  currentLocalStream = this.localStream.asObservable()

  BASE_URL: string = environment.BASE_URL
  
  constructor(private http: Http) { }

  // Changes values that's shared between components.
  changeActiveUserItem(user) {
    this.activeUserItem.next(user)
  }

  changeStream(stream) {
    this.stream.next(stream)
  }

  changeLocalStream(stream) {
    this.localStream.next(stream)
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

  changeFriends(friends) {
    this.friends.next(friends)
  }

  changeCalling(calling) {
    this.calling.next(calling)
  }

  changeDialing(dialing) {
    this.dialing.next(dialing)
  }

  changeCallInformation(callInformation) {
    this.callInformation.next(callInformation)
  }

  changeDialInformation(dialInformation) {
    this.dialInformation.next(dialInformation)
  }

  changeError(error) {
    this.error.next(error)
  }

  // Gets the current users friend requests.
  getFriendRequests() {
    return this.http.get(`${this.BASE_URL}/user/friendRequests`)
    .map(res => res.json().requests)
  }

  // Gets the current users friends.
  getFriends() {
    return this.http.get(`${this.BASE_URL}/user/friends`)
    .map(res => res.json().friends)
  }

  getConversations() {
    return this.http.get(`${this.BASE_URL}/user/conversations`)
    .map(res => res.json().conversations)
  }
}
