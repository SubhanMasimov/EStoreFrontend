import { CrudRepositoryService } from './../core/repositories/crudRepository.service';
import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product';
import {  Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudRepositoryService<Product> {

  constructor( protected httpClient: HttpClient) { super( httpClient, 'products') }
  
}

