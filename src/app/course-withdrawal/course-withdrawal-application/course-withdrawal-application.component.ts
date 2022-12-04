import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from '../services/students.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-withdrawal-application',
  templateUrl: './course-withdrawal-application.component.html',
  styleUrls: ['./course-withdrawal-application.component.css'],
})
export class CourseWithdrawalApplicationComponent implements OnInit {
  allCourses = [
    {
      sem: 3,
      courses: [
        {
          id: 1,
          name: 'GTLA',
          code: '15EMAB204',
          credits: '4',
        },
        {
          id: 2,
          name: 'DMS',
          code: '19ECSC202',
          credits: '4',
        },
        {
          id: 3,
          name: 'COA',
          code: '21ECSC201',
          credits: '4',
        },
        {
          id: 4,
          name: 'DBMS',
          code: '15ECSC208',
          credits: '4',
        },
        {
          id: 5,
          name: 'DSA',
          code: '20ECSC205',
          credits: '4',
        },
        {
          id: 6,
          name: 'DSA Lab',
          code: '19ECSP201',
          credits: '2',
        },
        {
          id: 7,
          name: 'DBA Lab',
          code: '15ECSP204',
          credits: '1.5',
        },
      ],
    },
    {
      sem: 4,
      courses: [
        {
          id: 1,
          name: 'AS',
          code: '20EMAB209',
          credits: '4',
        },
        {
          id: 2,
          name: 'POCD',
          code: '19ECSC203',
          credits: '3',
        },
        {
          id: 3,
          name: 'OOPS',
          code: '20ECSC204',
          credits: '3',
        },
        {
          id: 4,
          name: 'OOP Lab',
          code: '20ECSP203',
          credits: '1.5',
        },
        {
          id: 5,
          name: 'OSPP',
          code: '18ECSC202',
          credits: '4',
        },
        {
          id: 6,
          name: 'EDA',
          code: '21ECSC210',
          credits: '4',
        },
        {
          id: 7,
          name: 'MCP',
          code: '21ECSC206',
          credits: '4',
        },
      ],
    },
    {
      sem: 5,
      courses: [
        {
          id: 1,
          name: 'CN-1',
          code: '19ECSC302',
          credits: '4',
        },
        {
          id: 2,
          name: 'SS',
          code: '17ECSC302',
          credits: '3',
        },
        {
          id: 3,
          name: 'WT Lab',
          code: '21ECSP304',
          credits: '2',
        },
        {
          id: 4,
          name: 'SS Lab',
          code: '19ECSP302',
          credits: '1.5',
        },
        {
          id: 5,
          name: 'SE',
          code: '22ECSC301',
          credits: '3',
        },
        {
          id: 6,
          name: 'ML',
          code: '22ECSC306',
          credits: '4',
        },
        {
          id: 7,
          name: 'NLP',
          code: '22ECSE315',
          credits: '3',
        },
        {
          id: 8,
          name: 'S & P',
          code: '15EMAB303',
          credits: '4',
        },
        {
          id: 9,
          name: 'IOT',
          code: '17ECSC303',
          credits: '3',
        },
      ],
    },
    {
      sem: 6,
      courses: [
        {
          id: 1,
          name: 'CN-2',
          code: '20ECSC303',
          credits: '3',
        },
        {
          id: 2,
          name: 'CN Lab',
          code: '20ECSP305',
          credits: '1.5',
        },
        {
          id: 3,
          name: 'DCC',
          code: '20ECSP305',
          credits: '3',
        },
        {
          id: 4,
          name: 'PALR',
          code: '16EHCS301',
          credits: '3',
        },
        {
          id: 5,
          name: 'BDL',
          code: '22ECSC307',
          credits: '3',
        },
      ],
    },
  ];
  studentName: string;
  // semester: string  selectedSem
  srn: string;
  rno: string;
  div: string;
  reason: string;

  selectedSemCourses: any = [];
  selectedCourses: any = [];
  sem: any;
  courses: any;
  selectedSem: any = 'Select a sem';
  totalCredits = 0;

