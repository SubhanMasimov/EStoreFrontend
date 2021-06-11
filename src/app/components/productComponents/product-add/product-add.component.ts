import { Router, RouterModule } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Messages } from './../../../constants/messages';
import { Category } from './../../../models/category';
import { Brand } from './../../../models/brand';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './../../../services/category.service';
import { BrandService } from './../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { GlobalErrorHandler } from 'src/app/core/errorHandler/globalErrorHandler';

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
    private toastrService: ToastrService,
    private router: Router) { }

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
    if (this.productAddForm.valid) {
      let product = Object.assign({}, this.productAddForm.value)
      this.productService.add(product).subscribe(successResponse => {
        this.toastrService.success(Messages.productAdded)
        this.router.navigate(['admin/products'])
      },
        errorResponse => {
          new GlobalErrorHandler(this.toastrService).handle(errorResponse)
        })
    }
    else {
      this.toastrService.warning(Messages.fillAreas)
    }
  }

}
