import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './_helpers/must-match.validator';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  maxDate;
  submitted: Boolean = false;
  loading:Boolean = false;
  constructor(private formBuilder: FormBuilder,
     private apiService: ApiService,
     private alertService: AlertService,
     private router: Router) {}

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.signupForm = this.formBuilder.group({
        name: ['', Validators.required],
        email:['', [Validators.required, Validators.email]],
        dob: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm_password: ['', Validators.required],
        job_category: ['', Validators.required],
        experience_level: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      }, {
        validator: MustMatch('password', 'confirm_password')
    })
  }

  // convenience getter for easy access to form fields
   get f() { return this.signupForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }

        this.apiService.signup(this.signupForm.value).subscribe((data) => {
          this.loading = false;
          this.router.navigate(['']);
          this.alertService.success('signup Successful');
        }, (error) => {
          this.loading = false;
        });
    }

    onReset() {
        this.submitted = false;
        this.signupForm.reset();
    }
}
