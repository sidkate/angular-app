import { Component, Input, OnInit } from '@angular/core';
import { BasketComponent } from '../basket/basket.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  @Input() basket?: BasketComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
