import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormGroup, FormControl } from '@angular/forms';
import {ShareTodo} from '../model/sharetodo.model'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TodoDialogComponent} from '../todo-dialog/todo-dialog.component';
import { from } from 'rxjs';

declare var is:any;

export interface DialogTodoData{
  nam:any;
  todoContent:string;
  tantouPerson:string;
  kihyouPerson:string;
  draftDate:Date;
  flg:any;
  title:string;
  todoTitle:string;
  responseDate:Date;
  responsePlanDate:Date;
  category:string;
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

flgRegist:boolean = true;
flgProgress:boolean = true;
flgDone:boolean = true;

nam:any;
todoContent:string;
tantouPerson:string;
kihyouPerson:string;
draftDate:Date;
flg:any;
title:string;
todoTitle:string;
responseDate:Date;
responsePlanDate:Date;
category:string;

ismobile:any = is.mobile();

  constructor(public todoService:TodoService,public dialog: MatDialog) { }

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
    this.todoService.getTodo();
    // this.tempTodoService = this.todoService.contentTodo;
 }

 sortTogleChange(tg:string){
   switch(tg){
    case "all":
      this.flgRegist = true;
      this.flgProgress = true;
      this.flgDone = true;
      break;
    case "regist":
      this.flgRegist = true;
      this.flgProgress = false;
      this.flgDone = false;
      break;
    case "progress":
      this.flgRegist = false;
      this.flgProgress = true;
      this.flgDone = false;
      break;
    case "done":
      this.flgRegist = false;
      this.flgProgress = false;
      this.flgDone = true;
      break;
    default:
      break;
  }
 }

 getContent(){
    return this.todoService.contentTodo;
  }

  sortChangeIf(swList:any){

    switch(swList){

     case 1:
       return this.flgRegist;
       break;
     case 2:
       return this.flgProgress;
       break;
     case 3:
       return this.flgDone;
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

  openEditDialog(nam:any,todoContent:string,tantouPerson:string,kihyouPerson:string,draftDate:Date,flg:any
    ,todoTitle:string,responseDate:Date,responsePlanDate:Date,category:string): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {  
      width:'80%',
      data: {
        nam: nam,
        todoContent: todoContent,
        tantouPerson: tantouPerson, 
        kihyouPerson: kihyouPerson, 
        draftDate: draftDate, 
        flg: flg,
        title:'更新フォーム',
        todoTitle:todoTitle,
        responseDate: responseDate,
        responsePlanDate: responsePlanDate,
        category:category
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }

  openDeleteDialog(nam:any,todoContent:string,tantouPerson:string,kihyouPerson:string,draftDate:Date,flg:any
    ,todoTitle:string,responseDate:Date,responsePlanDate:Date,category:String): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {  
      width:'80%',
      data: {
        nam: nam,
        todoContent: todoContent,
        tantouPerson: tantouPerson, 
        kihyouPerson: kihyouPerson, 
        draftDate: draftDate, 
        flg: flg,
        title:'削除フォーム',
        todoTitle:todoTitle,
        responseDate: responseDate,
        responsePlanDate: responsePlanDate,
        category: category
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
        title:'登録フォーム'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }


}

