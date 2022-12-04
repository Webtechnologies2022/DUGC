import { Component, OnInit, NgModule, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { VirtualTimeScheduler } from 'rxjs';
import { DxChartModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Chart, { BubbleController } from 'chart.js/auto'

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  ExcelData: any;
  x: Text[] = [];
  y: number[] = [];

  willDownload = false;

  customizeText(arg: any) {
    return `GRADE ${arg.valueText}`;
  }

  constructor() {}

  ngOnInit(): void {}
  ReadExcel(event: any) {
    let file = event.target.files[0];

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
      console.log(this.ExcelData);
      var i = 0;
      for (let data of this.ExcelData) {
        this.x[i] = data.GRADE;
        this.y[i++] = data.COUNT;
      }
      // console.log(this.y)
      var src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"
      var myChart = new Chart("myChart", {
        type: "bar",
        data: {
          labels : this.x,
          datasets: [{
            label:'Number of students',
            data: this.y,
            backgroundColor:['#68aeff'],
            borderWidth:1
          }]
        },
        options: {
          responsive:true
        }
      });
    };
  }
}
