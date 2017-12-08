import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() { 
  	super();
  	console.log("TodoService Initialised");
  	this.load();
  }

  getTodos(){
  	var todos = JSON.parse(localStorage.getItem('todos'));
  	return todos;
  }

  addTodo(newTodo){
  	var todos = JSON.parse(localStorage.getItem('todos'));
  	// add new task
  	todos.push(newTodo);
  	// set new task
  	localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todoTask){
  	var todos = JSON.parse(localStorage.getItem('todos'));

  	for(var i = 0; i < todos.length; i++){
  		if(todos[i].task == todoTask){
  			todos.splice(i, 1);
  		}
  	}
    
    // set new task
  	localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldTask, newTask){
  	var todos = JSON.parse(localStorage.getItem('todos'));
  	
  	for(var i = 0; i < todos.length; i++){
  		if(todos[i].task == oldTask){
  			todos[i].task = newTask;
  		}
  	}
    
    // set new task
  	localStorage.setItem('todos', JSON.stringify(todos));
  }

}
