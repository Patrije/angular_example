import { Component, OnInit } from '@angular/core';

interface Product{
  name: string,
  description: string
}

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  products: Product[] = [{name: 'apple', description: 'sweet'}, {name: 'watermelon', description: 'waterful'}]

  constructor() { }

  ngOnInit(): void {
  }

  share(){
    console.log('click')
  }

}
