import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {LoginComponent} from './components/auth/login/login.component';
import {SignupComponent} from './components/auth/signup/signup.component';
import { ForgetpasswordComponent } from './components/auth/forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './components/auth/forgetpassword/changepassword/changepassword.component';
import { ConfirmaccountComponent } from './components/auth/confirmaccount/confirmaccount.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ForgetpasswordComponent },
  { path: 'recoverypassword', component: ChangepasswordComponent },
  { path: 'confirm', component: ConfirmaccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
