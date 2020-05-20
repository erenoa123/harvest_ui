import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
class ShareTodo{
  nam:number;
  todoContent:string;
  tantouPerson:string;
  kihyouPerson:string;
  draftDate:Date;
  flg:number;
  todoTitle:string;
  responseDate:Date;
  responsePlanDate:Date;
  category:string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private shareTodo:ShareTodo[] =[];
cntRegist:any = 0;
cntProgress:any = 0;
cntDone:any = 0;

  constructor(private client:HttpClient) {
    // this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/all')
    // .subscribe((result:ShareTodo[])=>{
    //   this.shareTodo = result;
    // });
   }

  get contentTodo(){
    //console.log(JSON.stringify(this.shareTodo))
    return this.shareTodo;
  }

  cntPanel(){
    this.cntRegist = 0;
    this.cntProgress = 0;
    this.cntDone = 0;
 
     for(let i = 0; i<this.contentTodo.length ;i++){
       if(this.contentTodo[i].flg == 1){
         this.cntRegist++;
       }else if(this.contentTodo[i].flg == 2){
         this.cntProgress++;
       }else if(this.contentTodo[i].flg == 3){
         this.cntDone++;
       }
     }
 
  }

  getTodo(){
    this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/all')
    .subscribe((result:ShareTodo[])=>{
      this.shareTodo = result;
      this.cntPanel();
    });
  }
 
  test(){
    return 'ready complitely';
  }

  PostTodo(input:string){
    this.client.post('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/post',input,httpOptions).subscribe((result:ShareTodo)=>{
      this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/all')
      .subscribe((result:ShareTodo[])=>{
        this.shareTodo = result;
        this.cntPanel();
      });
    });
  }

  UpdateTodo(input:string){
    this.client.post('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/update',input,httpOptions).subscribe((result:ShareTodo)=>{
      this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/all')
      .subscribe((result:ShareTodo[])=>{
        this.shareTodo = result;
        this.cntPanel();
      });
    });
  }

  DeleteTodo(input:string){
    this.client.post('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/delete',input,httpOptions).subscribe((result:ShareTodo)=>{
      this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/all')
      .subscribe((result:ShareTodo[])=>{
        this.shareTodo = result;
        this.cntPanel();
      });
    });
  }

}
