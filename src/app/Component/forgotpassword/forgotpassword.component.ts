import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required,]],
      currentpassword: ['', [Validators.required,]],
      newPassword:['',[Validators.required,]],
      confirmnewPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Form values:', this.myForm.value);
    // You can send the form values to your server or perform any other action here
  }
}
