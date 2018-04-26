import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  // Gets the current user.
  getCurrentUser() {
    return this.http.get('http://localhost:8000/user/current')
    .map(res => res.json())
  }

  // Gets the users with the matching query value.
  getUsersByQuery(query) {
    return this.http.post('http://localhost:8000/user/query', { query: query })
    .map(res => res.json().users)
  }
}
