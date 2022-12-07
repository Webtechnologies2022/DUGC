import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent implements OnInit {

  students:any;
  sno:number = 1
  constructor(private httpClient: HttpClient, private studentService: StudentsService) { }

  ngOnInit(): void {
    this.getAllStudents()
  }

  getAllStudents(){
    // this.httpClient.get(this.url).subscribe(response => {
    //   this.students = response
    // })
    this.studentService.getAllStudents().subscribe((data:any)=>{
      this.students = data;
      console.log(this.students)
      this.students = this.students;
      console.log(this.students[0].selectedCourseToWithdraw[0].name);
    })
  }
  approve(id:any){
    this.studentService.updateStudent(id, {status:'approved'}).subscribe((data)=>{
      console.log(data)
      alert('Approved')
    this.getAllStudents()

    })
  }
  
  reject(id:any){
    this.studentService.updateStudent(id, {status:'rejected'}).subscribe((data)=>{
      console.log(data)
      alert('Rejected')
    this.getAllStudents()

    })
  }

  incrementSno(){
    this.sno+=1;
  }

  resetSno(){
    this.sno = 1;
  }
}
