import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Cart } from 'src/app/model/cart';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart/cart.service';
import { of } from 'rxjs';
import { UserService } from 'src/app/service/user/user.service';
import { NotifyService } from 'src/app/service/notify.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private router: Router,
    private authservice: AuthService,
    private cartService: CartService,
    private userService: UserService,
    private notify: NotifyService
  ) {}
  // cart data holder
  cartData?: Cart;
  customerId: number = 0;
  ngOnInit(): void {
    const data = new Subject<Cart>();
    this.userService.getUserProfile().subscribe({
      next: (res) => {
        this.customerId = res.customerId;
        this.cartService.getCartData(this.customerId).subscribe({
          next: (res) => {
            console.log(res);

            this.cartData = res;
            data.next(this.cartData);
            data.complete;
          },
          error: (err) => {
            data.next(err);
            data.complete;
            this.notify.showError('Cannot get Cart', 'E-Commerce');
          },
        });
      },
      error: (err) => {
        this.notify.showError('Cannot Load Customer Profile', 'E-Commerce');
      },
    });
  }
}
