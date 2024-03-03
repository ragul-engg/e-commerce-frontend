import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/service/notify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private router: Router, private notify: NotifyService) {}
  logout() {
    this.notify.showSuccess('Logged out', 'E-Commerce');
    localStorage.removeItem('TOKEN');
    this.router.navigate(['home']);
  }
}
