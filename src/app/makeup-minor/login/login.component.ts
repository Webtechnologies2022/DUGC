import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

logindata=
{
  username:'',
  password:''
}
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  
  loginUser(e:any) {

   
    console.log(this.logindata);
    this.auth.loginauth(this.logindata);
    alert('login successfull');
}
}
