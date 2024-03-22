import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/home/login/login.component';
import { RegisterComponent } from './component/home/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './component/product/product.component';
import { ProductDescriptionComponent } from './component/product/product-description/product-description.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { WebcamModule } from 'ngx-webcam';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { AdminComponent } from './component/admin/admin.component';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { DeleteProductComponent } from './component/product/delete-product/delete-product.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { CategoryProductsComponent } from './component/product/category-products/category-products.component';
import { UserComponent } from './component/user/user.component';
import { CartComponent } from './component/user/cart/cart.component';
import { ProfileComponent } from './component/user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductComponent,
    ProductDescriptionComponent,
    NavBarComponent,
    SearchResultComponent,
    AdminComponent,
    DeleteProductComponent,
    AddProductComponent,
    DashboardComponent,
    CategoryProductsComponent,
    UserComponent,
    CartComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1500,
    }),
    BrowserAnimationsModule,
    WebcamModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
