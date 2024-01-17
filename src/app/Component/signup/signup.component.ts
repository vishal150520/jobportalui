import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  selectedOption: string = ''; // To store the selected option

  options = [
    'Company',
    'Candidate',
  ];

}
