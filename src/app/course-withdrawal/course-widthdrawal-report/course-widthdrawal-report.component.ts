import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from '../services/students.service';
@Component({
  selector: 'app-course-widthdrawal-report',
  templateUrl: './course-widthdrawal-report.component.html',
  styleUrls: ['./course-widthdrawal-report.component.css']
})
export class CourseWidthdrawalReportComponent implements OnInit {

  constructor(private http:HttpClient, private studentService:StudentsService) { }
  students: any
  sno:number = 1
  selectedSem = ""
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data:any)=>{
      this.students = data;
    })
  }

  printReport(){
    window.print();
  }

  incrementSno(){
    this.sno+=1;
  }

  resetSno(){
    this.sno = 1;
  }

  getSemReport(selectedSem:string){
    console.log(selectedSem)
    this.selectedSem = selectedSem
  }
}
