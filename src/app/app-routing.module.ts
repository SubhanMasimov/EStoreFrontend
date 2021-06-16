import { BrandUpdateComponent } from './components/brandComponents/brand-update/brand-update.component';
import { ProductUpdateComponent } from './components/productComponents/product-update/product-update.component';
import { CategoryAddComponent } from './components/categoryComponents/category-add/category-add.component';
import { BrandAddComponent } from './components/brandComponents/brand-add/brand-add.component';
import { ProductAddComponent } from './components/productComponents/product-add/product-add.component';
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
      { path: 'products/add', component: ProductAddComponent },
      { path: 'products/:id/update', component: ProductUpdateComponent },
      { path: 'brands', component: BrandListComponent },
      { path: 'brands/:id/update', component: BrandUpdateComponent },
      { path: 'brands/add', component: BrandAddComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'categories/add', component: CategoryAddComponent }
    ]
  },

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
