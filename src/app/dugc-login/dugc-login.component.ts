import { Component, OnInit } from '@angular/core';
import { AuthMainService } from '../auth-main.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dugc-login',
  templateUrl: './dugc-login.component.html',
  styleUrls: ['./dugc-login.component.css'],
})
export class DugcLoginComponent implements OnInit {
  userdata: any;

  logindata = {
    role: '',
    email: '',
    password: '',
  };
  constructor(
    private auth: AuthMainService,
    private route: Router,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  loginUser(e: any) {
    console.log(this.logindata);
    this.auth.LoginUser(this.logindata).subscribe(
      (res) => {
        console.log(res);
        this.userdata = res;
        console.log(this.userdata.user);
        if(this.logindata.role=='admin')
        {
          localStorage.setItem('token', this.userdata.user);
        }else
        if (this.logindata.role=='dugc') {
          localStorage.setItem('dugc', this.userdata.user);
        }
        else
          if (this.logindata.role=='coordinator') {
            localStorage.setItem('coordinator',this.userdata.user);
          }
        this.route.navigate(['/homeMain']);
        this.toast.success('welcome to KLETECH');
      },
      (err) => {
        console.log(err.error.msg);
        this.toast.error(err.error.msg);
      }
    );
  }
}
