import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductsService } from '../service/products.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  public id: string = '';
  public product$: Subject<Product> = new ReplaySubject<Product>();
  private unsubscribe$: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        this.id = params?.productId || '';
        this.service.getProductById(this.id)
          .pipe(takeUntil(this.unsubscribe$))       
          .subscribe(product => this.product$.next(product));
      });
  }

  ngOnDestroy(): void {
    console.info("on destroy ProductDetailsComponent");
    this.unsubscribe$.next();
  }

}
