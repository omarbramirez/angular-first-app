import { Component } from '@angular/core';
import {productsList} from './product.mock'
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor,RouterLink, NgClass],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productsList= productsList;
}
