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
  analysis: any = {};
  current_analysis: any = {};
  previous_analysis: any = {};
  current_required_analysis: any = {};
  previous_required_analysis: any = {};
  current_year = '2022-23';
  previous_year = '2020-21';
  sem_input: string = '';
  exam_input: string = '';
  exam_input_index: number = 0;
  course_codes: any = [];
  course_with_names: any = {};
  all_courses: any = {};
  all_sections = ['A', 'B', 'C', 'D', 'E'];
  all_particulars = ['D', 'C', 'B', 'A', 'S', 'Total', 'Average'];
  all_total_particulars = ['D', 'C', 'B', 'A', 'S'];
  set_marks: string = '';
  exam_input_name: string = '';
  yValues: any = [];
  y2Values: any = [];
  constructor(private dataService: DataService, private router: Router) {}
  getCurrentMarks(courseCode: any, sectionName: any, particular: any): string {
    let marks: string = ' ';
    if (this.current_required_analysis == undefined) {
      return marks;
    }
    try {
      marks = String(
        this.current_required_analysis[courseCode][sectionName][particular]
      );
      return marks;
    } catch (e) {
      console.log(e);
      marks = ' ';
    }
    if (marks == null || marks == undefined) {
      marks = ' ';
    }
    return marks;
  }

  getPreviousMarks(courseCode: any, sectionName: any, particular: any): string {
    let marks: string = ' ';
    if (this.previous_required_analysis == undefined) {
      return marks;
    }
    try {
      marks = String(
        this.previous_required_analysis[courseCode][sectionName][particular]
      );
      return marks;
    } catch (e) {
      console.log(e);
      marks = ' ';
    }
    if (marks == null || marks == undefined) {
      marks = ' ';
    }
    return marks;
  }

  getTotalParticular(sectionName: any, particular: any) {
    let totalMarks = 0;
    let num: any;
    for (let i of this.course_codes) {
      num = Number(this.getCurrentMarks(i, sectionName, particular));
      if (num == null) {
        num = 0;
      }
      totalMarks += num;
      num = 0;
    }
    return totalMarks;
  }

  initGraphs(): void {
    let course_count = 1;
    for (let course of this.course_codes) {
      let xValues: any = ['Div A', 'Div B', 'Div C', 'Div D', 'Div E'];
      let courseName: any = 'myChart1';
      let chartNumber: any = 'chartLabel1';
      let graphName = '';
      let color1 = ['#4cc9f0'];
      let color2 = ['#70e000'];
      this.yValues = [];
      this.y2Values = [];
      for (let j of this.all_sections) {
        this.yValues.push(Number(this.getCurrentMarks(course, j, 'Average')));
        this.y2Values.push(Number(this.getPreviousMarks(course, j, 'Average')));
      }
      courseName = courseName.split('');
      courseName[7] = course_count;
      courseName = courseName.join('');

      chartNumber = chartNumber.split('');
      chartNumber[10] = course_count;
      chartNumber = chartNumber.join('');
      let tempString =
        '<span class = "bold">' +
        this.course_codes[course_count - 1] +
        '</span>' +
        ' - ' +
        this.course_with_names[this.course_codes[course_count - 1]] +
        ' : Average Marks';
      // console.log(tempString);
      (<HTMLInputElement>document.getElementById(chartNumber)).innerHTML =
        tempString;

      (<HTMLInputElement>document.getElementById(courseName)).style.width =
        '400%';
      (<HTMLInputElement>document.getElementById(courseName)).style.maxWidth =
        '400px';
      (<HTMLInputElement>document.getElementById(courseName)).style.height =
        '300%';
      (<HTMLInputElement>document.getElementById(courseName)).style.maxHeight =
        '300px';
      var myChart = new Chart(courseName, {
        type: 'bar',
        data: {
          labels: xValues,
          datasets: [
            {
              label: 'Current Year 2022-23',
              backgroundColor: color1,
              data: this.yValues,
            },
            {
              label: 'Previous Year 2021-22',
              backgroundColor: color2,
              data: this.y2Values,
            },
          ],
        },
      });
      course_count += 1;
    }
  }

  ngOnInit(): void {
    this.dataService.getAnalysis().subscribe(
      (resp) => {
        this.analysis = resp;
        this.all_courses = this.analysis['course_file'];
        this.analysis = this.analysis['new_data'];
        console.log('Analysis fetched');
        console.log('Courses fetched');
        this.current_analysis = this.analysis[this.current_year];
        this.previous_analysis = this.analysis[this.previous_year];
        this.sem_input = this.dataService.in_sem_val;
        this.exam_input = this.dataService.in_exam;
        for (let i in this.all_courses[this.sem_input]) {
          this.course_codes.push(i);
          this.course_with_names[i] =
            this.all_courses[this.sem_input][i]['Name'];
        }
        console.log(this.course_codes);
        if (this.sem_input == undefined || this.exam_input == undefined) {
          this.router.navigate(['/Minor/dugc']);
        }
        if (this.exam_input == 'm1') {
          this.exam_input_index = 0;
          this.exam_input_name = 'Minor 1';
        } else if (this.exam_input == 'm2') {
          this.exam_input_index = 1;
          this.exam_input_name = 'Minor 2';
        } else {
          this.exam_input_index = 2;
          this.exam_input_name = 'Activity';
        }
        for (let i of this.course_codes) {
          try {
            this.current_required_analysis[i] =
              this.current_analysis[this.sem_input][i][this.exam_input_index];
          } catch (e) {
            console.log(e);
            this.current_required_analysis = {};
            console.log('Current year not found!');
          }
          try {
            this.previous_required_analysis[i] =
              this.previous_analysis[this.sem_input][i][this.exam_input_index];
          } catch (e) {
            this.previous_required_analysis = {};
            console.log('Previous year not found!');
          }
        }
        console.log(
          this.current_required_analysis,
          this.previous_required_analysis
        );
        this.initGraphs();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
