import { CrudRepositoryService } from './../core/repositories/crudRepository.service';
import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CrudRepositoryService<Category>{

  constructor(protected httpClient: HttpClient) { super(httpClient, 'categories') }

}
