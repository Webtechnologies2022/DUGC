import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { LabService } from '../../services/lab.service';
import  * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-uploadlist2',
  templateUrl: './uploadlist2.component.html',
  styleUrls: ['./uploadlist2.component.css']
})
export class Uploadlist2Component implements OnInit {

  ExelData:any;
  exeldata:any;
  
  constructor(private studentService:StudentsService,
              private labService:LabService,
              private toast:ToastrService) { }

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
  if(!this.ExelData)
  {
    this.toast.error("cannot upload empty data");
  }
  else
  {
  this.studentService.uploadlist(this.ExelData).subscribe((data)=>
  {
    console.log('students are added',data);
    this.toast.success("student marks uploaded successfully");
  },err=>
  {
    console.log(err);
    this.toast.error("server error cannot add student list");
  })
}
}

uploadstudentlab()
{
 this.labService.uploadlist(this.exeldata).subscribe((data:any)=>
 {
  console.log('students are added',data);
  this.toast.success("student list for lab fetched uploaded");
},err=>
{
  console.log(err);
  this.toast.error("server error cannot add student list");
})
 
}



}
