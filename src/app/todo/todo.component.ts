import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormGroup, FormControl } from '@angular/forms';
import {ShareTodo} from '../model/sharetodo.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
message:string;
inputTodo:FormGroup;
private shareTodo:ShareTodo;
  constructor(private todoService:TodoService) { }

  ngOnInit(){
    this.message = this.todoService.test();
    this.inputTodo = new FormGroup({
      nam:new FormControl(),
      todoContent: new FormControl(''),
      tantouPerson: new FormControl(''),
      kihyouPerson: new FormControl(''),
      draftDate: new FormControl(''),
      flg: new FormControl(0)
    })
  }

  getContent(){
    return this.todoService.contentTodo;
  }

  onSubmit(){
    let result = this.inputTodo.value;
    this.inputTodo[0];
    this.message = JSON.stringify(result);
  this.todoService.PostTodo(this.message);
  }

  onSubmitUpdate(){
    let result = this.inputTodo.value;
    this.inputTodo[0];
    this.message = JSON.stringify(result);
  this.todoService.UpdateTodo(this.message);
  }

  onSubmitDelete(){
    let result = this.inputTodo.value;
    this.inputTodo[0];
    this.message = JSON.stringify(result);
  this.todoService.DeleteTodo(this.message);
  }

}
