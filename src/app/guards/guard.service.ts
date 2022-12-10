import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthMainService } from '../auth-main.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
if(state.url=="/")
{
  return true;
}

   const userdata =this.authservice.userCredentials.getValue();
   if(userdata  && userdata.userid)
   {
      if(state.url.indexOf("login")> -1)  
      {
        this.route.navigate(['/Minor']);
        return false;
      }
   }
   else{
    if(state.url.indexOf("login")> -1)
      {
        this.route.navigate(['/loginMain']);
        return false;
      }
   }
    throw new Error("method not implemented");
      
  }

  constructor(private authservice:AuthMainService,private route:Router) { }
}
