import { Component, OnInit } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { response } from 'express';
@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {
title='adminDashboard';
  constructor(private http:HttpClientModule
   
  ) { }

  ngOnInit(): void {
  }
name:string="";
file:any;
  getName(name:string){
    this.name=name;
  }
  getFile(event:any){
    this.file=event.target.files[0];
    console.log('file',this.file);
  }
  submitData(){
   let formData=new FormData();
   formData.set("name",this.name)
   formData.set("file",this.file)
  }
}
