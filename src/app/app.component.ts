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
  user_type: any = '';
  user_type_name: any = '';
  constructor(private auth: AuthMainService) {}

  log() {
    this.user_type = this.auth.getUserType();
    if (this.user_type == 'CourseCoordinator') {
      this.user_type_name = 'Course Coordinator';
    } else if (this.user_type == 'DUGCCoordinator') {
      this.user_type_name = 'DUGC Coordinator';
    } else if (this.user_type == 'DUGCChairman') {
      this.user_type_name = 'DUGC Chairman';
    }
    if (this.auth.LoggedIn()) {
      return this.auth.LoggedIn();
    } else if (this.auth.dugc()) {
      return this.auth.dugc();
    } else {
      return this.auth.coordinator();
    }
  }
  logout() {
    this.user_type = '';
    this.user_type_name = '';
    return this.auth.logout();
  }
  ngOnInit(): void {
    this.user_type = this.auth.getUserType();
    if (this.user_type == 'CourseCoordinator') {
      this.user_type_name = 'Course Coordinator';
    } else if (this.user_type == 'DUGCCoordinator') {
      this.user_type_name = 'DUGC Coordinator';
    } else if (this.user_type == 'DUGCChairman') {
      this.user_type_name = 'DUGC Chairman';
    }
  }
}
