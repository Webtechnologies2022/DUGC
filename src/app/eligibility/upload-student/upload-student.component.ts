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
  
  constructor(private studentService:StudentsService,private labService:LabService) { }

  ngOnInit(): void {
  }

    //read xl file to store data in json
readfile(event:any)
{
  let file = event.target.files[0];
  let fileReader = new FileReader();

  fileReader.readAsBinaryString(file);

  fileReader.onload=(e)=>
  {
    var workbook = XLSX.read(fileReader.result,{type:'binary'});  
    var sheetNames = workbook.SheetNames;
   this.ExelData= XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
    console.log(this.ExelData);
  }

  
}
readfile2(event:any)
{
  let file = event.target.files[0];
  let fileReader = new FileReader();

  fileReader.readAsBinaryString(file);

  fileReader.onload=(e)=>
  {
    var workbook = XLSX.read(fileReader.result,{type:'binary'});  
    var sheetNames = workbook.SheetNames;
   this.exeldata= XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
    console.log(this.exeldata);
  }

}

//upload captured json to database 
uploadstudent()
{
  this.studentService.uploadlist(this.exeldata).subscribe((data)=>
  {
    console.log('students are added',data);
  },err=>
  {
    console.log(err);
  })
}

uploadstudentlab()
{
 this.labService.uploadlist(this.exeldata).subscribe((data:any)=>
 {
  console.log('students are added',data);
},err=>
{
  console.log(err);
})
 
}

}


