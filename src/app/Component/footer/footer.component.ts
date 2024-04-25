import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  hideHeader: boolean = false;
  constructor() { }

  ngOnInit(): void {
    const hideHeaderProperty = localStorage.getItem('rolename');
    // If the property exists and its value is 'true', hide the header
    if (hideHeaderProperty==='Candidate' || hideHeaderProperty==='Company') {
      this.hideHeader = true;
    }
  }

}
