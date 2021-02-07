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

  public getProductById(id: string): Product {
    const productById = products.filter(product => product.id == id);
    return productById[0];
  }
}
