import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { products } from '../mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getProducts(): Product[] {
    return products;
  }

}
