import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dugc',
  templateUrl: './dugc.component.html',
  styleUrls: ['./dugc.component.css'],
})
export class DugcComponent implements OnInit {
  sections: any = ['A', 'B', 'C', 'D', 'E'];
  exams: any = ['Minor 1', 'Minor 2', 'Activity'];
  sems: any = ['three', 'four', 'five', 'six', 'seven', 'eight'];

  inp_sem_type: any;
  inp_sem_num: any;
  inp_exam: any;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}
  goToURL() {
    this.dataService.in_sem_val = this.inp_sem_num;
    this.dataService.in_exam = this.inp_exam;
    console.log('val =', this.dataService.in_sem_val);
    console.log('exam =', this.dataService.in_exam);
    this.router.navigate(['/Minor/charts']);
  }
}
