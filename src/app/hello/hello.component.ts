import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmbeddedTemplateAst } from '@angular/compiler';
import { MessageComponent } from '../message/message.component';
import { MycheckService } from '../mycheck.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

class MyData{
  data:string;
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title:string;
  message:string;
  now:Date;
  styleClass:string;
  count:number;
  input:string;
  visible:boolean;
  data:string[];
  switch:string;
  nowClass:any;
  nowStyle:any;
  text1:string;
  myControl:FormControl;
  message1:string[];
  lastTarget:any;
  lastColor:string;
  input1:string;
  @ViewChild(MessageComponent)
  private msgCompornent:MessageComponent;
  message2:string;
  message3:string;

  constructor(private service:MycheckService, private route:ActivatedRoute, private client:HttpClient) { 
    setInterval(
      ()=>{
        this.now = new Date();
        this.styleClass = this.styleClass == 'red' ? '' : 'red';
        console.log(this.styleClass);
      }, 1000);

      this.input='';
    
  }

  ngOnInit(): void {
    this.title='Hello-app';
    this.message="this is My First Component!!";
    this.styleClass = 'red';
    this.count = 0;
    this.data = [
      '最初の要素',
      '2番目の要素',
      '最後の要素'
    ];
    this.nowClass = {
      'thin':false,
      'large':false,
      'frame':false
    };
    this.nowStyle = {
      'border-style':'',
      'border-width':'',
      'border-color':''
    };

    this.text1 = "";
    this.myControl = new FormControl('デフォルトメッセージ');

    this.message1 = ['compornent','栗原','last message'];
    this.input1='';
    
    console.log(this.service.hello());
    this.message2 = 'param:'+JSON.stringify(this.route.snapshot.queryParamMap);

    this.message3 = 'wait...';
    setTimeout(()=>this.getData(),5000);

  }

  getData(){
    this.client.get('/assets/data.json').subscribe((result:MyData) => {
      this.message3 = 'data: ' + result.data;
    })
  }

  today(){
    return new Date().toLocaleString();
  }

  doClick(){
    this.visible = !this.visible;
    this.message = ++this.count + "回クリックしました。";
  }
  
  doClick1(event){
    if(this.lastTarget != null){
      this.lastTarget.style.color = this.lastColor;
      this.lastTarget.style.backgroundColor = 'white';
    }

    this.lastTarget = event.target;
    this.lastColor = event.target.style.color;
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'red';

  }

  doType(val:string){
    this.input = val;
    this.message = 'you type: '+this.input;
  }

  doSelect(val:string){
    this.switch = val;
  }

  check(c1,c2,c3){
    this.nowClass.thin = c1;
    this.nowClass.large = c2;
    this.nowClass.frame = c3;

  }

  checkNg(in1, in2, in3){
    this.nowStyle['border-style'] = in1;
    this.nowStyle['border-width'] = in2+"px";
    this.nowStyle['border-color'] = in3;
  }

  push(){
    if(this.input1 == ''){
      alert('テキストを入力してください');
      return;
    }
    console.log(this.msgCompornent);
    this.msgCompornent.push(this.input1);
    this.input1 = '';
  }

  pop(){
    this.msgCompornent.pop();
  }



}
