import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PopupService {
  private answerCall = new BehaviorSubject(null)
  private hangUp = new BehaviorSubject(null)

  answerCallObs = this.answerCall.asObservable()
  hangUpObs = this.hangUp.asObservable()

  constructor() { }

  answerCallEvent() {
    this.answerCall.next(true)
  }

  hangUpEvent() {
    this.hangUp.next(true)
  }

}
