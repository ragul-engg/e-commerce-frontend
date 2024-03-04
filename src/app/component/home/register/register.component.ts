import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NotifyService } from 'src/app/service/notify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notify: NotifyService
  ) {}

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobileNo: new FormControl(null),
    password: new FormControl(''),
    role: new FormControl('USER'),
    username: new FormControl(''),
  });

  registerUser(form: FormGroup) {
    this.authService.registerUser(form.value).subscribe((res) => {
      this.router.navigateByUrl('/home/login');
      this.notify.showSuccess(
        'Registration successful, login to continue',
        'E-Commerce'
      );
    });
  }
}
