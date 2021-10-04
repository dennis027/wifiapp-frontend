import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Users } from 'src/app/class/users';
import { AuthService } from 'src/app/service/auth.service.service';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public search:any = '';
    userSearch: any[] = [];
  username!: any;
  user_id: any
  newArray!: any[]
  user:any = [];
  data:any = [];
  users!: any[];
  allUsers:any;

  constructor(private authService: AuthService, config: NgbModalConfig, private modalService: NgbModal,private http: HttpClient,private userService:UserService) {
    config.backdrop = 'static';
    config.keyboard = false;

   }
   open(content: any) {
    this.modalService.open(content, {
      size: 'xl',
    });
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')
    this.user_id = localStorage.getItem('user_id')
    this.userService.getData().subscribe((res: any[]) => {
      this.allUsers = res;

    })


  }

}
