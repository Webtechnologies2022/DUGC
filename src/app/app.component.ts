import { Component } from '@angular/core';
import { NavbarComponent } from './minor-analysis/navbar/navbar.component';
import { AuthMainService } from './auth-main.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DUGC';

  constructor(private auth:AuthMainService){}

  log(){
    if(this.auth.LoggedIn())
    {
      return this.auth.LoggedIn();
    }
    else
    if(this.auth.dugc()){
      return this.auth.dugc();
    }
  else
  {
    return this.auth.coordinator();
  }
   
  }

  logout()
  {
    return this.auth.logout();
  }
}
