import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  a: string;
  b: string;
  msg: number;
  check: any;
  constructor(private router: Router) {
    this.a = '';
    this.b = '';
    this.msg = 0;
    this.check = { user: 'hi', pass: 'hello' };
  }

  ngOnInit(): void {}
  validation() {
    // this.check.user == this.a && this.check.pass == this.b
    if (this.a == 'admin' && this.b == 'admin123') {
      this.msg = 1;

      this.router.navigateByUrl('/app');
    } else {
      this.msg = 0;
    }
  }
}
