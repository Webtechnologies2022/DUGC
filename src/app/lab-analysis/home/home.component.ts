import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  year: string = '';
  Sem: string = '';
  Div: string = '';

  ngOnInit(): void {}

  myFun() {
    if (this.year == '2021' && this.Sem == '5') {
      this.pr.navigate(['/Lab/adiv2021']);
    } else if (this.year == '2020' && this.Sem == '5')
      this.pr.navigate(['/Lab/adiv2020']);
    else if (this.year == '2021' && this.Sem == '3')
      this.pr.navigate(['/Lab/a32021']);
    else if (this.year == '2020' && this.Sem == '3')
      this.pr.navigate(['/Lab/a32020']);
    else if (this.year == '2021' && this.Sem == '4')
      this.pr.navigate(['/Lab/a42021']);
    else if (this.year == '2020' && this.Sem == '4')
      this.pr.navigate(['/Lab/a42020']);
    else if ((this.Sem == '6' && this.year == '2021') || this.year == '2020')
      this.pr.navigate(['/Lab/acn2021']);
    else if ((this.Sem == '7' && this.year == '2021') || this.year == '2020')
      this.pr.navigate(['/Lab/asnp2021']);
    else if (this.year == '2022' && this.Sem == '7')
      this.pr.navigate(['/Lab/upload']);
    else if (this.Sem == '8') this.pr.navigate(['/Lab/sem8']);
    else if (this.year == '2022') this.pr.navigate(['/Lab/upload']);
    else {
      this.pr.navigate(['/Lab/home']);
    }
  }
  constructor(private pr: Router) {}
}
