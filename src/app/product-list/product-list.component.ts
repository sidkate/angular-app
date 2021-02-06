import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { BasketComponent } from '../basket/basket.component';
import { ProductsService } from '../service/products.service';
import { BasketService } from '../service/basket.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  //@Input() basket?: BasketComponent;

  public productList: Product[] = [];

  constructor(private productsService: ProductsService, public basket: BasketService) { }

  ngOnInit(): void {
    this.productList = this.productsService.getProducts();
  }

}
