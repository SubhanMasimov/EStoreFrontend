import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { ProductListComponent } from './components/productComponents/product-list/product-list.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { BrandListComponent } from './components/brandComponents/brand-list/brand-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    ProductListComponent,
    AdminNavbarComponent,
    BrandListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
