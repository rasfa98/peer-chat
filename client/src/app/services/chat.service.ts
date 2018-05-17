import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ChatService {
  private ActiveUserItem = new BehaviorSubject({ id: null, fullName: 'no user selected' })
  private Stream = new BehaviorSubject(null)
  private Peer = new BehaviorSubject(null)
  private ActiveConversation = new BehaviorSubject(null)
  private SearchUsers = new BehaviorSubject(null)
  private FriendRequestUsers = new BehaviorSubject(null)
  private Friends = new BehaviorSubject([])
  private State = new BehaviorSubject('friendList')
  private Calling = new BehaviorSubject(false)
  private CallInformation = new BehaviorSubject(null)
  private Dialing = new BehaviorSubject(false)
  private DialInformation = new BehaviorSubject(null)
  private FlashMessage = new BehaviorSubject({ type: null, message: null, color: null })
  private LocalStream = new BehaviorSubject(null)

  activeUserItem = this.ActiveUserItem.asObservable()
  stream = this.Stream.asObservable()
  peer = this.Peer.asObservable()
  activeConversation = this.ActiveConversation.asObservable()
  searchUsers = this.SearchUsers.asObservable()
  state = this.State.asObservable()
  friendRequestUsers = this.FriendRequestUsers.asObservable()
  friends = this.Friends.asObservable()
  calling = this.Calling.asObservable()
  dialing = this.Dialing.asObservable()
  callInformation = this.CallInformation.asObservable()
  dialInformation = this.DialInformation.asObservable()
  flashMessage = this.FlashMessage.asObservable()
  localStream = this.LocalStream.asObservable()

  BASE_URL: string = environment.BASE_URL
  
  constructor(private http: Http) { }

  // Changes values that's shared between components.
  changeActiveUserItem(user) {
    this.ActiveUserItem.next(user)
  }

  changeStream(stream) {
    this.Stream.next(stream)
  }

  changeLocalStream(stream) {
    this.LocalStream.next(stream)
  }

  changeActiveConversation(conversation) {
    this.ActiveConversation.next(conversation)
  }

  changePeer(peer) {
    this.Peer.next(peer)
  }

  changeSearchUsers(searchUsers) {
    this.SearchUsers.next(searchUsers)
  }

  changeState(state) {
    this.State.next(state)
  }

  changeFriendRequestUsers(friendRequestUsers) {
    this.FriendRequestUsers.next(friendRequestUsers)
  }

  changeFriends(friends) {
    this.Friends.next(friends)
  }

  changeCalling(calling) {
    this.Calling.next(calling)
  }

  changeDialing(dialing) {
    this.Dialing.next(dialing)
  }

  changeCallInformation(callInformation) {
    this.CallInformation.next(callInformation)
  }

  changeDialInformation(dialInformation) {
    this.DialInformation.next(dialInformation)
  }

  changeFlashMessage(flashMessage) {
    this.FlashMessage.next(flashMessage)
  }

  getFriendRequests() {
    return this.http.get(`${this.BASE_URL}/user/friendRequests`)
    .map(res => res.json().requests)
  }

  getFriends() {
    return this.http.get(`${this.BASE_URL}/user/friends`)
    .map(res => res.json().friends)
  }

  getConversations() {
    return this.http.get(`${this.BASE_URL}/user/conversations`)
    .map(res => res.json().conversations)
  }
}
