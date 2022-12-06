import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from '../services/students.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
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
          name: 'Graph Theory and Linear Algebra',
          code: '15EMAB204',
          credits: '4',
        },
        {
          id: 2,
          name: 'Discrete Mathematical Structure',
          code: '19ECSC202',
          credits: '4',
        },
        {
          id: 3,
          name: 'Computer Organization and Architecture',
          code: '21ECSC201',
          credits: '4',
        },
        {
          id: 4,
          name: 'Database Management System',
          code: '15ECSC208',
          credits: '4',
        },
        {
          id: 5,
          name: 'Data Structure and Algorithms',
          code: '20ECSC205',
          credits: '4',
        },
        {
          id: 6,
          name: 'Data Structure and Algorithms Lab',
          code: '19ECSP201',
          credits: '2',
        },
        {
          id: 7,
          name: 'Database Applications Lab',
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
          name: 'Applied Statistics with R',
          code: '20EMAB209',
          credits: '4',
        },
        {
          id: 2,
          name: 'Principles of Compiler Design',
          code: '19ECSC203',
          credits: '3',
        },
        {
          id: 3,
          name: 'Object Oriented Programming',
          code: '20ECSC204',
          credits: '3',
        },
        {
          id: 4,
          name: 'Object Oriented Programming Lab',
          code: '20ECSP203',
          credits: '1.5',
        },
        {
          id: 5,
          name: '	Operating Systems Principles and Programming',
          code: '18ECSC202',
          credits: '4',
        },
        {
          id: 6,
          name: 'Exploratory Data Analysis',
          code: '21ECSC210',
          credits: '4',
        },
        {
          id: 7,
          name: 'Microcontroller Programming and Interfacing',
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
          name: 'Computer Networks- 1',
          code: '19ECSC302',
          credits: '4',
        },
        {
          id: 2,
          name: 'System Software',
          code: '17ECSC302',
          credits: '3',
        },
        {
          id: 3,
          name: 'Web Technologies Lab',
          code: '21ECSP304',
          credits: '2',
        },
        {
          id: 4,
          name: 'System Software Lab',
          code: '19ECSP302',
          credits: '1.5',
        },
        {
          id: 5,
          name: 'Software Engineering',
          code: '22ECSC301',
          credits: '3',
        },
        {
          id: 6,
          name: 'Machine Learning',
          code: '22ECSC306',
          credits: '4',
        },
        {
          id: 7,
          name: 'Natural Language Processing',
          code: '22ECSE315',
          credits: '3',
        },
        {
          id: 8,
          name: 'Statistics & Probability',
          code: '15EMAB303',
          credits: '4',
        },
        {
          id: 9,
          name: 'Internet Of Things',
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
          name: 'Computer Network-2',
          code: '20ECSC303',
          credits: '3',
        },
        {
          id: 2,
          name: 'Computer Network Lab',
          code: '20ECSP305',
          credits: '1.5',
        },
        {
          id: 3,
          name: 'Distributed and Cloud Computing',
          code: '20ECSP305',
          credits: '3',
        },
        {
          id: 4,
          name: 'Professional Aptitude & Logical Reasoning',
          code: '16EHCS301',
          credits: '3',
        },
        {
          id: 5,
          name: 'Blockchain & Distributed Ledgers',
          code: '22ECSC307',
          credits: '3',
        },
        {
          id: 6,
          name: 'Minor Project',
          code: '15ECSW302',
          credits: '6',
        },
      ],
    },
    {
      sem: 7,
      courses: [
        {
          id: 1,
          name: 'Big Data and Analytics',
          code: '17ECSC401',
          credits: '3',
        },
        {
          id: 2,
          name: 'Information Security',
          code: '20ECSC402',
          credits: '3',
        },
        {
          id: 3,
          name: 'Social Network Analysis',
          code: '18ECSE402',
          credits: '3',
        },
        {
          id: 4,
          name: 'Cyber Security',
          code: '19ECSE401',
          credits: '3',
        },
        {
          id: 5,
          name: 'Software Defined Networks',
          code: '20ECSE405',
          credits: '3',
        },
        {
          id: 6,
          name: 'Senior Design Project',
          code: '20ECSW401',
          credits: '3',
        },
        {
          id: 7,
          name: 'Capstone Project',
          code: '20ECSW402',
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
  selectedSem: any = '';
  totalCredits = 0;
  totalCreditsForSem = 0
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
    this.totalCreditsForSem = 0;
    this.displayCourses();
  }

  // totalCreditsForSem = 0;
  course: any;
  displayCourses() {
    for (this.course of this.selectedSemCourses) {
      console.log(this.course.name);
      this.totalCreditsForSem += Number(this.course.credits);
    }
    console.log(
      `Total Credits of selected sem is ${
        this.totalCreditsForSem
      }. And allowed is ${this.totalCreditsForSem - 16}`
    );
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
      console.log(`totalcreditsforsem ${this.totalCreditsForSem}`);
      console.log(`totalcredits ${this.totalCredits}`);
      if (
        this.totalCredits + Number(course.credits) >
        this.totalCreditsForSem - 16
      ) {
        this.toastr.error(
          'Invalid Operation',
          'Credits should not be less than 16.'
        );
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
  attendance: number[] = [0,0,0,0,0];
  // ia1: any = [];
  // ia2: any = [];
  cie: number[] = [0,0,0,0,0];
  submitDetails(form: NgForm) {

    if(this.studentName.length == 0 || this.srn.length == 0 || this.rno.length ==0 || this.div.length == 0 || this.selectedSem.length == 0 || this.reason.length == 0){
      this.toastr.error('Empty Text Fields', 'Text fields cannot be empty.');
      return
    }

    if(this.selectedCourses.length == 0){
      this.toastr.error('Select Course', 'Select course(s) to withdraw.');
      return;
    }
    for(let i = 0; i < this.selectedCourses.length; i++){
      console.log(this.cie[i],this.attendance[i])
      if(Number(this.cie[i]) <= 0){
      this.toastr.error('Negative Input', 'CIE marks cannot be less than or equal to 0.');
        return;
      }
      if(Number(this.attendance[i]) <= 0){
      this.toastr.error('Negative Input', 'Attendance cannot be less than or equal to 0.');

        return;
      }
    }

    console.log(this.selectedCourses);
    for (let i = 0; i < this.selectedCourses.length; i++) {
      this.sc.push({
        name: this.selectedCourses[i].name,
        code: this.selectedCourses[i].code,
        credits: this.selectedCourses[i].credits,
        attendance: this.attendance[i],
        cie: this.cie[i]
        // isa1: this.ia1[i],
        // isa2: this.ia2[i],
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

    this.resetData(form)
  }


  resetData(form:NgForm){
    form.resetForm()
    this.selectedCourses = []
    this.sc = []
  }
}
