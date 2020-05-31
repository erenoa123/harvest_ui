import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-dash-board',
  templateUrl: './todo-dash-board.component.html',
  styleUrls: ['./todo-dash-board.component.css']
})
export class TodoDashBoardComponent implements OnInit {

  @ViewChild('canvas')
  ref: ElementRef;

  @Input()
  data: ChartData;
  @Input()
  options: ChartOptions= {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  };

  context: CanvasRenderingContext2D;
  chart: Chart;

  constructor(private _elementRef:ElementRef,public todoService:TodoService) {}

  ngOnInit(){
    this.getChartData();
  }

  getChartData(){
    this.todoService.getChartData().subscribe((result:ChartData)=>{
      console.log("getChart");
      
      this.data = result;
      // canvasを取得
      this.context = this.ref.nativeElement.getContext('2d');
      this.chart = new Chart(this.context, {
        type: 'doughnut',     // とりあえず doughnutチャートを表示
        data: this.data,      // データをプロパティとして渡す
        options: this.options // オプションをプロパティとして渡す
      });
    });
    
    
  }



}
