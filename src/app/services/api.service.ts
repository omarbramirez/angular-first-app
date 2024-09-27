import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';
import { IRoute } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL ='https://fakestoreapi.com/products'

  constructor(private _httpClient: HttpClient) { }

  public getProducts(): Observable<IProduct>{
    return this._httpClient.get<IProduct>(this.baseURL)
  }
  public getProductById(id:string): Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`)
  }
  public postProduct(product: IProduct): Observable<IProduct>{
    return  this._httpClient.post<IProduct>(`${this.baseURL}`, product)
  }
}
