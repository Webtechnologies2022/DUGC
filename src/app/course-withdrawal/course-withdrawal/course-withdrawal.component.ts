import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { HttpClient } from '@angular/common/http';
import { Int32 } from 'mongodb';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-course-withdrawal',
  templateUrl: './course-withdrawal.component.html',
  styleUrls: ['./course-withdrawal.component.css'],
})
export class CourseWithdrawalComponent implements OnInit {
  students: any;
  sno: number = 1;
  constructor(
    private httpClient: HttpClient,
    private studentService: StudentsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    // this.httpClient.get(this.url).subscribe(response => {
    //   this.students = response
    // })
    this.studentService.getAllStudents().subscribe((data: any) => {
      this.students = data;
      // console.log(this.students)
      // this.students = this.students;
      // console.log(this.students[0].selectedCourseToWithdraw[0].name);
    });
  }
  approve(id: any) {
    this.studentService
      .updateStudent(id, { status: 'approved' })
      .subscribe((data) => {
        console.log(data);
        this.toastr.success('Operation successful', 'Approved');
        this.getAllStudents();
      });
  }

  reject(id: any) {
    this.studentService
      .updateStudent(id, { status: 'rejected' })
      .subscribe((data) => {
        console.log(data);
        this.toastr.success('Operation successful', 'Rejected');
        this.getAllStudents();
      });
  }

  incrementSno() {
    this.sno += 1;
  }

  resetSno() {
    this.sno = 1;
  }
}
