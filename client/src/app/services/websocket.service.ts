import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable()
export class WebsocketService {
  BASE_URL: string = environment.BASE_URL

  socket: any

  constructor() {}

  connect() {
    this.socket = io.connect(this.BASE_URL)
  }
}
