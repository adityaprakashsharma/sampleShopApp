import { Injectable } from '@angular/core';
import { Observable,of, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  cart:Array<Object> = [] ;
  cartObject = new BehaviorSubject([]);
//  cart = this.cartObject.asObservable();
  
  constructor() { }
  public getCartObject(){
    this.cartObject.next(this.cart)
  }

  public addCartObject(cartObject) {
    this.cart.push(cartObject);
    this.cartObject.next([...this.cart]);
  }

  public updateCartObject(cardObject){
    let numberOfCartObj = this.cart.filter(elem => elem === cardObject);
    if(numberOfCartObj.length >0){
      this.cart.push(cardObject);
    }
    return this.cart;
  }

  public removeFromCart(cardObject){
      console.log("Cart Value = >", cardObject);
      console.log("Cart Object =>> ",this.cart);
      this.cart.forEach((elem,index) => { if(elem === cardObject){console.log("We are here");this.cart.splice(index,1)}})
      this.cartObject.next(this.cart);
  }
}
