import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/model/cart';
import { UserService } from '../user/user.service';
import { CartResponse } from 'src/app/model/CartResponse';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient: HttpClient) {}
  baseURL = `http://localhost:8080`;

  getCartData(customerId: number) {
    // get the customer's cart with customer id.
    return this.httpClient.get<Cart>(`${this.baseURL}/api/cart/${customerId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
      },
    });
  }

  addToCart(productId: number, cartId: number) {
    return this.httpClient.post<Cart>(`${this.baseURL}/api/cart/item`, {productId:productId,cartId:cartId},{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
      },
    });
  }

  removeCartItem(cartItemId:number){
    return this.httpClient.delete(`${this.baseURL}/api/cart/cartItem/${cartItemId}`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
      },
      responseType:'text'
    })
  }
}
