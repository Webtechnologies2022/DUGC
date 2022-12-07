import { Component, OnInit } from '@angular/core';
import { LabService } from '../../services/lab.service';
import  * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-labresults',
  templateUrl: './labresults.component.html',
  styleUrls: ['./labresults.component.css']
})
export class LabresultsComponent implements OnInit {

  ccourseS:string='22ECSC302';
  ExelData:any;
  selectedType = 0;
  selectedSem = 0;
   
  sem :any= [];
  courses :any= [];

  count:number=1;


  studentResult:any;
  studentList:any;

  labResults:any;
  lablist:any;
  
  lab1:string="";
  lab2:string="";
  lab3:string="";
  lab4:string="";

  showSem:number=0;
  showdiv:string="A";
showdate:any;

datatemp:any;

  constructor(private labservice:LabService,
    private toast:ToastrService) {
    this.showdate=this.labservice.displayDate();
    this.datatemp=[];
  }
    
  ngOnInit(): void {
    // this.getLabList();
    
  }

  incrementSno(){
    this.count+=1;
  }

  resetSno(){
    this.count = 1;
  }

   getStudentList(e:any)
   {
  
    this.showSem=e.Sem;
    console.log(this.showSem);
        this.showdiv=e.div;
      console.log(this.showdiv);
      this.showdiv.toLowerCase();

    this.labservice.getmarks().subscribe((data:any)=>
    {
      this.studentResult =data;
      this.studentList = this.studentResult.results;
      console.log(this.studentList);
      this.toast.success("student list fetched successfully");
    //  this.studentList.forEach((e:any)=>
    //  {
    //   if(!e["17ECSC302"])
    //   {
    //     this.datatemp.push("");
    //   }
    //   else
    //   {
    //     this.datatemp.push(e["17ECSC302"]);
    //   }
    //   console.log(this.datatemp);
    //  })

    })
    this.labservice.getattendance().subscribe((data:any)=>
    {
      this.labResults=data;
         console.log(this.labResults);
         this.lablist=this.labResults.results;
        console.log(this.lablist);
    })
   
   } 
  
  //  getineligible()
  //  {
  //   this.labservice.getIneligible().subscribe((data:any)=>
  //   {
  //     this.labResults=data;
  //     console.log(this.labResults);
  //     this.lablist=this.labResults.results;
  //    console.log(this.lablist);
  //    console.log(this.lablist);
  //   })
  //  }
CIE:any=[];
  //  getLabList()
  //  {
  //   this.labservice. getIneligible().subscribe((data:any)=>
  //   {
  //     this.labResults=data;
  //     console.log(this.labResults);
  //     this.lablist=this.labResults.results;
  //     console.log(this.lablist);
  //   //   this.lablist.forEach((e:any) => {
  //   //     this.datatemp.push(e.courses[0][0].ATT);
  //   //     this.CIE.push(e.courses[0][0].CIE);
  //   //     console.log(this.datatemp);
  //   //     console.log(this.CIE);
  //   // })
    
  //  })

  //  }


   readfile(event:any)
{
  let file = event.target.files[0];
  let fileReader = new FileReader();

  fileReader.readAsBinaryString(file);

  fileReader.onload=(e)=>
  {
    var workbook = XLSX.read(fileReader.result,{type:'binary'});  
    var sheetNames = workbook.SheetNames;
   this.ExelData= XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
    console.log(this.ExelData);
  }

}

uploadstudent(e:any)
{
  this.labservice.uploadlist(this.ExelData).subscribe((data)=>
  {
    console.log('students are added',data);
    console.log(e.Sem);
    console.log(e.div);
  },err=>
  {
    console.log(err);
  })
}


   
formvalue(E:any)
{
  let sem=E.target.value;

  if(sem==8)
  {
    console.log(sem);
    this.lab1="";
    this.lab2="";
    this.lab3="";
  

  }else
  if(sem==7)
  {
    console.log(sem);
    this.lab1="20ECSW401";
    this.lab2="";
    this.lab3="";
  }
  else if(sem==6)
  {
    console.log(sem);
    this.lab1="15ECSW302";
    this.lab2="20ECSP305";
    this.lab3="";

  }else if(sem==5)
    {
      console.log(sem);
      this.lab1="15ECSW301";
      this.lab2="19ECSP302";
      this.lab3="21ECSP304";

        }else if(sem==4){
          console.log(sem);
          this.lab1="20ECSP203";
          this.lab2="";
          this.lab3="";
          
            
        }else if(sem==3)
      {
        console.log(sem);
        this.lab1="15ECSP204";
        this.lab2="19ECSP201";
        this.lab3="";
        
      }
}
     


}
