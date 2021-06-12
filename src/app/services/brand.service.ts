import { CrudRepositoryService } from './../core/repositories/crudRepository.service';
import { Brand } from './../models/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends CrudRepositoryService<Brand>{

  constructor( protected httpClient: HttpClient) { super( httpClient, 'brands') }
  
}
