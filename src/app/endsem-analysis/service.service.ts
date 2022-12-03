import { Injectable } from '@angular/core';
import * as CourseData from './file/data.json';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getCourseData() {
    return CourseData;
  }
  constructor() { }
}
