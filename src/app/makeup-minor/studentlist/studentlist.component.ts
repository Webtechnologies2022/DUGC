import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StudentsService} from '../services/students.service'
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  sno:number = 1
  printReport(){
    window.print();
  }

  incrementSno(){
    this.sno+=1;
  }

  resetSno(){
    this.sno = 1;
  }
selectedSem: any;
students: any
getSemReport(arg0: string) {
  this.selectedSem = arg0
}

  constructor(private http:HttpClient, private studentService:StudentsService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data:any)=>{
      this.students = data;
      console.log(data)
    })

  }

}
