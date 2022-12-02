import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import { StatusService } from '../status.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consolidated-sheet-upload',
  templateUrl: './consolidated-sheet-upload.component.html',
  styleUrls: ['./consolidated-sheet-upload.component.css'],
})
export class ConsolidatedSheetUploadComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private toastr: ToastrService,
    private statusService: StatusService,
    private router: Router
  ) {}
  inp: any = {
    academic_year: '2022-23',
    sem_type: '',
    semester: '',
    course: '',
    exam: '',
    filename: '',
  };
  selectedCourse = {
    course_code: {
      Name: '',
      'Minor 1': 'Yes',
      'Minor 2': 'Yes',
      Activity: 'Yes',
    },
  };
  coursesWithNames: any = {
    course_code: 'Course_name',
  };
  sections: any = ['A', 'B', 'C', 'D', 'E'];
  exams: any = ['Minor 1', 'Minor 2', 'Activity'];
  analysis: any = {};
  statusMessage = '';
  courses: any = [];
  changeCourses(): void {
    try {
      this.selectedCourse = this.courses[this.inp.semester];
      console.log(this.selectedCourse);
    } catch (c) {
      console.log(c);
    }
  }
  onSubmit(): void {
    console.log("You've called the submit function.", this.inp);
    this.dataService.uploadMultipleSheets(this.inp).subscribe(
      (resp) => {
        console.log(resp);
        this.statusService.isUploaded = true;
        this.statusService.isConsolidated = true;
        this.statusService.setResult(resp);
        this.router.navigate(['/Minor/coordinator/upload_status']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  validateInput(): boolean {
    for (let i in this.inp) {
      if (this.inp[i] == ' ' || !this.inp[i]) {
        return false;
      }
    }
    return true;
  }
  submitForm(): void {
    if (!this.validateInput()) {
      this.statusMessage = 'ERROR: Invalid or missing field(s)';
    } else {
      this.statusMessage = '';
      this.onSubmit();
    }
  }
  resetForm(): void {
    this.inp = {
      academic_year: '2022-23',
      sem_type: '',
      semester: '',
      course: '',
      exam: '',
      filename: '',
    };
    this.statusMessage = '';
  }

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
        this.analysis['new_data'][this.inp.academic_year][this.inp.semester][
          this.inp.course
        ][exam_index][section];
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
        this.toastr.error('Cannot connect to server', 'Server error!');
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
  }
}
