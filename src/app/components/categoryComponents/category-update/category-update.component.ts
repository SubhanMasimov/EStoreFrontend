import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../models/category';
import { CommandRepositoryService } from './../../../core/repositories/commandRepository.service';
import { BrandService } from './../../../services/brand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Brand } from './../../../models/brand';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  categoryModel: Category
  categoryUpdateForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private commandRepositoryService: CommandRepositoryService) { }

  ngOnInit(): void {
    if (this.activatedRoute.params) {
      this.activatedRoute.params.subscribe(params => {
        this.getCategoryEntity(params["id"])
      })
    }
    this.createCategoryUpdateForm()

  }

  createCategoryUpdateForm(): void {

    this.categoryUpdateForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      createDate: new FormControl(),
      active: new FormControl()
    })

    this.categoryUpdateForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      createDate: [""],
      active: [""]
    })
  }

  update(): void {
    this.commandRepositoryService.update(this.categoryUpdateForm, this.categoryService, 'admin/categories')
  }

  getCategoryEntity(id: number) {
    this.categoryService.getById(id).subscribe(response => {
      this.categoryModel = response.data

      this.categoryUpdateForm.setValue({
        id: this.categoryModel.id,
        name: this.categoryModel.name,
        createDate: this.categoryModel.createDate,
        active: this.categoryModel.active
      })
    })
  }

}
