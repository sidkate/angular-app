import { Component, Injectable, OnInit } from '@angular/core';
import { ProductRow } from '../model/product-row.model';
import { Product } from '../model/product.model';
import { BasketService } from '../service/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent implements OnInit {

  // public products: Map<string, ProductRow>;

  // public popupVisible: boolean = false;

  constructor(private basketService: BasketService) {
    //this.products = new Map<string, ProductRow>();
  }

  ngOnInit(): void {
  }

  public addItemToBasket(product: Product): void {
    this.basketService.addItemToBasket(product);
  }

  public deleteProduct(id: string): void {
    this.basketService.deleteProduct(id);
  }

  public get productRows(): ProductRow[] {
    return this.basketService.productRows;
  }

  public get counter(): number {
    return this.basketService.counter;
  }

  public openPopup(): void {
    this.basketService.openPopup();
  }

  public closePopup(): void {
    this.basketService.closePopup();
  }

  public get products() {
    return this.basketService.products;
  }

  public get popupVisible() {
    return this.basketService.popupVisible;
  }

}
