import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { APP_SETTINGS } from './app.settings';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accesstoken = signal('');
  private authUrl = inject(APP_SETTINGS).apiUrl + '/auth';
  isLoggedIn = computed(() => this.accesstoken() !== '');

  constructor(private http: HttpClient){}

  login(username: string, password: string) : Observable<string>{
    return this.http.post<string>(this.authUrl + '/login', {
      username, password
    }).pipe(tap(token => this.accesstoken.set(token)));
  }

  logout(){
    this.accesstoken.set('');
  }
}
