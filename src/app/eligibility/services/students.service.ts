import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient:HttpClient) { }
  //methods to comminicate with backend api
  displayDate()
  {
   var date= new Date();
   console.log(date);
    return date;
  }

  getmarks()
  {
  let  url =environment.STUDENT_BASE_URL+environment.STUDENT.MARKS;
    return this.httpClient.get(url);
  }
  uploadlist(studentobj:any)
  {
    let url = environment.STUDENT_BASE_URL+environment.STUDENT.ADD_STUDENT;
    return this.httpClient.post(url,studentobj);
  }
  getattendance()
  {
  let  url =environment.STUDENT_BASE_URL+environment.STUDENT.ATTENDANCE;
    return this.httpClient.get(url);
  }
  viewStudent(id:any)
  {

  }
  editStudent(id:any,customerObj:any)
  {

  }
  deleteStudent(id:any)
  {

  }
  searchCustomer(keyword:any)
  {

  }
}
