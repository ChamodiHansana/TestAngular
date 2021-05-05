import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { CreateCustomerComponent } from './customer/create-customer.component';
import { ListCustomerComponent } from './customer/list-customer.component';
import {CustomerService} from './customer/customer.service';
@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
