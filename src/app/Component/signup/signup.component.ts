import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required,]],
      phone: ['', Validators.required],
      dropdown: ['', Validators.required],
      password: ['', [Validators.required,]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Form values:', this.myForm.value);
    // You can send the form values to your server or perform any other action here
  }
  }
