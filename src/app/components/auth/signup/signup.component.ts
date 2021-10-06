import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dialogbox } from '../../dialogbox/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  maxDate;
  info: any;
  submitted: Boolean = false;
  status:any;
  constructor(public dialog: MatDialog,  private authService: AuthService, private formBuilder: FormBuilder ) {
    this.info = '';
    this.status='';
  }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    }, {
      validator: MustMatch('password', 'confirmPassword')
  })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialogbox, {
      width: '350px',
      data: { text: this.info,status: this.status }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);

    });
  }

  // convenience getter for easy access to form fields
   get f() { return this.signupForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.signupForm.reset();
    }

  // onSubmit() {
  //   console.warn(this.signupForm.value)
  //   if (form.value.cpassword == form.value.password) {
  //     this.authService.signup(form.value).subscribe(res => {
  //       if (res.error == false) {
  //         this.info = res.text;
  //         this.status=false;
  //       }
  //       else {
  //         this.info = res.text; 
  //         this.status=true;
  //       }
  //       this.openDialog();
  //     }, error => {
  //       this.info = error;
  //       this.status=false;
  //       this.openDialog();
  //     });
  //   }
  //   else {
  //     this.info = "Confirmation Password should be same";
  //     this.status=false;
  //     this.openDialog();
  //   }
  // }

}
