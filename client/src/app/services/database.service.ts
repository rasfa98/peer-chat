import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseService {

  constructor(public http:Http) {
  }

  saveAnimal(animal) {
    const headers = new Headers()
    headers.append('ContentType', 'application/json')
    return this.http.post('http://localhost:8000/animal', animal, { headers: headers })
      .map(res => res.json())
  }

  getAnimals() {
    const headers = new Headers()
    headers.append('ContentType', 'application/json')
    return this.http.get('http://localhost:8000/animal', { headers: headers })
      .map(res => res.json())
  }
}
