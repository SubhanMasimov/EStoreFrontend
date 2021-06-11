import { BrandListComponent } from './components/brandComponents/brand-list/brand-list.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { ProductListComponent } from './components/productComponents/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/categoryComponents/category-list/category-list.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminNavbarComponent, children: [
      { path: '', component: ProductListComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'brands', component: BrandListComponent },
      { path: 'categories', component: CategoryListComponent }
    ]
  },

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
