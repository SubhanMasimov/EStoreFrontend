import { CommandRepositoryService } from '../../../core/repositories/commandRepository.service';
import { ProductService } from './../../../services/product.service';
import { Category } from './../../../models/category';
import { Brand } from './../../../models/brand';
import { CategoryService } from './../../../services/category.service';
import { BrandService } from './../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  brandList: Brand[] = []
  categoryList: Category[] = []

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private commandRepositoryService: CommandRepositoryService) { }

  ngOnInit(): void {
    this.createAddForm()
    this.getBrandList()
    this.getCategoryList()
  }

  createAddForm(): void {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      categoryId: ["", Validators.required],
      brandId: ["", Validators.required],
      stock: ["", Validators.required],
      price: ["", Validators.required]
    })
  }

  getBrandList(): void {
    this.brandService.getAll().subscribe(success => {
      this.brandList = success.data
    })
  }

  getCategoryList(): void {
    this.categoryService.getAll().subscribe(success => {
      this.categoryList = success.data
    })
  }

  add(): void {
    this.commandRepositoryService.add(this.productAddForm, this.productService, 'admin/products')
  }

}
