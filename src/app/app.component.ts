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
   return this.auth.LoggedIn();
  }

  logout()
  {
    return this.auth.logout();
  }
}
