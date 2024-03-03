import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

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
      console.log(res);
    });
  }
}
