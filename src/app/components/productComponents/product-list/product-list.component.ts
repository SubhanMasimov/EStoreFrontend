import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.productService.getAll().subscribe(success => {
      this.products = success.data
    })
  }

}
