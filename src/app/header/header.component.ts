import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  warunek = true;
  zmienna = 'napis';
  inputValue = 'wartosc inputu'

  constructor() { }

  ngOnInit(): void {
  }

  showValue(){
    this.zmienna = this.inputValue   }

  showDiv(){
    this.warunek = !this.warunek;
  }

}
