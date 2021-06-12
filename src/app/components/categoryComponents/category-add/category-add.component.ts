import { CategoryService } from './../../../services/category.service';
import { CommandRepositoryService } from './../../../core/repositories/command-repository.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryAddForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private commandRepositoryService: CommandRepositoryService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.createBrandAddForm()
  }

  createBrandAddForm() {
    this.categoryAddForm = this.formBuilder.group(
      { name: ["", Validators.required] }
    )
  }


  add() {
    this.commandRepositoryService.add(this.categoryAddForm, this.categoryService, 'admin/categories')
  }

}
