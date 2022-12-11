import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { LabService } from '../../services/lab.service';
import  * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-uploadlist3',
  templateUrl: './uploadlist3.component.html',
  styleUrls: ['./uploadlist3.component.css']
})
export class Uploadlist3Component implements OnInit {
  ExelData:any;
  exeldata:any;
  
  constructor(private studentService:StudentsService,private labService:LabService,
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
  if(!this.exeldata)
  {
    this.toast.error("cannot upload empty data");
  }
  else
  {
 this.labService.uploadlist(this.exeldata).subscribe((data:any)=>
 {
  console.log('students are added',data);
  this.toast.success("uploaded successfully");
},err=>
{
  console.log(err);
  this.toast.error("server error cannot add student list");
})
}
}


}