import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './customer/create-customer.component';
import { ListCustomerComponent } from './customer/list-customer.component';

const routes: Routes = [
  { path : 'list' , component:ListCustomerComponent},
  { path : 'create' , component:CreateCustomerComponent},
  { path : 'edit/:id' , component:CreateCustomerComponent},
  { path : '' , redirectTo:'/list', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
