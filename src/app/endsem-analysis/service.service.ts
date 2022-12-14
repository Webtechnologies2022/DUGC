import { Injectable } from '@angular/core';
import * as CourseData from '../../../backend/server/data_files/courses_for_endsem.json';
import * as PassingData from './file/passing.json';
import * as CoursePrevious from './file/courseprevious.json';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  getCourseData() {
    return CourseData;
  }

  getTotalPassPercentage() {
    return PassingData;
  }

  getCoursePreviousData() {
    return CoursePrevious;
  }
  constructor() {}
}
