import { Component, Input, OnInit } from '@angular/core';
import { BasketComponent } from '../basket/basket.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() basket?: BasketComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
