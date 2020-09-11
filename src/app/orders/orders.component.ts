import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  
  payNowSubmit = false;
  states = ["Bihar","Assam","Delhi","Punjab","Kerela","Orissa"];
  constructor(private fb : FormBuilder) { }

  orderForm = this.fb.group({
    cardDetail: this.fb.group ({
      cardHolderName: ['', Validators.minLength(6)],
      cardNumber: ['', Validators.minLength(16)],
      expiryDate : [''],
      cardPin : [''],
    }),

    addressGroup: this.fb.group ({
      houseNumber:[''],
      street: [''],
      city:[],
      state: ['Select']

    })
  })

  ngOnInit(): void {
  }

  payNow() {
    console.log("Orders ==> ",this.orderForm.value)
  }
}
