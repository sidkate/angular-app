import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductsService } from '../service/products.service';
import { BasketService } from '../service/basket.service';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public productList$: Subject<Product[]> = new ReplaySubject<Product[]>();
  private unsubscribe$: Subject<void> = new Subject();

  constructor(private productsService: ProductsService, public basket: BasketService) { }

  ngOnInit(): void {
    this.productsService.getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(products => this.productList$.next(products));
  }

  ngOnDestroy(): void {
    console.info("on destroy ProductListComponent");
    this.unsubscribe$.next();
  }

}
