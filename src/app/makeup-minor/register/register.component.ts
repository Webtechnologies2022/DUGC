import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerUser($event: SubmitEvent) {
throw new Error('Method not implemented.');
}
registerForm: any;
onSubmit: any;
f: any;
submitted: any;
loading: any;

  constructor() { }

  ngOnInit(): void {
  }

}
