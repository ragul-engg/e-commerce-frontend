import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  baseURL = `http://localhost:8080`;

  getAllProducts() {
    return this.http.get<Product[]>(`${this.baseURL}/api/product/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
      },
    });
  }

  getProduct(productId: number) {
    return this.http.get<Product>(`${this.baseURL}/api/product/${productId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
      },
    });
  }
}
