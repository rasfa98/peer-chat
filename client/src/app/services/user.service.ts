import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getCurrentUser() {
    return this.http.get('https://rasmusfalk.se/user/current')
    .map(user => user.json())
  }
}