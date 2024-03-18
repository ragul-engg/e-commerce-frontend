import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/service/shared/shared.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
@Injectable({
  providedIn: 'root'
})
export class DashboardComponent {
  constructor(private router: Router,private dashboardService:DashboardService) {}
  activeProduct: string = '';
  ngOnInit() {
    this.dashboardService.activeProduct$.subscribe((value)=>{
      this.activeProduct=value;
    })
  }
  toggleProduct(value: string) {
    this.activeProduct = value;
    console.log(this.activeProduct);
    switch (value) {
      case 'new':
        this.router.navigateByUrl('admin/dashboard/product/new');
        break;
      case 'delete':
        this.router.navigateByUrl(`admin/dashboard/product/delete`);
        break;
      case 'update':
        this.router.navigateByUrl(`admin/dashboard/product/update`);
    }
  }
}
