import { Component, OnInit } from '@angular/core';

// import {productsList} from './product.mock'
import { IProduct} from '../models/product.model';
// import {ApiService} from '../services/api.service';
import { HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  data$: Observable<any>;


  constructor(private http: HttpClient) {
    this.data$ = this.http.get('https://fakestoreapi.com/products');
  }
  }
  // productsList: IProduct[] = []
  // constructor(private _apiService: ApiService){}

  // ngOnInit(): void {
  //   this._apiService.getProducts().subscribe((data: any)=>{
  //     this.productsList = data;
  //   })
  // }

