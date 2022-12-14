import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dugc-chairman',
  templateUrl: './dugc-chairman.component.html',
  styleUrls: ['./dugc-chairman.component.css'],
})
export class DugcChairmanComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  inp: any = {
    semester: '',
    course_code: '',
    course_name: '',
    cred1: '',
    cred2: '',
    cred3: '',
  };
  courses: any = {};
  course_codes: any = [];
  sem_numbers = [3, 4, 5, 6, 7, 8];
  sem_names = ['three', 'four', 'five', 'six', 'seven', 'eight'];
  statusMessage = '';
  onSubmit(): void {
    console.log("You've called the onclick function.");
    console.log(this.inp);
    // const temp_inp = (({ semester, course_code, course_name }) => ({ semester, course_code, course_name }))(this.inp);
    this.dataService.createCourse(this.inp).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  validateDuplicate(): boolean {
    for (let i in this.course_codes) {
      if (this.inp.course_code == this.course_codes[i]) {
        return true;
      }
    }
    return false;
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
    this.initializeCourses();

    if (!this.validateInput()) {
      this.statusMessage = 'ERROR: Invalid or missing field(s)';
      console.log(this.inp);
    } else if (this.validateDuplicate()) {
      this.statusMessage = 'ERROR: Course code already exists';
      this.toastr.error('Course code error', 'Course code already exist');
      console.log(this.inp);
    } else {
      this.statusMessage = '';
      this.onSubmit();
      this.toastr.success('Course added', this.inp.course_code);
      this.initializeCourses();
    }
  }
  initializeCourses(): void {
    this.dataService.getCourses().subscribe((resp) => {
      this.courses = resp;
      this.courses = this.courses.course_file;
      for (let [i, j] of Object.entries(this.courses)) {
        for (let [k, l] of Object.entries(this.courses[i])) {
          this.course_codes.push(`${k}`);
        }
      }
      console.log('Courses initialized');
    });
  }
  resetForm(): void {
    this.inp = {
      academic_year: '2022-23',
      sem_type: '',
      semester: '',
      course: '',
      exam: '',
      section: '',
      filename: '',
    };
    this.statusMessage = '';
  }

  ngOnInit(): void {
    this.initializeCourses();
  }
}
