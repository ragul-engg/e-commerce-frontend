import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { Profile } from 'src/app/model/Profile';
import { SearchPrediction } from 'src/app/model/SearchPrediction';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart/cart.service';
import { NotifyService } from 'src/app/service/notify.service';
import { ProductsService } from 'src/app/service/products.service';
import { UserService } from 'src/app/service/user/user.service';
import { ProductDescriptionComponent } from '../product-description/product-description.component';


@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private productsService: ProductsService,
    private userService:UserService,
    private notify:NotifyService,
    private cartService:CartService
  ) {
    
      console.log("am inside category!")
    if (this.authService != null) console.log('Auth service not null');
    window.onpopstate=()=>{
      this.isProductDescription=!this.isProductDescription;
    }
    
  }
  products?: Product[];
  isProductDescription:boolean=false;
  categories?: SearchPrediction[];
  userProfile?:Profile;
  

  ngOnInit() {
    this.route.queryParams.subscribe((res) => {
      if (res && res['category']) {
        this.productsService
          .searchCategory(res['category'])
          .subscribe((res) => {
            this.products = res;
          });
      } else {
        this.productsService.getAllProducts().subscribe((res) => {
          this.products = res;
        });
      }
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
  handleAddToCart(productId:number){
    this.cartService.addToCart(productId, this.userProfile?.cartId ?? 0).subscribe({
      next:(res)=>{
        this.notify.showSuccess("Product added to Cart Successfully!","E-Commerce")
      },
      error:(err)=>{
        console.log(err);
        this.notify.showError("Error Adding Item to Cart","E-Commerce")
      }
    })
  }

  

  moreInfo(productId: number) {
    this.router.navigate([productId], { relativeTo: this.route });
    this.isProductDescription=true;
    console.log("im here");
    
  }

  logout() {
    this.authService.logOut();
  }
}
