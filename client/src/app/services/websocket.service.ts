import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable()
export class WebsocketService {
  socket: any
  BASE_URL: string = environment.BASE_URL

  constructor() {}

  connect() {
    this.socket = io.connect(this.BASE_URL)
  }
}
