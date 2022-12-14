import { Component, OnInit } from '@angular/core';
import { AuthMainService } from '../auth-main.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dugc-register',
  templateUrl: './dugc-register.component.html',
  styleUrls: ['./dugc-register.component.css']
})
export class DugcRegisterComponent implements OnInit {

  userdata:any;

  logindata=
  {
    role:'',
    email:''
  }
  constructor(private auth:AuthMainService,
    private route:Router,
    private toast:ToastrService) { }

  ngOnInit(): void {
  }


  RegisterUser(e:any) {
  
     
    console.log(this.logindata);

    // this.auth.RegisterUser(this.logindata).subscribe(res=>{

    //   console.log(res);
    //   this.userdata = res;
    //   console.log(this.userdata.user);
    //   localStorage.setItem('token',this.userdata.user);
    //   this.route.navigate(['/homeMain']);
    //   this.toast.success("welcome to KLETECH");
    // },err=>
    // {
    //   console.log(err.error.msg);
    //     this.toast.error(err.error.msg);
    // })
}
}
