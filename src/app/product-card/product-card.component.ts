import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {

  @Input() product?: Product;
  @Output() addedToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  public addToCart(product: Product): void {
    this.addedToCart.emit(product);
  }

}
