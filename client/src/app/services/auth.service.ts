import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  authenticateGoogle() {
    const header = new Headers()
    header.append('Access-Control-Allow-Origin', '*')
    return this.http.get('/auth/google', { headers: header })
      .map(res => res.json)
  }
}
