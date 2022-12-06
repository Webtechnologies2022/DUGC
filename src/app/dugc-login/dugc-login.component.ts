import { Component, OnInit } from '@angular/core';
import { AuthMainService } from '../auth-main.service';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dugc-login',
  templateUrl: './dugc-login.component.html',
  styleUrls: ['./dugc-login.component.css']
})
export class DugcLoginComponent implements OnInit {

  logindata=
  {
    username:'',
    password:''
  }
  constructor(private auth:AuthMainService) { }
  
    ngOnInit(): void {
    }
  
    
    loginUser(e:any) {
  
     
      console.log(this.logindata);
      this.auth.loginauth(this.logindata);
      alert('login successfull');
  }
}
