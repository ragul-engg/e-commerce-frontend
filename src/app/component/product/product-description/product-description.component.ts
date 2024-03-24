import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { Profile } from 'src/app/model/Profile';
import { CartService } from 'src/app/service/cart/cart.service';
import { NotifyService } from 'src/app/service/notify.service';
import { ProductsService } from 'src/app/service/products.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
})
export class ProductDescriptionComponent implements OnInit {
  product?: Product;
  userProfile?:Profile;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService:CartService,
    private notify:NotifyService,
    private userService:UserService
  ) {
    console.log("im on description page");
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.productsService
        .getProduct(parseInt(res.get('productId')!))
        .subscribe((res) => {
          this.product = res;
        });
    });

    this.userService.getUserProfile().subscribe({
      next:(res)=>{
        this.userProfile=res;
      },
      error:(err)=>{
        this.notify.showError('Cannot Load User Data', 'E-Commerce');
      }
    })
  }

  handleAddToCart(productId:number|undefined){
    this.cartService.addToCart(productId ?? 0, this.userProfile?.cartId ?? 0).subscribe({
      next:(res)=>{
        this.notify.showSuccess("Product added to Cart Successfully!","E-Commerce")
      },
      error:(err)=>{
        console.log(err);
        this.notify.showError("Error Adding Item to Cart","E-Commerce")
      }
    })
  }

 


}
