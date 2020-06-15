import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Chart, ChartData, ChartOptions } from 'chart.js';

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
private chartData:ChartData;
cntRegist:any = 0;
cntProgress:any = 0;
cntDone:any = 0;

  constructor(private client:HttpClient) {
   }

  get contentTodo(){
    return this.shareTodo;
  }

  get contentChartData(){
    return this.chartData;
  }

  //件数表示
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
    //バックエンド(API.POST)を実行する。
    //POSTのsubscribeでバックエンド(API.GET)を実行する。
    //GETのsubscribeでtodo一覧表示の更新を行う。
    this.client.post('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/post',input,httpOptions).subscribe((result:ShareTodo)=>{
      this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/all')
      .subscribe((result:ShareTodo[])=>{
        this.shareTodo = result;
        this.cntPanel();
      });
    });
  }

  UpdateTodo(input:string){
    //バックエンド(API.POST)を実行する。
    //POSTのsubscribeでバックエンド(API.GET)を実行する。
    //GETのsubscribeでtodo一覧表示の更新を行う。
    this.client.post('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/update',input,httpOptions).subscribe((result:ShareTodo)=>{
      this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/all')
      .subscribe((result:ShareTodo[])=>{
        this.shareTodo = result;
        this.cntPanel();
      });
    });
  }

  DeleteTodo(input:string){
    //バックエンド(API.POST)を実行する。
    //POSTのsubscribeでバックエンド(API.GET)を実行する。
    //GETのsubscribeでtodo一覧表示の更新を行う。
    this.client.post('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/delete',input,httpOptions).subscribe((result:ShareTodo)=>{
      this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/all')
      .subscribe((result:ShareTodo[])=>{
        this.shareTodo = result;
        this.cntPanel();
      });
    });
  }

  getChartData(){
    //return バックエンド(API)を実行する
    return this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/dashboard');
  }

  getBarChartData(){
    //return バックエンド(API)を実行する
    return this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/barChart');
  }

  getRadarChartData(){
    //return バックエンド(API)を実行する
    return this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/raderChart');
  }

}
