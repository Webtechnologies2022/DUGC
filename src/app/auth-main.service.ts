import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'
import  { JwtHelperService} from '@auth0/angular-jwt'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthMainService {
  jwthelp =new JwtHelperService;
  userCredentials:BehaviorSubject<any>=new BehaviorSubject(null);
  private  Loginurl = 'http://localhost:3003/login/finduser';
  private  registerurl = 'http://localhost:3003/login/add';
  constructor(private http:HttpClient,private route:Router) {

   }

  LoginUser(user:any)
  {
  return this.http.post(this.Loginurl,user) 
  }

  RegisterUser(user:any)
  {
    return this.http.post(this.registerurl,user) 
  }

  LoggedIn()
  {
    return !!localStorage.getItem('token');
  }

  gettoken()
  {
   return localStorage.getItem('token');
  }
  logout()
  {
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  //   console.log(user);
  //   const accesstoken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
  //   const refreshtoken = "dummy";

  //   localStorage.setItem("tkn", accesstoken);
  //   localStorage.setItem("rtkn", refreshtoken);
  //   // return this.http.post(this.url+'/user/add-user', user);
  //   const decrrpt= this.jwthelp.decodeToken(accesstoken);
  //   console.log(decrrpt);
  //     const data = 
  // {
  //   access:accesstoken,
  //   refresh:refreshtoken,
  //   username:decrrpt.username,
  //   userid:decrrpt.sub,
  //   exp:decrrpt.exp
  // }
  // this.userCredentials.next(data);
  
  }
}
