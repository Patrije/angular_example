import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoopingItems: string[] = [];
  newItem = ''

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(){
    this.shoopingItems.push(this.newItem);
    console.log(this.shoopingItems)
  }

}
