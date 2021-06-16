import { CommandRepositoryService } from './../../../core/repositories/commandRepository.service';
import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = []

  constructor(private categoryService: CategoryService,
    private commandRepositoryService: CommandRepositoryService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.categoryService.getAll().subscribe(successResponse => {
      this.categories = successResponse.data
    })
  }

  delete(category: Category) {
    this.commandRepositoryService.delete(category, this.categoryService)
    this.categories = this.categories.filter(c => c.id !== category.id)
  }
}
