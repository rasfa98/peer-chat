import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  ROOT_URL = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.http.get<User>(`${this.ROOT_URL}/user/current`)
  }
}
