import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PopupService {
  private answerCall = new BehaviorSubject(null)
  private hangUp = new BehaviorSubject(null)
  private cancelCall = new BehaviorSubject(null)

  answerCallObs = this.answerCall.asObservable()
  hangUpObs = this.hangUp.asObservable()
  cancelCallObs = this.cancelCall.asObservable()

  constructor() { }

  // Triggers answerCall() in feed-header component.
  answerCallEvent(bool) {
    this.answerCall.next(bool)
  }

  // Triggers hangUp() in feed-header component.
  hangUpEvent(bool) {
    this.hangUp.next(bool)
  }

  // Triggers cancleCall() in feed-header component.
  cancelCallEvent(bool) {
    this.cancelCall.next(bool)
  }
}
