import { Component, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent {
  title = 'table';
  resultAnalyzed = 0;
  sData: any;
  scheduleData: any;

  constructor(public service: ServiceService) {}
  sem = '';

  see(value: string): void {
    this.sem = value;
    if (this.sem == 'sem3') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem3;
    }
    if (this.sem == 'sem4') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem4;
    }
    if (this.sem == 'sem5') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem5;
    }
    if (this.sem == 'sem6') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem6;
    }
    if (this.sem == 'sem7') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem7;
    }
    if (this.sem == 'sem8') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem8;
    }
  }
  passPercentages: any = [];
  courses: any = [];
  store: string[] = [];
  myname: any = [];
  content: number = 0;
  counter = 0;
  pt = 0;

  // name = ""
  onClick(myname: any) {
    this.store.push(myname.value);
    console.log(this.scheduleData);
    this.scheduleData.forEach((data: any) => {
      this.passPercentages.push(Number(data.passing));
      this.courses.push(data.code);
    });
    console.log(this.passPercentages);

    if (this.counter == 0) {
      this.showChart();
      this.counter++;
    }
  }

  // this.canvas = this.mychart.nativeElement;
  //   this.ctx = this.canvas.getContext('2d');
  //   // this.passPercentages = [2, 2, 2, 3]

  //   new Chart(this.ctx, {
  //     type: 'bar',
  //     data: {
  //       datasets: [{
  //         label: 'Pass Percentage',
  //         // data: [0, 20, 40, 50],
  //         data: this.passPercentages,
  //         backgroundColor: "rgb(115 185 243 / 65%)",
  //         borderColor: "#007ee7",
  //         // fill: true,
  //       }],
  //       labels: this.courses
  //     },
  //   });

  // @ViewChild('mychart') mychart: any;
  //   canvas: any;
  //   ctx: any;
  //   showChart() {
  //     this.canvas = this.mychart.nativeElement;
  //     this.ctx = this.canvas.getContext('2d');
  //     new Chart(this.ctx, {
  //       type: 'bar',
  //       data: {
  //         datasets: [{
  //           label: 'Pass Percentage',
  //           data: this.passPercentages,
  //           backgroundColor: "rgb(115 185 243 / 65%)",
  //           borderColor: "#007ee7",
  //         }],
  //         labels: this.courses
  //       },
  //     });
  // }

  @ViewChild('mychart') mychart: any;
  canvas: any;
  ctx: any;
  showChart() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    // this.passPercentages = [2, 2, 2, 3]
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Pass Percentage',
            // data: [0, 20, 40, 50],
            data: this.passPercentages,
            backgroundColor: '#cd2c10',
            borderColor: '#A30000',
            borderWidth: 1,
            // fill: true,
          },
        ],
        labels: this.courses,
      },
    });
  }
}
