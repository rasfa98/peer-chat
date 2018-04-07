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
}
