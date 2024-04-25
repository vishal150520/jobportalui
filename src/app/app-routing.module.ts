import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { CandidatedashboardComponent } from './Candidate/candidatedashboard/candidatedashboard.component';
import { AuthguardService } from './Services/authguard.service';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:ContactComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'forgotpassword', component:ForgotpasswordComponent },
  { path:'candidatedashboard',component:CandidatedashboardComponent,canActivate: [AuthguardService]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
