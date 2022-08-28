import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() item = '';
  @Output() todoItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  startDoing(item: string){
    this.todoItemEvent.emit(item);
  }

}


