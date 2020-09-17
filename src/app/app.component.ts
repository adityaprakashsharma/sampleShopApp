import { Component, OnInit } from '@angular/core';
import { CartserviceService } from './service/cartservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shoppingCart';
  cartItems;
  navToggle = false;
  constructor(private cartService:  CartserviceService){};
  toggleNav(){
    this.navToggle = !this.navToggle
  }

  ngOnInit(){
    this.cartService.cartObject.subscribe((data) => {
      console.log("Data Value",data)
      if(data){
        this.cartItems = data.length;
      }else {
        this.cartItems = 0;
      }
    })
  }
  

}
