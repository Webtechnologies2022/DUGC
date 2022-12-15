import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import  * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import * as allcourses from '../../../../../backend/server/data_files/courses_with_credits.json';
import * as allcourses3 from '../../../../../backend/server/data_files/courses_for_endsem.json';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.css']
})
export class TheoryComponent implements OnInit {

  ExelData:any;
  count:number=1;

  //get student data from database
  studentResult:any;
  studentList:any;

  attendanceresult:any;
  attendance:any;

  //to display courses
  course1:string="";
  course2:string="";
  course3:string="";
  course4:string="";
  course5:string="";
  course6:string="";

  couses:any = (allcourses as any).default;
  courses:any =(allcourses3 as any).default;
  test:string="22ECSC303";

  showSem:number=3;
  showdiv:string="A";

  Showdate:any;
  //tos store unique values of json
  studdentusn:any= [];
   studdentname:any = [];
  studdentcourse:any= [];
  studdentcourseid:any = [];


  constructor(private studentService:StudentsService,
    private toast:ToastrService,
    private route:Router) {
    this.Showdate = studentService.displayDate();
    }
    
   

  ngOnInit(): void {
    console.log(this.courses);
    console.log(this.courses.sem3);
    console.log(this.courses.sem3[0].code);
    console.log(this.couses);
    // console.log(this.couses[0].courses)
    // console.log(this.couses[0].sem)
    // console.log(this.couses[0].courses[0].code)
    // console.log(this.couses[0].courses[0].name)
   
  }

   getStudentList(e:any)
   {
  this.studentService.getmarks().subscribe((data:any)=>
    {
      
      this.showSem=e.sem;
      console.log(this.showSem);
      this.showdiv=e.div;
      console.log(this.showdiv);
      this.studentResult =data;
      this.studentList = this.studentResult.results;
      console.log(this.studentList);
      this.toast.success("student list fetched successfully");
      // this.getstudent();

},
(err:any)=>
{
  this.toast.error("server error data not found",err.error);
  if(err instanceof HttpErrorResponse)
  {
    if(err.status===401)
    {
      this.route.navigate(['/loginMain'])
    }
  }
})
this.studentService.getattendance().subscribe((data1:any)=>
    {
      this.attendanceresult =data1;
      this.attendance = this.attendanceresult.results;
      console.log(this.attendance);
      // this.getstudent();
      this.toast.success("student list fetched successfully");
      

},(err:any)=>
{
  this.toast.error("server error data not found",err.error);
  if(err instanceof HttpErrorResponse)
  {
    if(err.status===401)
    {
      this.route.navigate(['/loginMain'])
    }
  }
})
}

//read xl file to store data in json

  

    formvalue(E:any)
{
  let sem=E.target.value;
 
  
  if(sem==7)
  {
    console.log(sem);
    this.course1="17ECSC401";
    this.course2="20ECSE402";
    this.course3="18ECSE402";
    this.course4="19ECSE401";
    this.course5="20ECSE504";
    


  }
  else if(sem==6)
  {
    console.log(sem);
    this.course1="20ECSC303";
    this.course2="20ECSC305";
    this.course3="22ECSC307";
    this.course4="17ECSE307";
    this.course5="";
    // this.course6="17ECSE303";
    // this.course7="17ECSE309";
    // this.course8="18ECSE302";
    // this.course9="17ECSE306";
    // this.course10="19ECSE303";
    // this.course11="12ECSE332";


  }else if(sem==5)
    {
      console.log(sem);
      this.course1=this.couses[2].courses[4].code;
      this.course2="19ECSC302";
      this.course3="17ECSC302";
      this.course4="22ECSC306";
      

        }else if(sem==4){
          console.log(sem);
          this.course1="20EMAB209";
          this.course2="21ECSC206";
          this.course3="20ECSC204";
          this.course4="19ECSC203";
          this.course5="22ECSC202";
          this.course6="21ECSC210";

            
        }else if(sem==3)
      {
        console.log(sem);
        this.course1=this.couses[0].courses[0].code;
        this.course2="19ECSC202";
        this.course3="20ECSC201";
        this.course4="20ECSC205";
        this.course5="15ECSC208";
      }
}
     
   
        getstudent=()=>
        {
          var lookup:any;
          lookup={};
          var items =this.studentList;

        
            for (var item, i = 0; item = items[i++];) {
              var name:any;
              var usn:any;
              var course:any;
              var cid:any;

              usn=item.USN;
              name=item.Name;
              course=item.CourseName;
              cid=item.CourseId;

            
                    if (!(name in lookup)) {
                      lookup[name] = 1;
                      this.studdentname.push(name);
                      console.log(this.studdentname);
                    }
                    if(!(usn in lookup))
                    {
                      lookup[usn] = 1;
                      this.studdentusn.push(usn);
                      console.log(this.studdentusn);
                    }
                    if(!(course in lookup))
                    {
                      lookup[course] = 1;
                      this.studdentcourse.push(course);
                      console.log(this.studdentcourse);
                    }
                    if(!(cid in lookup))
                    {
                      lookup[cid] = 1;
                      this.studdentcourseid.push(cid);
                      console.log(this.studdentcourseid);
                    }
                    
                  }
              
            }
        
  
            incrementSno(){
              this.count+=1;
            }
          
            resetSno(){
              this.count = 1;
            }
}
