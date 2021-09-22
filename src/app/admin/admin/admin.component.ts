import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/service/auth.service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username!: any;
  user_id: any
  newArray!: any[]


  constructor(private authService: AuthService, config: NgbModalConfig, private modalService: NgbModal) {
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

  }

}
