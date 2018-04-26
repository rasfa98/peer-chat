import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PopupService {
  private answerCall = new BehaviorSubject(null)
  private hangUp = new BehaviorSubject(null)

  answerCallObs = this.answerCall.asObservable()
  hangUpObs = this.hangUp.asObservable()

  constructor() { }

  // Triggers answerCall() in feed-header component.
  answerCallEvent() {
    this.answerCall.next(true)
  }

  // Triggers hangUp() in feed-header component.
  hangUpEvent() {
    this.hangUp.next(true)
  }
}
