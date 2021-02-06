import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public hackToggle(): void {
    localStorage.setItem("hack-on", (localStorage.getItem("hack-on") != "true").toString())
  }

}
