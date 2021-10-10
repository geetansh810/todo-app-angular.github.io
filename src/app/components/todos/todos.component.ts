import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe(todos => {
      this.todos = todos;
    })
  }

  changeTodoStatus(todo:Todo){
    this.todoService.updateTodo(todo);
  }
  deleteTodo(todo:Todo){
    this.todoService.removeTodo(todo);
  }
  

}
