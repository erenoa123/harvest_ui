import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormGroup, FormControl } from '@angular/forms';
import {ShareTodo} from '../model/sharetodo.model'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TodoDialogComponent} from '../todo-dialog/todo-dialog.component';
import { from } from 'rxjs';

export interface DialogTodoData{
  nam:any;
  todoContent:string;
  tantouPerson:string;
  kihyouPerson:string;
  draftDate:Date;
  flg:any;
}

export interface DialogData{
  animal: string;
  name: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
message:string;
inputTodo:FormGroup;
private shareTodo:ShareTodo;
panelColor:string;
name:string;
animal:string;
  constructor(private todoService:TodoService,public dialog: MatDialog) { }

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

  onSubmitDelete(nam:any){
    let result;
    this.inputTodo.value.nam = nam;
    result = this.inputTodo.value;
    this.message = JSON.stringify(result);
    this.todoService.DeleteTodo(this.message);
  }

  getpanelColor(flg:any){

    switch(flg){
      case 1:
        this.panelColor = "regist";
      break;    
      case 2:
        this.panelColor = "progress";
      break;
      case 3:
        this.panelColor = "done";
      break;
      default:
        this.panelColor = "";  
      break;
    }

    return this.panelColor;
  }

  openDialog(nam:any,todoContent:string,tantouPerson:string,kihyouPerson:string,draftDate:Date,flg:any): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      width: '250px',
      data: {nam: nam, todoContent: todoContent, tantouPerson: tantouPerson, kihyouPerson: kihyouPerson, draftDate: draftDate, flg: flg}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(JSON.stringify(result));
    });
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogTodoData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
