import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from '../service/basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  //@Input() basket?: BasketComponent;

  constructor(public basket: BasketService) { }

  ngOnInit(): void {
  }

}
