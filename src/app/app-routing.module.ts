import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/home/login/login.component';
import { RegisterComponent } from './component/home/register/register.component';
import { ProductComponent } from './component/product/product.component';
import { authGuard } from './guard/auth.guard';
import { ProductDescriptionComponent } from './component/product/product-description/product-description.component';
import { SearchResultComponent } from './component/search-result/search-result.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'products',
    component: ProductComponent,
    canActivate: [authGuard()],
  },
  {
    path: 'search',
    component: SearchResultComponent,
    canActivate: [authGuard()],
  },
  {
    path: 'products/:productId',
    component: ProductDescriptionComponent,
    canActivate: [authGuard()],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
