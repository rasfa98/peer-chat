import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { ChatService } from './chat.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  BASE_URL: string = environment.BASE_URL

  constructor(private http: Http, private chatService: ChatService) { }

  getCurrentUser() {
    return this.http.get(`${this.BASE_URL}/user/current`)
    .map(res => {
      const data = res.json()

      if (data.resStatus === 'error') {
        this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to load the current user, please refresh the page.', color: 'warning' })
        return { id: 0, fullName: 'Getting user...', status: 'offline', avatar: '../../assets/avatars/avatar-1.png' }
      } else { return data }
    })
  }

  getUsersByQuery(query) {
    return this.http.post(`${this.BASE_URL}/user/query`, { query: query })
    .map(res => {
      const data = res.json()

      if (data.resStatus === 'error') {
        this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to search for the requested user, please try again...', color: 'warning' })
        return []
      } else { return data.users }
    })
  }
}
