import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-ordercheckout',
  templateUrl: './ordercheckout.component.html',
  styleUrls: ['./ordercheckout.component.scss']
})
export class OrdercheckoutComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  checkoutOrderList = [];

  constructor(private _formBuilder: FormBuilder, private cartService: CartserviceService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.cartService.cartObject.subscribe((data) => {
      if(data){
        data.forEach(elem => {
          if(!(this.checkoutOrderList.indexOf(elem) > -1)){
            this.checkoutOrderList.push(elem);
          }else {
            console.log("Number of values already ===> ",this.checkoutOrderList.filter(elem => this.checkoutOrderList.indexOf(elem) >-1))
          }

        this.checkoutOrderList = data
      })
      }
    })
  }

  deleteFromCart (event){
    this.cartService.removeFromCart(event);
  }

}
