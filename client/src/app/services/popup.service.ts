import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PopupService {
  private AnswerCall = new BehaviorSubject(null)
  private HangUp = new BehaviorSubject(null)
  private CancelCall = new BehaviorSubject(null)

  answerCall = this.AnswerCall.asObservable()
  hangUp = this.HangUp.asObservable()
  cancelCall = this.CancelCall.asObservable()

  constructor() { }

  answerCallEvent(bool) {
    this.AnswerCall.next(bool)
  }

  hangUpEvent(bool) {
    this.HangUp.next(bool)
  }

  cancelCallEvent(bool) {
    this.CancelCall.next(bool)
  }
}
