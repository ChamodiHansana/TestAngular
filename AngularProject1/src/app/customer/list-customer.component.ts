import { Component, OnInit } from '@angular/core';
import  { CustomerService} from './customer.service';
import {Icustomer} from './Icustomer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styles: [
  ]
})
export class ListCustomerComponent implements OnInit {
  customers: Icustomer[];

  constructor(private _customerService: CustomerService, private _route: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    
    this._customerService.getCustomers().subscribe(
      (listCustomers) => this.customers=listCustomers,
      (err) => console.log(err)
    );

  }
  editButtonClick(custId: number){
    this._route.navigate(['/edit',custId]);
    

  }
 

  


   
  

}
