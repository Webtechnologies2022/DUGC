import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthMainService } from '../auth-main.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DugcService implements CanActivate {

  constructor(private authservice:AuthMainService,
              private route:Router,
              private toast:ToastrService) { }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authservice.dugc()) {
      var token=localStorage.getItem('dugc');
      console.log(token);
      return true;
    }else
    if (this.authservice.LoggedIn()) {
      var token=localStorage.getItem('token');
      console.log(token);
      return true;
    }
    else{
      this.toast.error('you are not authorized for this task');
      return false;
    }
   
  }

  
}
