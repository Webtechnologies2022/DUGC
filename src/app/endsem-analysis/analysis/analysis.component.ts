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
  pData: any;
  scheduleData: any;
  passData: any;
  prevCourse: any;
  CoursePrevTemp: any;
  view: any;

  constructor(public service: ServiceService) {}
  sem = '';

  see(value: string): void {
    this.CoursePrevTemp = [];
    this.temp = [];
    this.passData = [];
    this.sem = value;

    if (this.sem == 'sem3') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem3;

      //for total passing percentage
      this.pData = this.service.getTotalPassPercentage();
      this.passData = this.pData.default.sem3;
      this.temp.push(this.passData);
      console.log(this.passData);

      //for corse previous year
      this.prevCourse = this.service.getCoursePreviousData();
      // console.log("here" + this.prevCourse.default);
      this.view = this.prevCourse.default.sem3;
      console.log('here' + this.view);

      for (let i = 0; i < 20; i++) {
        this.CoursePrevTemp.push(this.view[i]);
      }
    }

    if (this.sem == 'sem4') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem4;
      this.pData = this.service.getTotalPassPercentage();
      this.passData = this.pData.default.sem4;
      this.temp.push(this.passData);
      console.log(this.passData);

      //for corse previous year
      this.prevCourse = this.service.getCoursePreviousData();
      // console.log("here" + this.prevCourse.default);
      this.view = this.prevCourse.default.sem4;
      console.log('here' + this.view);

      for (let i = 0; i < 20; i++) {
        this.CoursePrevTemp.push(this.view[i]);
      }
    }
    if (this.sem == 'sem5') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem5;
      this.pData = this.service.getTotalPassPercentage();
      this.passData = this.pData.default.sem5;
      this.temp.push(this.passData);
      console.log(this.passData);

      this.prevCourse = this.service.getCoursePreviousData();
      // console.log("here" + this.prevCourse.default);
      this.view = this.prevCourse.default.sem5;
      console.log('here' + this.view);

      for (let i = 0; i < 20; i++) {
        this.CoursePrevTemp.push(this.view[i]);
      }
    }
    if (this.sem == 'sem6') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem6;
      this.pData = this.service.getTotalPassPercentage();
      this.passData = this.pData.default.sem6;
      this.temp.push(this.passData);
      console.log(this.passData);

      this.prevCourse = this.service.getCoursePreviousData();
      // console.log("here" + this.prevCourse.default);
      this.view = this.prevCourse.default.sem6;
      console.log('here' + this.view);

      for (let i = 0; i < 20; i++) {
        this.CoursePrevTemp.push(this.view[i]);
      }
    }

    if (this.sem == 'sem7') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem7;
      this.pData = this.service.getTotalPassPercentage();
      this.passData = this.pData.default.sem7;
      this.temp.push(this.passData);
      console.log(this.passData);

      this.prevCourse = this.service.getCoursePreviousData();
      // console.log("here" + this.prevCourse.default);
      this.view = this.prevCourse.default.sem7;
      console.log('here' + this.view);

      for (let i = 0; i < 20; i++) {
        this.CoursePrevTemp.push(this.view[i]);
      }
    }
    if (this.sem == 'sem8') {
      this.sData = this.service.getCourseData();
      this.scheduleData = this.sData.default.sem8;
      this.pData = this.service.getTotalPassPercentage();
      this.passData = this.pData.default.sem8;
      this.temp.push(this.passData);
      console.log(this.passData);

      this.prevCourse = this.service.getCoursePreviousData();
      // console.log("here" + this.prevCourse.default);
      this.view = this.prevCourse.default.sem8;
      console.log('here' + this.view);

      for (let i = 0; i < 20; i++) {
        this.CoursePrevTemp.push(this.view[i]);
      }
    }
  }
  passPercentages: any = [];
  courses: any = [];
  store: string[] = [];
  myname: any = [];
  content: number = 0;
  counter = 0;
  pt: any;
  temp: any = [];
  check: boolean = false;
  er: boolean = true;
  isPasspercentageNull: boolean = false;
  i = 0;
  data: any;
  colorstemp: any = [];
  indextemp: number = 0;
  // name = ""

  onClick(myname: any) {
    // try{
    //   if(this.passPercentages.length == this.service.getCourseData()[this.sem].length){
    //     this.passPercentages = []
    //   }
    // }catch(Error){
    //   alert("Please choose a semester.")
    //   return
    // }

    // console.log(this.service.getCourseData()[this.sem].length)

    console.log('pass percentage', this.passPercentages.length);

    // if(this.passPercentages.length >= this.service.getCourseData()[this.sem].length){
    //   this.passPercentages = []
    // }

    this.courses = [];
    var chartExist1 = Chart.getChart('myChart1');
    if (chartExist1 != undefined) chartExist1.destroy();
    var chartExist = Chart.getChart('myChart');
    if (chartExist != undefined) chartExist.destroy();

    if (this.temp.length == 2) {
      this.temp.pop();
    }
    if (!this.pt) {
      alert('Please, Enter Total Percentage Value.');
      return;
    }
    this.store = [];
    this.check = true;
    this.store.push(myname.value);
    console.log(this.scheduleData);

    this.temp.push(this.pt);
    console.log(this.temp);
    this.isPasspercentageNull = false;
    //
    // this.scheduleData.forEach(data => {
    //   this.passPercentages.push(Number(data.passing))
    //   this.courses.push(data.code)
    // })

    for (this.data of this.scheduleData) {
      if (isNaN(this.data.passing) || this.data.passing === 0) {
        alert('Please, enter passing percentage of all course.');
        this.passPercentages = [];
        return;
      }
      this.passPercentages.push(Number(this.data.passing));
      this.courses.push(this.data.code);
    }

    for (let i = 0; i < this.passPercentages.length; i++) {
      // console.log(this.cie[i],this.attendance[i])
      if (Number(this.passPercentages[i]) <= 0) {
        alert('Negative percentges are not allowed.');
        return;
      }
    }

    for (let i = 0; i < this.passPercentages.length; i++) {
      // console.log(this.cie[i],this.attendance[i])
      if (Number(this.passPercentages[i]) <= 50) {
        console.log('Less than 50 percemtage' + this.passPercentages[i]);
        this.indextemp = i;
        console.log('Less than 50 percemtage ' + i);
        this.colorstemp[i] = 'rgb(163, 0, 0)';
        console.log('here : ' + this.indextemp);
      } else {
        this.colorstemp[i] = 'rgb(76, 201, 240)';
      }
    }

    console.log(this.passPercentages);
    console.log('hi ' + this.store);
    // if (this.counter == 0 ) {
    this.showChart();
    this.showChart1();

    // this.check = true;
    // this.store.push(myname.value);
    // console.log(this.scheduleData);

    // this.temp.push(this.pt)
    // console.log(this.temp)

    //   this.scheduleData.forEach((data: any) => {
    //   this.passPercentages.push(Number(data.passing));
    //   this.courses.push(data.code);
    // });

    // console.log(this.passPercentages);

    // if (this.counter == 0) {
    //   this.showChart();
    //   this.showChart1();
    //   this.counter++;
    // }
  }

  @ViewChild('mychart') mychart: any;
  canvas: any;
  ctx: any;
  showChart() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    let delayed1: any;
    // this.passPercentages = [2, 2, 2, 3]
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Current Year Pass Percentage',
            // data: [0, 20, 40, 50],
            data: this.passPercentages,
            backgroundColor: this.colorstemp,
            // '#cd2c10',
            // borderColor: '#A30000',
            borderWidth: 1,
            maxBarThickness: 30,
            // fill: true,
          },
          {
            label: 'Previous Year Pass Percentage',
            // data: [0, 20, 40, 50],
            data: this.CoursePrevTemp,
            // barThickness:25,
            maxBarThickness: 30,
            backgroundColor: 'rgb(112, 224, 0)',
            // borderColor: "#A30000",
            borderWidth: 1,
            // fill: true,
          },
        ],
        labels: this.courses,
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Course passing Percentage',
          },
        },
        animation: {
          onComplete: () => {
            delayed1 = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === 'this.temp' &&
              context.mode === 'default' &&
              !delayed1
            ) {
              delay = context.dataIndex * 150 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
        scales: {
          y: {
            display: true,
            title: {
              display: true,
              text: 'Percentages',
              color: '#80000',
              // font: {
              //   family: 'Times',
              //   size: 20,
              //   style: 'normal',
              //   lineHeight: 1.2
              // },
            },
          },
        },
      },
    });
  }

  @ViewChild('mychart1') mychart1: any;
  // canvas: any;
  // ctx: any;
  showChart1() {
    this.canvas = this.mychart1.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    let delayed: any;
    // this.passPercentages = [2, 2, 2, 3]
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Total Passing Percentage',
            // data: [0, 20, 40, 50],
            data: this.temp,
            backgroundColor: ['rgb(76, 201, 240)', 'rgb(112, 224, 0)'],
            // "#cd2c10",
            // borderColor: "#A30000",
            borderWidth: 1,
            maxBarThickness: 30,
            // fill: true,
          },
        ],
        labels: ['Previous year', 'This year'],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Total passing Percentage',
          },
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === 'this.temp' &&
              context.mode === 'default' &&
              !delayed
            ) {
              delay = context.dataIndex * 150 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
        scales: {
          y: {
            display: true,
            title: {
              display: true,
              text: 'Percentages',
              color: '#80000',
              // font: {
              //   family: 'Times',
              //   size: 20,
              //   style: 'normal',
              //   lineHeight: 1.2
              // },
            },
          },
        },
      },
    });
  }
}
