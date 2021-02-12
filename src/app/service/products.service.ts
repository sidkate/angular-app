import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { v1 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  public getProductById(id: string): Observable<Product> {
    const observable = new ReplaySubject<Product>();
    this.getProducts().subscribe(products => {
      const productById: Product[] = products.filter(product => product.id == id);
      observable.next(productById[0]);
    });
    return observable;
  }

  public createProduct(product: Product): Observable<Product> {
    product.id = uuid();
    return this.http.post<Product>('/api/products', product);
  }

}
