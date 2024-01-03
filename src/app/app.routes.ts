import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { OtpCodeComponent } from './components/otp-code/otp-code.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  //   {  path:'',component:LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'verify', component: OtpCodeComponent },
  { path: 'dashboard', component: DashboardComponent },
];
