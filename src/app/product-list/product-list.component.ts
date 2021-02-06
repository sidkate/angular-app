import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { products } from '../mocks/products.mock';
import { BasketComponent } from '../basket/basket.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  @Input() basket?: BasketComponent;

  public productList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.productList = products;
  }

}