  constructor(
    private http: HttpClient,
    private studentService: StudentsService,
    private toastr: ToastrService
  ) {
    this.studentName = '';
    // this.semester = ""
    this.srn = '';
    this.rno = '';
    this.div = '';
    this.reason = '';
  }
  ngOnInit(): void {}

  // getSemCourses(){
  //   this.selectedCourses = []
  //   this.totalCredits = 0
  //   console.log(this.selectedSem)

  //   this.allCourses.forEach(sem =>{
  //     if(sem.sem == Number(this.selectedSem)){
  //       this.selectedSemCourses = sem.courses
  //     }
  //   })
  //   this.displayCourses()
  // }
  getSemCourses(selectedSem: string) {
    this.selectedSem = selectedSem;
    this.selectedCourses = [];
    this.totalCredits = 0;
    console.log(selectedSem);

    this.allCourses.forEach((sem) => {
      if (sem.sem == Number(selectedSem)) {
        this.selectedSemCourses = sem.courses;
      }
    });
    this.totalCreditsForSem = 0
    this.displayCourses();
  }

  totalCreditsForSem = 0;
  course: any;
  displayCourses() {
    for (this.course of this.selectedSemCourses) {
      console.log(this.course.name);
      this.totalCreditsForSem += Number(this.course.credits)
    }
    console.log(`Total Credits of selected sem is ${this.totalCreditsForSem}. And allowed is ${this.totalCreditsForSem - 16}`)
  }

  selectedCourse(event: any, course: any) {
    // if (event.target.checked) {
    //   if (this.totalCredits + Number(course.credits) > 6) {
    //     this.toastr.error('Invalid Operation', 'Credits Allowed are 6.');
    //     event.target.checked = false;
    //   } else {
    //     this.totalCredits += Number(course.credits);
    //     this.selectedCourses.push(course);
    //   }
    // } else {
    //   let index = this.selectedCourses.indexOf(course);
    //   this.selectedCourses.splice(index, 1);
    //   this.totalCredits -= Number(course.credits);
    // }
    
    if (event.target.checked) {
      console.log(`totalcreditsforsem ${this.totalCreditsForSem}`)
      console.log(`totalcredits ${this.totalCredits}`)
      if ((this.totalCredits + Number(course.credits)) > (this.totalCreditsForSem - 16)) {
        this.toastr.error('Invalid Operation', 'Credits should not be less than 16.');
        event.target.checked = false;
      } else {
        this.totalCredits += Number(course.credits);
        this.selectedCourses.push(course);     
      }
    } else {
      let index = this.selectedCourses.indexOf(course);
      this.selectedCourses.splice(index, 1);
      this.totalCredits -= Number(course.credits);
    }
  }
  details: any;
  sc: any = [];
  s: any;
  attendance: any = [];
  ia1: any = [];
  ia2: any = [];

  submitDetails() {
    console.log(this.selectedCourses);
    for (let i = 0; i < this.selectedCourses.length; i++) {
      this.sc.push({
        name: this.selectedCourses[i].name,
        code: this.selectedCourses[i].code,
        credits: this.selectedCourses[i].credits,
        attendance: this.attendance[i],
        isa1: this.ia1[i],
        isa2: this.ia2[i],
      });
    }
    this.details = {
      name: this.studentName,
      sem: this.selectedSem,
      srn: this.srn.toUpperCase(),
      rollNo: this.rno,
      division: this.div,
      selectedCourseToWithdraw: this.sc,
      status: 'pending',
      reason: this.reason,
    };
    this.toastr.success('Success', 'Application submitted successful.');

    this.studentService.insertStudent(this.details).subscribe((data) => {
      console.log(data);
    });
    // this.http.post<any>('http://localhost:8080/add-student', this.details);
    // this.http.post('http://localhost:8080/add-student', this.details).subscribe((error)=>{
    //   if(error) throw error;
    //   alert('Details added.')
    // })
    console.log(
      `${this.studentName} from ${this.selectedSem} semester wants to withdraw course. His SRN is ${this.srn} and his roll no is ${this.rno} belongs to ${this.div} divison. Because ${this.reason}`
    );
  }
}
