import { Component, Input, OnInit } from '@angular/core';
import { BasketComponent } from '../basket/basket.component';
import { ProductRow } from '../model/product-row.model';
import { BasketService } from '../service/basket.service';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.less']
})
export class ProductRowComponent implements OnInit {

  @Input() productRow?: ProductRow;
  //@Input() basket?: BasketComponent;

  constructor(public basket: BasketService) { }

  ngOnInit(): void {
  }

  public onCounterChange(count: number): void {
    if (!this.productRow)
      return;
    this.productRow.count = count;
    if (count == 0) {
      this.basket.deleteProduct(this.productRow.id);
      return;
    }
  }

}
