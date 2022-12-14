import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  in_sem_val: any;
  in_exam: any;
  URI = `${environment.API_URL}`;

  constructor(private _http: HttpClient) {}

  getAnalysis() {
    return this._http.get(`${this.URI}/analysis`);
  }
  getCourses() {
    return this._http.get(`${this.URI}/get_courses`);
  }

  getDUGC(sem_type: string, semester: string, exam: string) {
    return this._http.get(`${this.URI}/dugc`, {
      params: { sem_type, semester, exam },
    });
  }

  getCoordinator(data_file: string, course_file: string) {
    return this._http.get(`${this.URI}/coordinator`, {
      params: { data_file, course_file },
    });
  }

  uploadSheets(data: any) {
    const {
      academic_year,
      sem_type,
      semester,
      course,
      exam,
      section,
      filename,
    } = data;
    console.log('Making a get request', data);
    const headers = new HttpHeaders();
    return this._http.post(`${this.URI}/upload_sheets`, data);
  }

  createCourse(data: any) {
    const { semester, course_code, course_name, cred1, cred2, cred3 } = data;
    return this._http.get(`${this.URI}/create_course`, {
      params: {
        semester,
        course_code,
        course_name,
        cred1,
        cred2,
        cred3,
      },
    });
  }

  deleteSheet(data: any) {
    const { academic_year, semester, course, exam, section } = data;
    return this._http.get(`${this.URI}/delete_sheet`, {
      params: {
        academic_year,
        semester,
        course,
        exam,
        section,
      },
    });
  }

  uploadMultipleSheets(data: any) {
    const { academic_year, sem_type, semester, course, exam, filename } = data;
    console.log('Making a get request', data);
    const headers = new HttpHeaders();
    return this._http.post(`${this.URI}/upload_multiple_sheets`, data);
  }

  setFileHeader() {
    return new HttpHeaders({
      Accept: 'application/json',
    });
  }
  uploadFile(fileToUpload: File) {
    console.log('on service');
    console.log(fileToUpload);
    let fd = new FormData();
    fd.append('file', fileToUpload, fileToUpload.name);
    return this._http.post(`${this.URI}/upload_file`, fd, {
      headers: this.setFileHeader(),
    });
  }
}
