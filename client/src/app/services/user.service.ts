import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  BASE_URL: string = environment.BASE_URL

  constructor(private http: Http) { }

  getCurrentUser() {
    return this.http.get(`${this.BASE_URL}/user/current`)
    .map(res => res.json())
  }

  getUsersByQuery(query) {
    return this.http.post(`${this.BASE_URL}/user/query`, { query: query })
    .map(res => res.json())
  }

  acceptAudio() {
    return this.http.get(`${this.BASE_URL}/user/audio`)
    .map(res => res.json())
  }
}
