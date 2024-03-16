import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SearchResultComponent } from '../search-result/search-result.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private router:Router ,public authService: AuthService,private searchResult:SearchResultComponent) {}

  toggle(){
    this.searchResult.isavailable=!this.searchResult.isavailable;
  }

  handleDashboard()
  {
    this.router.navigate(['/admin'])
  }
  

}
