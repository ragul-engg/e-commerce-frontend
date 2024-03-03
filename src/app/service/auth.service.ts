import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JWT } from '../model/JWT';
import { Login } from '../model/Login';
import { User } from '../model/User';
import { catchError, throwError } from 'rxjs';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private notify: NotifyService) {}

  baseURL = `http://localhost:8080`;

  loginUser(form: Login) {
    return this.httpClient
      .post<JWT>(`${this.baseURL}/login`, form)
      .pipe(catchError(this.handleAuthError));
  }

  registerUser(form: User) {
    return this.httpClient
      .post<JWT>(`${this.baseURL}/register`, form)
      .pipe(catchError(this.handleAuthError));
  }

  handleAuthError(error: HttpErrorResponse) {
    return throwError(() => new Error('An error in your username or password'));
  }
  // this.notify.showError('Error in your username or password', 'E-Commerce');

  isLoggedIn() {
    return this.httpClient.get<boolean>(`${this.baseURL}/validate`, {
      params: {
        token: localStorage.getItem('TOKEN') || '',
      },
    });
  }
}
