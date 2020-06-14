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

  @ViewChild('canvasBar')
  refBar: ElementRef;

  @ViewChild('canvasRadar')
  refRadar: ElementRef;

  @Input()
  data: ChartData;

  @Input()
  barData: ChartData;

  @Input()
  radarData: ChartData;

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
  barChart: Chart;
  radarChart: Chart;

  constructor(private _elementRef:ElementRef,public todoService:TodoService) {}

  ngOnInit(){
    this.getChartData();
    this.getBarChartData();
    this.getRaderChartData();
  }

  getChartData(){
    this.todoService.getChartData().subscribe((result:ChartData)=>{
      console.log("getChart");
      console.log(result);
      
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

  getBarChartData(){
    this.todoService.getBarChartData().subscribe((result:ChartData)=>{
      console.log("getBarChart");
      console.log(result);
      
      this.barData = result;
      // canvasを取得
      this.context = this.refBar.nativeElement.getContext('2d');
      this.barChart = new Chart(this.context, {
        type: 'bar',     // とりあえず barチャートを表示
        data: this.barData,      // データをプロパティとして渡す
        options: this.options // オプションをプロパティとして渡す
      });
    });
    
    
  }

  getRaderChartData(){
    this.todoService.getRadarChartData().subscribe((result:ChartData)=>{
      console.log("getRadarChart");
      console.log(result);
      
      this.radarData = result;
      // canvasを取得
      this.context = this.refRadar.nativeElement.getContext('2d');
      this.radarChart = new Chart(this.context, {
        type: 'radar',     // とりあえず barチャートを表示
        data: this.radarData,      // データをプロパティとして渡す
        options: this.options // オプションをプロパティとして渡す
      });
    });
    
    
  }




}
