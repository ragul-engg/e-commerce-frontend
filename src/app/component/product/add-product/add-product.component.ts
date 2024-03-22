import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { NotifyService } from 'src/app/service/notify.service';
import { Product } from 'src/app/model/Product';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/service/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class AddProductComponent {
  isAddProduct: boolean = true;
  constructor(
    private authService: AuthService,
    private router: Router,
    private notify: NotifyService,
    private productService: ProductsService
  ) {}
  newProduct: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
    colour: new FormControl(''),
    quantity: new FormControl(0),
    category: new FormControl(''),
  });

  handleAddProduct(form: FormGroup): void {
    console.log(form.value);
    this.productService.addProduct(form.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.notify.showSuccess("Product Added Successfully","Info😺")
        this.newProduct.reset()
      },
      error:(err)=>{
        this.notify.showError("Can't add Product","Info😿")
        console.log(err.message);
      }
    })
  }
}
