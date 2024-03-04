import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['products']);
    }
  }

  loginUser(form: FormGroup) {
    this.authService.loginUser(form.value).subscribe((res) => {
      localStorage.setItem('TOKEN', res.token);
      this.authService.isAuthenticated = true;
      this.router.navigate(['products']);
    });
  }
}
