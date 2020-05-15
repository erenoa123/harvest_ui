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
panelColor:string;
tempTodoService:ShareTodo[] = [];
registTodoService:ShareTodo[] = [];
progressTodoService:ShareTodo[] = [];
doneTodoService:ShareTodo[] = [];
togle:string = 'all';
flgInit:boolean = true;

nam:any;
todoContent:string;
tantouPerson:string;
kihyouPerson:string;
draftDate:Date;
flg:any;

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
    });
    // this.tempTodoService = this.todoService.contentTodo;
 }

 sortInit(){
  console.log("called");
  console.log(this.todoService.contentTodo);
  let i = 0;
  while(i < this.todoService.contentTodo.length){
    let temp = this.todoService.contentTodo[i];
    console.log(temp);
    switch(temp.flg){
      case 1:
        this.registTodoService.push(temp);
      break;    
      case 2:
        this.progressTodoService.push(temp);
      break;
      case 3:
        this.doneTodoService.push(temp);
      break;
      default:
      break;
     }
      i++;
   }
 }
 sortTogleChange(tg:string){
   if(this.flgInit){
     this.sortInit();
     this.flgInit=false;
   }
   this.togle = tg;
 }

 getContent(){
    return this.todoService.contentTodo;
  }

  sortChange(swList:string){

     switch(swList){
      case "all":
        return this.todoService.contentTodo;
      case "regist":
        return this.registTodoService;
        break;
      case "progress":
        return this.progressTodoService;
        break;
      case "done":
        return this.doneTodoService;
        break;
      default:
        break;
    }
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

  openEditDialog(nam:any,todoContent:string,tantouPerson:string,kihyouPerson:string,draftDate:Date,flg:any): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {  
      width:'80%',
      data: {
        nam: nam,
        todoContent: todoContent,
        tantouPerson: tantouPerson, 
        kihyouPerson: kihyouPerson, 
        draftDate: draftDate, 
        flg: flg,
        title:'更新フォーム'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }

  openDeleteDialog(nam:any,todoContent:string,tantouPerson:string,kihyouPerson:string,draftDate:Date,flg:any): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {  
      width:'80%',
      data: {
        nam: nam,
        todoContent: todoContent,
        tantouPerson: tantouPerson, 
        kihyouPerson: kihyouPerson, 
        draftDate: draftDate, 
        flg: flg,
        title:'削除フォーム'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }

  onSubmitDialog():void{
    const dialogRef = this.dialog.open(TodoDialogComponent, { 
      width:'80%',
      data:{
        nam: this.nam, 
        todoContent: this.todoContent, 
        tantouPerson: this.tantouPerson, 
        kihyouPerson: this.kihyouPerson, 
        draftDate: this.draftDate, 
        flg: this.flg,
        title:'登録フォーム'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });

  }


}

