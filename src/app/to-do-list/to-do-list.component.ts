import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todos = ['learning', 'eat dinner', 'go shopping', 'dish washing'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
