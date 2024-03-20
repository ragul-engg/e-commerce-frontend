import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject, every } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { SearchPrediction } from 'src/app/model/SearchPrediction';
import { AuthService } from 'src/app/service/auth.service';
import { NotifyService } from 'src/app/service/notify.service';
import { ProductsService } from 'src/app/service/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  categories?: SearchPrediction[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private productsService: ProductsService
  ) {}

  products?: Product[];

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
  private trigger: Subject<any> = new Subject();

  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();

  sysImage = '';

  public getSnapshot(event: any): void {
    event.preventDefault();
    this.trigger.next(void 0);
  }
  isCameraHidden = false;

  toggle($event: any) {
    event?.preventDefault();
    this.isCameraHidden = !this.isCameraHidden;
  }

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;

    this.productsService.sendImage(this.sysImage).subscribe((res) => {
      console.log(res);

      this.categories = res;
      this.categories = this.categories.filter((item) => item.name != 'person');
    });
  }

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }
  searchCategory(name: string) {
    this.productsService.searchCategory(name).subscribe((res) => {
      this.products = res;
    });
  }

  resetList() {
    this.productsService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
