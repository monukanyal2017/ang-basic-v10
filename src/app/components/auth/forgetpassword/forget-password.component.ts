import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert-service';
import { ApiService } from '../../../services/api-service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  loading = false;
  forgotPasswordForm: FormGroup;
  isEmailSent = false;

  constructor(private apiService: ApiService,
              private alertService: AlertService, private router: Router) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, !this.isEmailSent ? [Validators.required] : []),
      code: new FormControl(null, []),
      new_password: new FormControl(null, []),
      confirm_password: new FormControl(null, []),
    });
  }


  sendEmail() {
    this.loading = true;
    this.apiService.sendResetPasswordEmail(this.forgotPasswordForm.value).subscribe((data) => {
      this.loading = false;
      this.isEmailSent = true;
      this.alertService.success('Email has been sent to ' + this.forgotPasswordForm.get('email').value);
      this.forgotPasswordForm.get('code').setValidators([Validators.required]);
      this.forgotPasswordForm.get('new_password').setValidators([Validators.required]);
      this.forgotPasswordForm.get('confirm_password').setValidators([Validators.required]);
    }, (error => {
      this.loading = false;
    }));
  }

  changePassword() {
    this.loading = true;
    const observer$ = this.apiService.resetPassword(this.forgotPasswordForm.value);
    observer$.subscribe((data) => {
      this.loading = false;
      this.router.navigate(['login']);
      this.alertService.success('Password Updated Successfully');
    }, (error => {
      this.loading = false;
    }));
  }
}