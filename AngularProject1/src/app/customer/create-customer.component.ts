import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from './customer.service';
import {Icustomer} from './Icustomer';
import {Router} from '@angular/router'




@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styles: [
  ]
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer: Icustomer;

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(): void {

    
    
    this.customerForm = new FormGroup({
      name: new FormControl(),
      tp: new FormControl()

    });

    this.route.paramMap.subscribe(params => {
      const Custid = +params.get('id')!
        if (Custid) {
          this.getCustomer(Custid);
          
        }else{
          this.customer = {
               id: 0,
               name:'',
               tp:''
          };
         
        }
      
    });
  }

  getCustomer(id: number){
    this.customerService.getCustomer(id).subscribe(
      (customer: Icustomer) => {
        this.editCustomer(customer);
        this.customer=customer;
        
      },
      (err: any) => console.log(err)
    );

  }

  editCustomer(customer: Icustomer){
    this.customerForm.setValue({
      
      name:customer.name,
      tp:customer.tp

    });

  }

  onLoadDataClick(): void{
    this.customerForm.setValue({
      name: 'chamodi',
      tp:'0767351026'
    });
  }

  onSubmit(): void{
   this.MapFormValuesToCustomerModel();
   if(this.customer.id){
   this.customerService.updateCustomer(this.customer).subscribe(
     ()=>this.router.navigate(['/list']),
     (err: any)=> console.log(err)
   );
  }else{
    this.customerService.addCustomer(this.customer).subscribe(
      ()=>this.router.navigate(['/list']),
      (err: any)=> console.log(err)
    );
  }
  }


  MapFormValuesToCustomerModel(){
    this.customer.name=this.customerForm.value.name;
    this.customer.tp=this.customerForm.value.tp;
  }

 

}
