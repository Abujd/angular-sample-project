import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {Todo} from 'src/app/Todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      title: this.title,
      desc : this.desc
  }
    this.todoAdd.emit(todo);
  }

}
