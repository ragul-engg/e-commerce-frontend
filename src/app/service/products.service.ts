import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { SearchPrediction } from '../model/SearchPrediction';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

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
  sendImage(sysImage: string) {
    const arr = sysImage.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const ext = sysImage.split('/')[1].split(';')[0];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], `file.${ext}`);

    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<SearchPrediction[]>(
      `http://localhost:5000/upload-image`,
      formData
    );
  }

  searchCategory(category: string) {
    return this.http.get<Product[]>(`${this.baseURL}/api/product/category`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
      },
      params: {
        category,
      },
    });
  }

  addProduct(newProduct: Object):Observable<Product> {
    console.log(newProduct);

    return this.http.post<Product>(
      `${this.baseURL}/api/product/new`,
      newProduct,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        },
      }
    );
  }

  deleteProduct(id:number):Observable<Product>{
    console.log(id)
      return this.http.delete<Product>(`${this.baseURL}/api/product/${id}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        },
      })
  }
}
