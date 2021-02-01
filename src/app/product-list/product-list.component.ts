import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { products } from '../mocks/products.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  public productList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.productList = products;
  }

}
