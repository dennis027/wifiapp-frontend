import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { HomeComponent } from './home/home.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
@NgModule({
  declarations: [
    AppComponent,
   
    SignInComponent,
    SignUpComponent,
    AdminComponent,
    CustomerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
