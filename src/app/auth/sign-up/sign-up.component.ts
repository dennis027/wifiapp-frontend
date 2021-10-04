import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service.service';
import { Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    phone: 0,
    password: null,
    role: [],
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
     private authService: AuthService,
    private router: Router,
    // private toastr: ToastrService
    ) { }

    ngOnInit(): void {}

    // showSuccess() {
    //   this.toastr.success('Successfully signed up');
    // }

    onSubmit(): void {
      let { username, email, phone, is_customer, is_admin, role, password } =
        this.form;

      this.authService.register(username, email, phone, role = 'is_customer', password).subscribe(
        (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['signin']);
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  }
