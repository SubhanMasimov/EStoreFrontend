import { ResponseModel } from './../models/responseModel';
import { Brand } from './../models/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from '../constants/connection';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = Connection.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Brand>> {
    let path = this.apiUrl + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(path)
  }

  add(brand: Brand) {
    let path = this.apiUrl + "brands/add"
    return this.httpClient.post<ResponseModel>(path, brand)
  }
}
