import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { SearchPrediction } from 'src/app/model/SearchPrediction';
import { AuthService } from 'src/app/service/auth.service';
import { ProductsService } from 'src/app/service/products.service';

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
    private productsService: ProductsService
  ) {
      console.log("am inside category!")
    if (this.authService != null) console.log('Auth service not null');
    console.log(this.authService.isAdmin);
  }
  products?: Product[];

  categories?: SearchPrediction[];

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
  }

  

  moreInfo(productId: number) {
    this.router.navigate([productId], { relativeTo: this.route });
  }

  logout() {
    this.authService.logOut();
  }
}
