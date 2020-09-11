import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Order } from './order'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  
  payNowSubmit = false;
  constructor(private fb : FormBuilder) { }

  orderForm = this.fb.group({
    cardHolderName: [''],
    cardNumber: [''],
    expiryDate : [''],
    cardPin : ['']
  })

  ngOnInit(): void {
  }

  payNow() {
    console.log("Orders ==> ",this.orderForm.value)
  }
}
