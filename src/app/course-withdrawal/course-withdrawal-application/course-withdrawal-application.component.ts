import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from '../services/students.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import * as allcourses from '../../../../backend/server/data_files/courses_with_credits.json'

@Component({
  selector: 'app-course-withdrawal-application',
  templateUrl: './course-withdrawal-application.component.html',
  styleUrls: ['./course-withdrawal-application.component.css'],
})
export class CourseWithdrawalApplicationComponent implements OnInit {
 
  allCourses: any = (allcourses as any).default;
  studentName: string;
  // semester: string  selectedSem
  srn: string;
  rno: string;
  div: string;
  reason: string;

  selectedSemCourses: any = [];
  selectedCourses: any = [];
  sem: any;
  courses: any;
  selectedSem: any = '';
  totalCredits = 0;
  totalCreditsForSem = 0
  constructor(
    private http: HttpClient,
    private studentService: StudentsService,
    private toastr: ToastrService
  ) {
    this.studentName = '';
    // this.semester = ""
    this.srn = '';
    this.rno = '';
    this.div = '';
    this.reason = '';
  }
  ngOnInit(): void {
  }

  // getSemCourses(){
  //   this.selectedCourses = []
  //   this.totalCredits = 0
  //   console.log(this.selectedSem)

  //   this.allCourses.forEach(sem =>{
  //     if(sem.sem == Number(this.selectedSem)){
  //       this.selectedSemCourses = sem.courses
  //     }
  //   })
  //   this.displayCourses()
  // }

  // loadCourses(){
  //   this.allCourses = allcourses;
  //   console.log('Done Loading data.');
  //   console.log(this.allCourses);

  // }
  getSemCourses(selectedSem: string) {
    this.selectedSem = selectedSem;
    this.selectedCourses = [];
    this.totalCredits = 0;
    console.log(selectedSem);

    this.allCourses.forEach((sem:any) => {
      if (sem.sem == Number(selectedSem)) {
        this.selectedSemCourses = sem.courses;
      }
    });
    this.totalCreditsForSem = 0;
    this.displayCourses();
  }

  // totalCreditsForSem = 0;
  course: any;
  displayCourses() {
    for (this.course of this.selectedSemCourses) {
      console.log(this.course.name);
      this.totalCreditsForSem += Number(this.course.credits);
    }
    console.log(
      `Total Credits of selected sem is ${
        this.totalCreditsForSem
      }. And allowed is ${this.totalCreditsForSem - 16}`
    );
  }

  selectedCourse(event: any, course: any) {
    // if (event.target.checked) {
    //   if (this.totalCredits + Number(course.credits) > 6) {
    //     this.toastr.error('Invalid Operation', 'Credits Allowed are 6.');
    //     event.target.checked = false;
    //   } else {
    //     this.totalCredits += Number(course.credits);
    //     this.selectedCourses.push(course);
    //   }
    // } else {
    //   let index = this.selectedCourses.indexOf(course);
    //   this.selectedCourses.splice(index, 1);
    //   this.totalCredits -= Number(course.credits);
    // }

    if (event.target.checked) {
      console.log(`totalcreditsforsem ${this.totalCreditsForSem}`);
      console.log(`totalcredits ${this.totalCredits}`);
      if (
        this.totalCredits + Number(course.credits) >
        this.totalCreditsForSem - 16
      ) {
        this.toastr.error(
          'Invalid Operation',
          'Credits should not be less than 16.'
        );
        event.target.checked = false;
      } else {
        this.totalCredits += Number(course.credits);
        this.selectedCourses.push(course);
      }
    } else {
      let index = this.selectedCourses.indexOf(course);
      this.selectedCourses.splice(index, 1);
      this.totalCredits -= Number(course.credits);
    }
  }
  details: any;
  sc: any = [];
  s: any;
  attendance: number[] = [];
  // ia1: any = [];
  // ia2: any = [];
  cie: number[] = [];
  submitDetails(form: NgForm) {

    if(this.studentName.length == 0 || this.srn.length == 0 || this.rno.length ==0 || this.div.length == 0 || this.selectedSem.length == 0 || this.reason.length == 0){
      this.toastr.error('Empty Text Fields', 'Text fields cannot be empty.');
      return
    }

    if(this.selectedCourses.length == 0){
      this.toastr.error('Select Course', 'Select course(s) to withdraw.');
      return;
    }
    for(let i = 0; i < this.selectedCourses.length; i++){
      console.log(this.cie[i],this.attendance[i])
      if(isNaN(this.cie[i]) || isNaN(this.attendance[i])){
        this.toastr.error('Empty CIE or Attendace', 'CIE marks or Attendance cannot be blank.');
        return;
      }
      if(Number(this.cie[i]) <= 0){
      this.toastr.error('Negative Input', 'CIE marks cannot be less than or equal to 0.');
        return;
      }
      if(Number(this.attendance[i]) <= 0){
      this.toastr.error('Negative Input', 'Attendance cannot be less than or equal to 0.');

        return;
      }
    }

    console.log(this.selectedCourses);
    for (let i = 0; i < this.selectedCourses.length; i++) {
      this.sc.push({
        name: this.selectedCourses[i].name,
        code: this.selectedCourses[i].code,
        credits: this.selectedCourses[i].credits,
        attendance: this.attendance[i],
        cie: this.cie[i]
        // isa1: this.ia1[i],
        // isa2: this.ia2[i],
      });
    }


    this.details = {
      name: this.studentName,
      sem: this.selectedSem,
      srn: this.srn.toUpperCase(),
      rollNo: this.rno,
      division: this.div,
      selectedCourseToWithdraw: this.sc,
      status: 'pending',
      reason: this.reason,
    };
    this.toastr.success('Success', 'Application submitted successful.');

    this.studentService.insertStudent(this.details).subscribe((data) => {
      console.log(data);
    });
    // this.http.post<any>('http://localhost:8080/add-student', this.details);
    // this.http.post('http://localhost:8080/add-student', this.details).subscribe((error)=>{
    //   if(error) throw error;
    //   alert('Details added.')
    // })
    console.log(
      `${this.studentName} from ${this.selectedSem} semester wants to withdraw course. His SRN is ${this.srn} and his roll no is ${this.rno} belongs to ${this.div} divison. Because ${this.reason}`
    );

    this.resetData(form)
  }


  resetData(form:NgForm){
    form.resetForm()
    this.selectedCourses = []
    this.sc = []
  }
}
