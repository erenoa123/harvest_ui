import { Component, AfterViewInit, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-dash-board',
  templateUrl: './todo-dash-board.component.html',
  styleUrls: ['./todo-dash-board.component.css']
})
export class TodoDashBoardComponent implements AfterViewInit,OnInit {

  @ViewChild('canvas')
  ref: ElementRef;

  @ViewChild('canvas1')
  ref1: ElementRef;

  @Input()
  data: ChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderWidth: 1
    }]
  };
  @Input()
  data1: ChartData;

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
  context1: CanvasRenderingContext2D;
  chart: Chart;
  chart1: Chart;

  constructor(private _elementRef:ElementRef,public todoService:TodoService) {}

  ngOnInit(){
    this.todoService.getChartData();
  }

  // View が初期化された後でないと DOM の取得に失敗した
  ngAfterViewInit() {

    // canvasを取得
    this.context = this.ref.nativeElement.getContext('2d');

    // チャートの作成
    this.chart = new Chart(this.context, {
      type: 'doughnut',     // とりあえず doughnutチャートを表示
      data: this.data,      // データをプロパティとして渡す
      options: this.options // オプションをプロパティとして渡す
    })
  }

  getChartData(){
    this.todoService.getChartData();
    this.data1 = this.todoService.contentChartData;
    console.log("Data1",this.data1);
    console.log("Data",this.data);

    // canvasを取得
    this.context1 = this.ref1.nativeElement.getContext('2d');
    this.chart1 = new Chart(this.context1, {
      type: 'doughnut',     // とりあえず doughnutチャートを表示
      data: this.data1,      // データをプロパティとして渡す
      options: this.options // オプションをプロパティとして渡す
    })
    
  }



}
