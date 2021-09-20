import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/service/token-storage.service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 form:any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  token: any;
  res:any;
  
 
 

  constructor(private authService: AuthService, private router: Router,
    private tokenStorage: TokenStorageService) { }

    

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.form = {
      username: '',
      password: '',
    }
    
  }
  onSubmit() {
    this.authService.login(this.form).subscribe((res: any) => {
      console.log(res)
      
     
      
      localStorage.setItem('accessToken',res['token'])
      localStorage.setItem('username', res['username'])
      localStorage.setItem('user_id', res['user_id'])
      localStorage.setItem('role', res['role'])
     
    
      // this.toastr.success('Logged in successfully');
  
      if ((res['role']) === "is_admin") {
        this.router.navigate(['admin']);
      }
      else{
        this.router.navigate(['customer']);
      }

    }, error => {
      // this.toastr.error('Kindly provide the correct credentials');
    })
   
  }

  reloadPage(): void {
    window.location.reload();
  }
}

function username(username: any) {
  throw new Error('Function not implemented.');
}
