import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import {ContactComponent} from './contact/contact/contact.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'customer', component:CustomerComponent},
  {path:'admin', component:AdminComponent},
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
