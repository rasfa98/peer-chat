import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getCurrentUser() {
    return this.http.get('http://localhost:8000/user/current')
    .map(user => user.json())
  }

  savePeerId(userId, peerId) {
    return this.http.post('http://localhost:8000/user/savePeerId', { userId: userId, peerId: peerId })
    .map(res => res.json())
  }

}
