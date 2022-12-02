import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-result',
  templateUrl: './upload-result.component.html',
  styleUrls: ['./upload-result.component.css'],
})
export class UploadResultComponent implements OnInit {
  result: any = {
    academic_year: '',
    course: '',
    exam: '',
    filename: '',
    read_result: {
      Average: '',
      S_grade: '',
      A_grade: '',
      B_grade: '',
      C_grade: '',
      D_grade: '',
      total: '',
    },
    read_result_array: [
      {
        Average: '',
        S_grade: '',
        A_grade: '',
        B_grade: '',
        C_grade: '',
        D_grade: '',
        total: '',
      },
    ],
    section: '',
    sem_type: '',
    semester: '',
  };
  sections: any = ['A', 'B', 'C', 'D', 'E'];
  exams: any = ['Minor 1', 'Minor 2', 'Activity'];
  analysis: any = {};
  coursesWithNames: any = {
    course_code: 'Course_name',
  };
  courses: any = {};
  isConsolidated: boolean = false;
  constructor(
    private statusService: StatusService,
    private dataService: DataService,
    private toastr: ToastrService
  ) {}
  isComplete(exam: any, section: any): boolean {
    try {
      let exam_index: number = 0;
      if (exam == 'Minor 1') {
        exam_index = 0;
      } else if (exam == 'Minor 2') {
        exam_index = 1;
      } else {
        exam_index = 2;
      }
      let data =
        this.analysis['new_data'][this.result.academic_year][
          this.result.semester
        ][this.result.course][exam_index][section];
      if (data == '' || !data) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }
  ngOnInit(): void {
    this.dataService.getCourses().subscribe(
      (resp) => {
        this.courses = resp;
        this.courses = this.courses.course_file;
        console.log('Courses initialized.');
        for (const [i, j] of Object.entries(this.courses)) {
          for (const [k, l] of Object.entries(this.courses[i])) {
            this.coursesWithNames[k] = this.courses[i][k]['Name'];
          }
        }
      },
      (error) => {
        this.toastr.error('Cannot connect to the server.', 'Server error!');
      }
    );
    this.dataService.getAnalysis().subscribe(
      (res) => {
        this.analysis = res;
        console.log('Analysis initialized');
      },
      (error) => {
        this.toastr.error('Cannot connect to the server.', 'Server error!');
      }
    );
    this.isConsolidated = this.statusService.isConsolidated;
    this.result = this.statusService.result;
  }
}
