import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthMainService } from '../auth-main.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private authservice:AuthMainService,private route:Router) { }
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authservice.LoggedIn()) {
      return true;
    }
    else{
      this.route.navigate(['/loginMain']);
      return false;
    }
   
  }

  
}
