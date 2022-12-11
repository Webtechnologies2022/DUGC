import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { AuthService } from '../circular/auth.service';
import { AuthMainService } from '../auth-main.service';

@Injectable({
  providedIn: 'root'
})
export class TokenVerificationService implements HttpInterceptor{

  constructor(private inject:Injector) { }
  intercept(req:any,next:any)
  {
    let authservice = this.inject.get(AuthMainService)
    let validtoken =req.clone({
      setHeaders:{
        Authurization:`bearer ${authservice.gettoken()}`
      }
    })
    return next.handle(validtoken)
  }
 
}
