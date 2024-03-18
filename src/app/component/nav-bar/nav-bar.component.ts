import { Component, Inject } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SearchResultComponent } from '../search-result/search-result.component';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/service/shared/shared.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {

  constructor(
    private router: Router,
    public authService: AuthService,
    private searchResult: SearchResultComponent,
    private dashboardService:DashboardService
    
  ) {}
  
  handleDashBoard() {
    this.router.navigateByUrl('admin/dashboard');
    this.dashboardService.resetActiveProduct();
  }
  toggle() {
    this.searchResult.isavailable = !this.searchResult.isavailable;
  }

  handleEcom() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['products']);
    }
  }
}
