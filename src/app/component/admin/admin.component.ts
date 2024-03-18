import { Component } from '@angular/core';
import { AddProductComponent } from '../product/add-product/add-product.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private router:Router){}
  
}
