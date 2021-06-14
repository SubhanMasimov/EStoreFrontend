import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { ProductListComponent } from './components/productComponents/product-list/product-list.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { BrandListComponent } from './components/brandComponents/brand-list/brand-list.component';
import { CategoryListComponent } from './components/categoryComponents/category-list/category-list.component';
import { ProductAddComponent } from './components/productComponents/product-add/product-add.component';
import { BrandAddComponent } from './components/brandComponents/brand-add/brand-add.component';
import { CategoryAddComponent } from './components/categoryComponents/category-add/category-add.component';
import { ProductUpdateComponent } from './components/productComponents/product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    ProductListComponent,
    AdminNavbarComponent,
    BrandListComponent,
    CategoryListComponent,
    ProductAddComponent,
    BrandAddComponent,
    CategoryAddComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
