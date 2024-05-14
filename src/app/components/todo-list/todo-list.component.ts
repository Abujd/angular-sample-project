import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos : Todo[];
  constructor() { 
    this.todos = [
      {
        desc : 'This is your first task',
        title: 'My first task'
      }
    ]
  }  


  ngOnInit(): void {
  }
  
  deleteTodo(todo :Todo){    
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log("deleted", todo);
  }
  addTodo(todo :Todo){    
    this.todos.push(todo);
    console.log("Added", todo);

  }

}
