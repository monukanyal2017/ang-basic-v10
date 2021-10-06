import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

//import { AuthConstants } from '../auth.constants';
import { Dialogbox } from '../../dialogbox/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  info: any;
  status: any;
  loginForm:FormGroup;
  submitted: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.info = "";
    this.status = "";
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Dialogbox, {
      width: '350px',
      data: { text: this.info, status: this.status }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);

    });
  }
  get f() { return this.loginForm.controls; }

  verifyUser () {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }
  // login() {
  //   const val = form.value;

  //   if (val.email && val.password) {
  //     this.authService.login(val.email, val.password)
  //       .subscribe(
  //         (resp: any) => {
  //           console.log('resp:');
  //           console.log(resp);
  //           if (resp.error == false) {
  //             this.info = resp.text;
  //             this.status = false;
  //             this.authService.setSession(resp.result, resp.token);
  //             this.openDialog();
  //             this.router.navigate(['/home']);

  //           }
  //           else {
  //             this.info = resp.text;
  //             this.status = true;
  //             this.openDialog();
  //           }
  //         },
  //         (error: any) => {
  //           this.info = error;
  //           this.status = false;
  //           this.openDialog();
  //         }
  //       );
  //   }
}
