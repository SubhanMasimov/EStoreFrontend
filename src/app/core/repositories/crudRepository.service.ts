import { ObjectResponseModel } from './../../models/objectResponseModel';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from 'src/app/constants/connection';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CrudRepositoryService<T>{

  private apiUrl: string

  constructor(protected httpClient: HttpClient, @Inject(String) apiEndPoint: string) {
    this.apiUrl = Connection.apiUrl + apiEndPoint + "/"
  }

  getAll(): Observable<ListResponseModel<T>> {
    let path = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<T>>(path)
  }

  getById(id: number): Observable<ObjectResponseModel<T>> {
    let path = this.apiUrl + "getbyid?id=" + id
    return this.httpClient.get<ObjectResponseModel<T>>(path)
  }

  add(entity: T): Observable<ResponseModel> {
    let path = this.apiUrl + "add"
    return this.httpClient.post<ResponseModel>(path, entity);
  }

  update(entity: T): Observable<ResponseModel> {
    let path = this.apiUrl + "update"
    return this.httpClient.post<ResponseModel>(path, entity);
  }

}
