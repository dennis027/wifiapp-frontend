import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { CustomerComponent } from './customer/customer/customer.component';

const routes: Routes = [
  {path: 'customer', component:CustomerComponent},
  {path:'admin', component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
