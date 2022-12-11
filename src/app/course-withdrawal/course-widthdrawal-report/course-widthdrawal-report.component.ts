import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from '../services/students.service';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-course-widthdrawal-report',
  templateUrl: './course-widthdrawal-report.component.html',
  styleUrls: ['./course-widthdrawal-report.component.css'],
})
export class CourseWidthdrawalReportComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private studentService: StudentsService
  ) {}
  students: any;
  sno: number = 1;
  selectedSem = '';
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data: any) => {
      this.students = data;
    });
  }

  printReport() {
    window.print();
  }

  incrementSno() {
    this.sno += 1;
  }

  resetSno() {
    this.sno = 1;
  }
  stud: any;
  studentsOfSelectedSem: any = [];
  courseCode: any = new Set();
  courseName: any = new Set();
  i = 0;
  c: number = 0;
  getSemReport(selectedSem: string) {
    this.courseCode = new Set();
    this.courseName = new Set();
    console.log(selectedSem);
    this.selectedSem = selectedSem;
    for (this.stud of this.students) {
      if (this.stud.status == 'approved') {
        if (this.stud.sem == selectedSem) {
          console.log(this.stud);
          this.studentsOfSelectedSem.push(this.stud);
          for (
            this.c = 0;
            this.c < this.stud.selectedCourseToWithdraw.length;
            this.c++
          ) {
            this.courseCode.add(
              this.stud.selectedCourseToWithdraw[this.c].code
            );
            this.courseName.add(
              this.stud.selectedCourseToWithdraw[this.c].name
            );
          }
        }
        this.i++;
      }
    }
    this.courseCode = Array.from(this.courseCode);
    this.courseName = Array.from(this.courseName);

    console.log(this.courseCode);
    console.log(this.courseName);

    this.i = 0;
  }

  startSpaces = 0;
  trailSpaces = 0;
  getPosition(course: any) {
    this.startSpaces = this.courseCode.indexOf(course.code);
    // console.log("startSpace",this.startSpaces)

    this.trailSpaces = this.courseCode.length - this.startSpaces - 1;
  }

  counter(i: number) {
    return new Array(i);
  }
}
