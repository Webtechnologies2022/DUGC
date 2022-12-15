import { Component, OnInit } from '@angular/core';
import { AuthMainService } from 'src/app/auth-main.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthMainService) {}
  thisPage = '';
  userType: any = '';
  ngOnInit(): void {
    this.userType = this.authService.getUserType();
  }
}
