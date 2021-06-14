import { CommandRepositoryService } from './../../../core/repositories/commandRepository.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productUpdateForm: FormGroup
  productEntity: Product
  brandList: Brand[] = []
  categoryList: Category[] = []

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private commandRepositoryService: CommandRepositoryService) { }

  ngOnInit(): void {
    this.createProductUpdateForm()
    this.getBrandList()
    this.getCategoryList()

    if (this.activatedRoute.params) {
      this.activatedRoute.params.subscribe(params => {
        this.getProductEntity(params["id"])
      })
    }


  }

  createProductUpdateForm() {
    this.productUpdateForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      categoryId: new FormControl(),
      brandId: new FormControl(),
      code: new FormControl(),
      stock: new FormControl(),
      price: new FormControl(),
      createDate: new FormControl(),
      active: new FormControl()
    })

    this.productUpdateForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      categoryId: ["", Validators.required],
      brandId: ["", Validators.required],
      code: ['', Validators.required],
      stock: ["", Validators.required],
      price: ["", Validators.required],
      createDate: [''],
      active: ['']
    })

  }

  getProductEntity(id: number) {
    this.productService.getById(id).subscribe(response => {
      this.productEntity = response.data
      this.productUpdateForm.setValue({
        id: this.productEntity.id,
        name: this.productEntity.name,
        categoryId: this.productEntity.categoryId,
        brandId: this.productEntity.brandId,
        code: this.productEntity.code,
        stock: this.productEntity.stock,
        price: this.productEntity.price,
        createDate: this.productEntity.createDate,
        active: this.productEntity.active
      })
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

  update(): void {
    this.commandRepositoryService.update(this.productUpdateForm, this.productService, 'admin/products')
  }

}
