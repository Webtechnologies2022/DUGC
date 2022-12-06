import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { LabService } from '../services/lab.service';
import  * as XLSX from 'xlsx';


@Component({
  selector: 'app-upload-student',
  templateUrl: './upload-student.component.html',
  styleUrls: ['./upload-student.component.css']
})
export class UploadStudentComponent implements OnInit {

  ExelData:any;
  exeldata:any;
  
  constructor() { }

  ngOnInit(): void {
  }

    //read xl file to store data in json

}


