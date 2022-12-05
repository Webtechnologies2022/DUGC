import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor(private httpClient:HttpClient) { }


  getmarks()
  {
  let  url =environment.STUDENT_LAB_LIST+environment.STUDENT.MARKS;
    return this.httpClient.get(url);
  }
  uploadlist(studentobj:any)
  {
    let url = environment.STUDENT_LAB_LIST+environment.STUDENT.ADD_STUDENT;
    return this.httpClient.post(url,studentobj);
  }
  getattendance()
  {
    let url =environment.STUDENT_LAB_LIST+environment.STUDENT.ATTENDANCE;
    return this.httpClient.get(url);
  }

  displayDate()
  {
   var date= new Date();
   console.log(date);
    return date;
  }

}
