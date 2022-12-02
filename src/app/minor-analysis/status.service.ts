import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  result: any = {
    academic_year: '',
    course: '',
    exam: '',
    filename: '',
    read_result: {
      Average: '',
      S_grade: '',
      A_grade: '',
      B_grade: '',
      C_grade: '',
      D_grade: '',
      Total: '',
    },
    read_result_array: [
      {
        Average: '',
        S_grade: '',
        A_grade: '',
        B_grade: '',
        C_grade: '',
        D_grade: '',
        Total: '',
      },
    ],
    section: '',
    sem_type: '',
    semester: '',
  };
  isConsolidated: boolean = false;
  isUploaded: boolean = false;
  setResult(data: any): void {
    this.isUploaded = true;
    this.result = data;
    try {
      if (this.result.read_result.Average == '') {
        this.isConsolidated = true;
      }
    } catch (c) {
      this.isConsolidated = true;
    }
    console.log('Result set');
    console.log(this.result);
  }
  constructor(private dataService: DataService) {}
}
