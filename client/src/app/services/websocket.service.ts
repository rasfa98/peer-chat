import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class WebsocketService {
  socket: any

  constructor() {}

  connect() {
    this.socket = io.connect('http://localhost:8000')
  }
}
