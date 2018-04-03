import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseService {

  constructor(private http: Http) { }

  getCurrentUser() {
    return this.http.get('http://localhost:8000/auth/user').map(data => data.json())
  }

}
