import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { AuthService } from 'src/app/service/auth.service';
import { NotifyService } from 'src/app/service/notify.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private productsService: ProductsService
  ) {}

  products?: Product[];

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }

  moreInfo(productId: number) {
    this.router.navigate([productId], { relativeTo: this.route });
  }

  logout() {
    this.authService.logOut();
  }
}
