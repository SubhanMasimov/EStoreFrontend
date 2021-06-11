import { HttpClient } from '@angular/common/http';
import { Connection } from './../constants/connection';
import { Product } from './../models/product';
import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = Connection.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Product>> {
    let path = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(path)
  }

}
