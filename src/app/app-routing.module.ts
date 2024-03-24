import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/home/login/login.component';
import { RegisterComponent } from './component/home/register/register.component';
import { ProductComponent } from './component/product/product.component';
import { authGuard } from './guard/auth.guard';
import { ProductDescriptionComponent } from './component/product/product-description/product-description.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { AdminComponent } from './component/admin/admin.component';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { DeleteProductComponent } from './component/product/delete-product/delete-product.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { CategoryProductsComponent } from './component/product/category-products/category-products.component';
import { UserComponent } from './component/user/user.component';
import { CartComponent } from './component/user/cart/cart.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { OrderComponent } from './component/user/order/order.component';


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
    // canActivateChild: [authGuard()],
    // children: [{ path: 'category', component: CategoryProductsComponent }],
  },
  {
    path: 'products/category',
    component: CategoryProductsComponent,
    canActivate: [authGuard()],
    children: [{ path: ':productId', component: ProductDescriptionComponent }]
  },
  {
    path: 'search',
    component: SearchResultComponent,
    canActivate: [authGuard()],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard()],
    canActivateChild: [authGuard()],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'product/new', component: AddProductComponent },
          { path: 'product/delete', component: DeleteProductComponent },
        ],
      },
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [authGuard()],
    canActivateChild: [authGuard()],
    children: [
      { path: 'cart', component: CartComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'order', component: OrderComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
