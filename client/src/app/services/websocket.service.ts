import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class WebsocketService {

  constructor() {}

  connect() {
    const socket = io.connect('https://rasmusfalk.se')
  }
}
