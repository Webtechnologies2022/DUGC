import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-upload5',
  templateUrl: './upload5.component.html',
  styleUrls: ['./upload5.component.css']
})
export class Upload5Component implements OnInit {
  ExcelData:any;
  constructor() { }

  ngOnInit(): void {
  }
  ReadExcel(event:any)
  {
    let file=event.target.files[0];

    let fileReader= new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e)=>{
      var workBook=XLSX.read(fileReader.result,{type:'binary'});
      var sheetNames = workBook.SheetNames;
      this.ExcelData=XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
      console.log(this.ExcelData)

    }
  }

}
