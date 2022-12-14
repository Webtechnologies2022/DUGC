import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private url = 'http://localhost:3000/withdrawal';
  constructor(private httpClient: HttpClient) {}

  getAllStudents() {
    // console.log(this.httpClient.get(this.url+'/'))
    return this.httpClient.get(this.url + '/getStudents');
  }

  insertStudent(details: any) {
    return this.httpClient.post(this.url + '/add-student', details);
  }

  updateStudent(user: any, status: any) {
    console.log(status);
    console.log(user);
    console.log(this.url + '/update-student/' + user);
    return this.httpClient.put(this.url + '/update-student/' + user, status);
  }
}
