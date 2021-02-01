import { Component, OnInit } from '@angular/core';
import { ProductRow } from '../model/product-row.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent implements OnInit {

  public products: Map<string, ProductRow>;

  constructor() {
    this.products = new Map<string, ProductRow>();
  }

  ngOnInit(): void {
  }

  public addItemToBasket(product: Product): void {
    let productRow = this.products.get(product.id);
    if (!productRow) {
      productRow = new ProductRow(product.id, product.title, product.price);
      this.products.set(product.id, productRow);
    }
    console.info(this.products);
  }

  public deleteProduct(id: string): void {
    let product = this.products.get(id);
    if (product) {
      this.products.delete(id);
    }
  }

  public get productRows(): ProductRow[] {
    return Array.from(this.products.values());
  }

  private get counter(): number {
    return Array.from(this.products.values()).reduce((sum, product) => sum + product.count, 0);
  }

}
