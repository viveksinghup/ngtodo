import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	todos;
	task;
  appState = 'default';
  oldTask;
  constructor(private _todoService: TodoService) {}

  ngOnInit() {
  	this.todos = this._todoService.getTodos();
    console.log(this.todos);
  }

  addTodo(){
    var newTodo = {
      task: this.task
    }
  	this.todos.push(newTodo);
  	this._todoService.addTodo(newTodo);
  }

  deleteTodo(todoTask){
  	for(var i = 0; i < this.todos.length; i++){
  		if(this.todos[i].task == todoTask){
  			this.todos.splice(i, 1);
  		}
  	}
    this._todoService.deleteTodo(todoTask);
  }

  editTodo(todo){
    this.appState = 'edit';
    this.oldTask = todo.task;
    this.task = todo.task;
  }

  updateTodo(){
    for(var i = 0; i < this.todos.length; i++){
      if(this.todos[i].task == this.oldTask){
        this.todos[i].task = this.task;
      }
    }

    this._todoService.updateTodo(this.oldTask, this.task);
  }

}
