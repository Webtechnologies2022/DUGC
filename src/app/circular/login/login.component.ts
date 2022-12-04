import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponentCircular implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginuser(): void {
    this.auth.login().then(() => {
      this.router.navigate(['/']);
    });
  }
}
