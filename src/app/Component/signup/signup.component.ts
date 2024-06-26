import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAllservicesService } from 'src/app/Services/allservices.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  token:any
  myForm!: FormGroup;
  constructor(private fb: FormBuilder,private allservices: IAllservicesService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      phone: ['', Validators.required],
      dropdown: ['', Validators.required],
      password: ['', [Validators.required,]],
      confirmPassword: ['', Validators.required],
    },{ validators: this.passwordMatchValidator }
    );
  }
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  }

  onSubmit() {
    const roleid=this.myForm.get('dropdown')?.value;
    const rolename = roleid === '2' ? 'Candidate' : roleid === '3' ? 'Company' : null;
    const pss=this.myForm.get('password')?.value
    const hashedPassword = this.hashPassword(pss);
    console.log('Form values:', this.myForm.value);
    const dataToSend = {
      "createdBy": "string",
      "createdDate": "2024-01-21T07:01:36.086Z",
      "modifiedBy": "string",
      "modifiedDate": "2024-01-21T07:01:36.086Z",
      "isActive": true,
      "isDeleted": true,
      "userID": 0,
      "email": this.myForm.get('email')?.value,
      "password": hashedPassword,
      "firstName": "string",
      "lastname": "string",
      "phone":  this.myForm.get('phone')?.value,
      "roles": [
        {
          "createdBy": "string",
          "createdDate": "2024-01-21T07:01:36.087Z",
          "modifiedBy": "string",
          "modifiedDate": "2024-01-21T07:01:36.087Z",
          "isActive": true,
          "isDeleted": true,
          "roleID":  this.myForm.get('dropdown')?.value,
          "roleName": "string"
        }
      ],
      "isVerified": true
    }
    const regdata = {
      "email": this.myForm.get('email')?.value,
      "password": hashedPassword,
      "userType": rolename,
      "number": this.myForm.get('phone')?.value,
      "isTemporaryPassword": true
    }
    this.allservices.identityregister(regdata).subscribe(
      (response) => {
        console.log('POST identity successful:', response);
      },
      (error) => {
        console.error('Error identity making POST request:', error);
      }
    );
    this.allservices.apiregister(dataToSend).subscribe(
      (response) => {
        console.log('POST api reg successful:', response);
        window.alert("Successfully Register")
        // Handle the response as needed
      },
      (error) => {
        console.error('Error  api reg POST request:', error);
        // Handle the error as needed
      }
    );
    const email=`${this.myForm.get('email')?.value}`; // Replace with the email you want to fetch data for
    this.allservices.getEmailConfirmationToken(email).subscribe(data => {
      const  emailConfirmationToken = data.result.emailConfirmationToken;
      console.log(emailConfirmationToken)
       environment.emailverify=emailConfirmationToken;
      // Handle the response data here
    }, error => {
      console.error('Error:', error);
      // Handle errors here
    });
    const emaildata = {                        
      "to": this.myForm.get('email')?.value,
      "subject": "<h1>string</h1>",
      "body":`https://localhost:7022/api/Account/confirmemail?email=${email}&?token=${environment.emailverify}`
    }
   // You can send the form values to your server or perform any other action here
    this.allservices.email(emaildata).subscribe(
      (response) => {
        console.log('send email', response);
      },
      (error) => {
        console.error('Error send email POST request:', error);
      }
    );

  }
  private hashPassword(password: string): string {
    // Replace this with your actual hashing logic
    // This is just an example using a simple hashing function
    const hashedPassword = btoa(password);

    return hashedPassword;
  }

}
