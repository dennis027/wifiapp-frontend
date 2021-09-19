import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router,) { }

  register(username: string, email: string, phone: string, role: string, password: string): Observable<any> {
    return this.http.post(environment.AUTH_API + 'register/', {
      username,
      email,
      phone,
      role,
      password
    }, httpOptions);
  }


  login(userdata: any): Observable<any> {
    return this.http.post(environment.TOKEN + 'token/', userdata)
  }

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);

  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(environment.AUTH_API + 'user/',);
  }

}