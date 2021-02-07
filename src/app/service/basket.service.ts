import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRow } from '../model/product-row.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  public products: Map<string, ProductRow>;

  public popupVisible: boolean = false;

  constructor() {
    this.products = new Map<string, ProductRow>();
  }

  public addItemToBasket(product: Product): void {
    let productRow = this.products.get(product.id);
    if (!productRow) {
      productRow = new ProductRow(product.id, product.title, product.price);
      this.products.set(product.id, productRow);
    }
    //this.openPopup();
    console.info(this.products)
  }

  public deleteProduct(id: string): void {
    let product = this.products.get(id);
    if (product) {
      this.products.delete(id);
      if (this.counter == 0)
        this.closePopup();
    }
  }

  public get productRows(): ProductRow[] {
    return Array.from(this.products.values());
  }

  public get counter(): number {
    return Array.from(this.products.values()).reduce((sum, product) => sum + product.count, 0);
  }

  public openPopup(): void {
    this.popupVisible = true;
  }

  public closePopup(): void {
    this.popupVisible = false;
  }

}
