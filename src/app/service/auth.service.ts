import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { JWT } from '../model/JWT';
import { Login } from '../model/Login';
import { User } from '../model/User';
import { catchError, throwError } from 'rxjs';
import { NotifyService } from './notify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private notify: NotifyService,
    private router: Router
  ) {
    console.log('Auth constructor !');
    this.isLoggedIn().subscribe((res) => {
      this.isAuthenticated = res.valid;
    });
  }

  baseURL = `http://localhost:8080`;

  isAuthenticated?: boolean;
  isAdmin?: boolean;

  ngOnInit(): void {}

  loginUser(form: Login) {
    return this.httpClient
      .post<JWT>(`${this.baseURL}/login`, form)
      .pipe(catchError(this.handleAuthError));
  }

  registerUser(form: User) {
    console.log(form);

    return this.httpClient.post(`${this.baseURL}/register`, form, {
      responseType: 'text',
    });
    //.pipe(catchError(this.handleAuthError));
  }

  handleAuthError(error: HttpErrorResponse) {
    return throwError(() => new Error('An error in your username or password'));
  }
  // this.notify.showError('Error in your username or password', 'E-Commerce');

  isLoggedIn() {
    return this.httpClient.get<JWT>(`${this.baseURL}/validate`, {
      params: {
        token: localStorage.getItem('TOKEN') || '',
      },
    });
  }

  logOut() {
    this.notify.showSuccess('Logged out', 'E-Commerce');
    localStorage.removeItem('TOKEN');
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.router.navigate(['home']);
  }
}
