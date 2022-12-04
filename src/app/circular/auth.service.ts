import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponentCircular } from './login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(): Promise<any> {
    return new Promise((resolve) => {
      localStorage.setItem('loggedIn', 'true');
      resolve(true);
    });
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedIn');
  }
}
