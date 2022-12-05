import { Component, OnInit } from '@angular/core';
import { GetAnalysisService } from '../get-analysis.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import Chart from 'chart.js/auto';
import { DxChartModule } from 'devextreme-angular';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  exam_val: any;
  exam_val2: any; // do not use this in further code
  sem_val: any;
  this_year: any = '2022-23';
  prev_year: any = '2020-21';

  sections: any = ['A', 'B', 'C', 'D', 'E'];
  exams: any = ['Minor 1', 'Minor 2', 'Activity'];
  analysis1: any = {}; // this_year data
  analysis2: any = {}; // prev_year data
  analysis: any = {};
  tempanalysis: any = {};
  tempanalysis2: any = {};
  temparr: any = {};
  temparr2: any = {};
  sno: any = 0;
  exam_index: any = 0;

  yValues: any = [];
  y2Values: any = [];

  course_count: number = 0;
  course_codes: any = [];
  content: any = {
    a1: [' ', ' ', ' ', ' ', ' '],
    a2: [' ', ' ', ' ', ' ', ' '],
    a3: [' ', ' ', ' ', ' ', ' '],
    a4: [' ', ' ', ' ', ' ', ' '],
    a5: [' ', ' ', ' ', ' ', ' '],
    aT: [' ', ' ', ' ', ' ', ' '],
    avg: [' ', ' ', ' ', ' ', ' '],
    pre: [' ', ' ', ' ', ' ', ' '],
  };
  content_array: any = [];
  div_count: number = 0;
  runThis() {
    this.analysis1 = this.analysis1[this.sem_val];
    this.analysis2 = this.analysis2[this.sem_val];
    console.log(this.analysis1);
    console.log(this.analysis2);
  }
  constructor(private dataService: DataService, private router: Router) {
    this.sem_val = this.dataService.in_sem_val;
    this.exam_val = this.dataService.in_exam;
    if (this.exam_val === 'm1') {
      this.exam_val2 = 'Minor 1';
    } else if (this.exam_val === 'm2') {
      this.exam_val2 = 'Minor 2';
    }
  }

  ngOnInit(): void {
    this.dataService.getAnalysis().subscribe((resp) => {
      this.analysis = resp;
      console.log(this.sem_val);
      this.analysis1 = this.analysis['new_data'][this.this_year][this.sem_val];
      console.log(this.analysis1);
      this.analysis2 = this.analysis['new_data'][this.prev_year][this.sem_val];
      this.content_array = [];
      for (let [i, j] of Object.entries(this.analysis1)) {
        this.course_codes.push(i);
        this.course_count = this.course_count + 1;
        if (this.exam_val == 'm1') {
          this.exam_index = 0;
        } else if (this.exam_val == 'm2') {
          this.exam_index = 1;
        } else if (this.exam_val == 'Activity') {
          this.exam_index = 1;
        } else {
          this.exam_val = 0;
        }
        this.tempanalysis = this.analysis1[i][this.exam_index];
        console.log(this.tempanalysis);
        this.tempanalysis2 = this.analysis2[i][this.exam_index];
        this.div_count = 0;
        for (let [k, l] of Object.entries(this.tempanalysis)) {
          console.log(k);
          console.log(l);
          this.temparr = this.tempanalysis[k];
          this.temparr2 = this.tempanalysis2[k];
          this.content.a1[this.div_count] = String(this.temparr['D']);
          this.content.a2[this.div_count] = String(this.temparr['C']);
          this.content.a3[this.div_count] = String(this.temparr['B']);
          this.content.a4[this.div_count] = String(this.temparr['A']);
          this.content.a5[this.div_count] = String(this.temparr['S']);
          this.content.aT[this.div_count] = String(this.temparr['Total']);
          this.content.avg[this.div_count] = String(this.temparr['Average']);
          this.content.pre[this.div_count] = String(this.temparr2['Average']);
          this.div_count = this.div_count + 1;
        }
        this.content_array.push(Object.assign({}, this.content));
        console.log(this.content_array);
        console.log('hihihi');
        console.log(this.content.avg);
        this.yValues = this.content.avg;
        this.y2Values = this.content.pre;
        this.content.a1 = [' ', ' ', ' ', ' ', ' '];
        this.content.a2 = [' ', ' ', ' ', ' ', ' '];
        this.content.a3 = [' ', ' ', ' ', ' ', ' '];
        this.content.a4 = [' ', ' ', ' ', ' ', ' '];
        this.content.a5 = [' ', ' ', ' ', ' ', ' '];
        this.content.aT = [' ', ' ', ' ', ' ', ' '];
        this.content.avg = [' ', ' ', ' ', ' ', ' '];
        this.content.pre = [' ', ' ', ' ', ' ', ' '];

        // for(let o in this.yValues) {
        //   try {
        //     this.yValues[o] = parseFloat(this.yValues[o]);
        //   }
        //   catch(err) {
        //     this.yValues[o] = 0;
        //   }
        // }
        // for(let o in this.y2Values) {
        //   try {
        //     this.y2Values[o] = parseFloat(this.y2Values[o]);
        //   }
        //   catch(err) {
        //     this.y2Values[o] = 0;
        //   }
        // }
        let xValues: any = ['A', 'B', 'C', 'D', 'E'];
        let courseName: any = 'myChart1';
        let chartNumber: any = 'chartLabel1';
        let graphName = '';
        let color1 = ['#4cc9f0'];
        let color2 = ['#70e000'];

        courseName = courseName.split('');
        courseName[7] = this.course_count;
        courseName = courseName.join('');

        chartNumber = chartNumber.split('');
        chartNumber[10] = this.course_count;
        chartNumber = chartNumber.join('');
        let tempString =
          this.course_codes[this.course_count - 1] + ' : Average Marks';
        // console.log(tempString);
        (<HTMLInputElement>document.getElementById(chartNumber)).innerHTML =
          tempString;

        (<HTMLInputElement>document.getElementById(courseName)).style.width =
          '400%';
        (<HTMLInputElement>document.getElementById(courseName)).style.maxWidth =
          '400px';
        (<HTMLInputElement>document.getElementById(courseName)).style.height =
          '300%';
        (<HTMLInputElement>(
          document.getElementById(courseName)
        )).style.maxHeight = '300px';
        var myChart = new Chart(courseName, {
          type: 'bar',
          data: {
            labels: xValues,
            datasets: [
              {
                label: 'Current Year',
                backgroundColor: color1,
                data: this.yValues,
              },
              {
                label: 'Previous Year',
                backgroundColor: color2,
                data: this.y2Values,
              },
            ],
          },
        });
      }
    });
  }
}
