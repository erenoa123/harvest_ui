import { Component, OnInit } from '@angular/core';

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

  constructor() { 
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
  }

  today(){
    return new Date().toLocaleString();
  }

  doClick(){
    this.visible = !this.visible;
    this.message = ++this.count + "回クリックしました。";
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

}