import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from 'src/app/class/users';
import { Observable } from 'rxjs';


 const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

private api = "https://cors-anywhere.herokuapp.com/https://kinekit.herokuapp.com/user"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api);
  }
}
