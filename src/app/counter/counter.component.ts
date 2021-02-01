import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {

  //@Input() product?: ProductRow;
  @Output() changed = new EventEmitter<number>();

  public count: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  public plus(): void {
    this.count++;
    this.changed.emit(this.count);
  }

  public minus(): void {
    this.count--;
    this.changed.emit(this.count);
  }

}
