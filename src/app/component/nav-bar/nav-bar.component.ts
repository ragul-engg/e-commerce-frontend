import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SearchResultComponent } from '../search-result/search-result.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(public authService: AuthService,private searchResult:SearchResultComponent) {}

  toggle(){
    this.searchResult.isavailable=!this.searchResult.isavailable;
  }

}
