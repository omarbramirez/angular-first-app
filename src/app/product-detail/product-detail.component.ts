import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,productsList } from '../product/product.mock';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {

  producto?: Product;
  productsList = productsList;
  loading = false;
  color = '';
  constructor(private _route: ActivatedRoute) {}

  ngOnInit():void{
    setTimeout(() => {
      this._route.params.subscribe(params => {
        this.producto = this.productsList.find((product)=> product.id == params['productId'])
        this.loading = true;
        this.color = this.producto?.precio as number > 5 ? 'red' : ''
      })
  
    }, 1000);
  }
}
 