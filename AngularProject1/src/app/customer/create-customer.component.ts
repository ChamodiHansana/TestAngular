import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from './customer.service';
import {Icustomer} from './Icustomer';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styles: [
  ]
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private route: ActivatedRoute,private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl(),
      tp: new FormControl(),

    });

    this.route.paramMap.subscribe(params => {
      const custId =+params.get('id')!
      if(custId){
        this.getCustomer(custId);
      }
      
    });
  
     
  }

  getCustomer(id: number){
    this.customerService.getCustomer(id).subscribe(
      (customer: Icustomer) => this.editCustomer(customer),
      (err: any) => console.log(err)
    );

  }

  editCustomer(customer: Icustomer){
    this.customerForm.patchValue({
      
      name:customer.name,
      tp:customer.tp

    });

  }

  onLoadDataClick(): void{
    this.customerForm.patchValue({
      name: 'chamodi',
      tp:'0767351026'
    });
  }

  onSubmit(): void{
    console.log(this.customerForm.touched);
    console.log(this.customerForm.value);
    console.log(this.customerForm.controls.name.touched);
    console.log(this.customerForm.get('name'));
  }

  

}
