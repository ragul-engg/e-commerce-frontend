import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { SearchPrediction } from 'src/app/model/SearchPrediction';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class SearchResultComponent {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}
  isavailable:boolean=true;


  

  private trigger: Subject<any> = new Subject();

  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();

  categories?: SearchPrediction[];

  sysImage = '';

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
  public getSnapshot(event: any): void {
    event.preventDefault();
    this.trigger.next(void 0);
  }
  searchCategory(category: string) {
    this.router.navigate(['products/category'], {
      queryParams: {
        category,
      },
    });
  }
}
