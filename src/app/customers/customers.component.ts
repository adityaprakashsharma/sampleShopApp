import { Component, OnInit } from '@angular/core';
import { Customer } from "./customer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  model =  new Customer("Mahesh","Suresh",9876543210,"adi@gm.com");
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Submit value Before=>",this.submitted)
    this.submitted = true;
    console.log("Submit value After=>",this.submitted)
  }

  newCustomer(evt) {
    console.log(evt.controls)
    let dataReceived  = evt.controls;
    console.log("model Vlaue after ====> ",this.model)
    this.model = new Customer(this.model.fname,this.model.lname,this.model.cMobile,this.model.cEmail);
    this.model.fname = "Suzy"
    console.log("model Vlaue after ====> ",this.model)
   
  }

}
