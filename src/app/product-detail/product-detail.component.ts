import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {

  producto: string = ''
  color: string=  ''

  constructor(private _route: ActivatedRoute) {}

  ngOnInit():void{
    this._route.params.subscribe(params => {
      this.producto = params['productId']
      this.color = params['color']
    })

  }
}
