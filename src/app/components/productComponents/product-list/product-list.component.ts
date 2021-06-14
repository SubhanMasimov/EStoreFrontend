import { CommandRepositoryService } from './../../../core/repositories/commandRepository.service';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService,
    private commandRepositoryService: CommandRepositoryService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.productService.getAll().subscribe(success => {
      this.products = success.data
    })
  }

  delete(product: Product) {
    this.commandRepositoryService.delete(product, this.productService)
    this.products = this.products.filter(p=>p.id !== product.id)
  }

}
