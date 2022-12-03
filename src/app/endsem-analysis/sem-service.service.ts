import { Injectable } from '@angular/core';
// import { from } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemServiceService {

  constructor(private http:HttpClient) { }

  listSem() {
    return this.http.get('http://localhost:8080/');
  }
  
}
