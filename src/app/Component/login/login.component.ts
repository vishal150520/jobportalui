import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAllservicesService } from 'src/app/Services/allservices.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  constructor(private fb: FormBuilder,private allservices: IAllservicesService,private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required,]],
      password: ['', [Validators.required,]],
    });
  }


  onSubmit() {
    const email=this.myForm.get('email')?.value
    const pss=this.myForm.get('password')?.value
    const hashedPassword = this.hashPassword(pss);
    const data={
      "email": this.myForm.get('email')?.value,
      "password":hashedPassword
    }
 
    console.log('Form values:', this.myForm.value);

    this.allservices.candidatelogin(data).subscribe(
      (response) => {
        console.log(response)
        const userType: string[] = response.data.userType;
        console.log(userType)
        const n = response.data.token;
        console.log('Token:', n);
        localStorage.setItem('token', n);

        localStorage.setItem('email',email);
        const rolename: string = userType[0];
        localStorage.setItem('rolename', rolename)
        if (rolename === 'Candidate') {
          environment.logbutton=false;
          // Redirect to candidate page
          this.router.navigate(['/candidatedashboard']);
        } else (rolename === 'Company')
         {
          // Redirect to company page
          this.router.navigate(['/candidatedashboard']);
        } 
      },
      (error) => {
        this.router.navigate(['/login']);
        console.error('Invalid', error);
      }
    );
   
    // You can send the form values to your server or perform any other action here
  }
  private hashPassword(password: string): string {
    // Replace this with your actual hashing logic
    // This is just an example using a simple hashing function
    const hashedPassword = btoa(password);

    return hashedPassword;
  }

}
