import { Component } from '@angular/core';
import { AddProductComponent } from '../product/add-product/add-product.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor( private router: Router) { }
  activeProduct: string = '';
  toggleProduct(value: string) {
    this.activeProduct=value
    console.log(this.activeProduct);
    switch(value)
    {
      case 'new':
        this.router.navigateByUrl(`admin/product/new`)
        break
      case 'delete':
        this.router.navigateByUrl(`admin/product/delete`)
        break
      case 'update':
        this.router.navigateByUrl(`admin/product/update`)
    }
    
  }


}
