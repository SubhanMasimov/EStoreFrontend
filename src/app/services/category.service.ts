import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from '../constants/connection';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = Connection.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Category>> {
    let path = this.apiUrl + "categories/getall"
    return this.httpClient.get<ListResponseModel<Category>>(path)
  }
}
