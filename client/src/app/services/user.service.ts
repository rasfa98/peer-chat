import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  // Gets the current user.
  getCurrentUser() {
    return this.http.get('https://rasmusfalk.se/user/current')
    .map(res => res.json())
  }

  // Gets the users with the matching query value.
  getUsersByQuery(query) {
    return this.http.post('https://rasmusfalk.se/user/query', { query: query })
    .map(res => res.json())
  }
}
