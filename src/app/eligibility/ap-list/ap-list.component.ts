import { Component, OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { StudentsService } from '../services/students.service';
import  * as XLSX from 'xlsx';
import { tick } from '@angular/core/testing';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ap-list',
  templateUrl: './ap-list.component.html',
  styleUrls: ['./ap-list.component.css']
})
export class ApListComponent implements OnInit {

 

  constructor(private studentService:StudentsService,
              private toastr: ToastrService,) {
  
    }
    
   

  ngOnInit(): void {
   
  }

     
}
