import { Injectable } from '@angular/core';
import { Observable,of, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  cart:Array<Object> = [] ;
  cartObject = new BehaviorSubject([]);
//  cart = this.cartObject.asObservable();
  
  constructor() { 
    this.getLocalData();
  }

  private saveDataToLocal(){
    localStorage.setItem("cart-data",JSON.stringify(this.cart));
  }


  
  public getCartObject(){
    this.cartObject.next(this.cart)
  }

  public addCartObject(cartObject) {
    this.cart.push(cartObject);
    this.saveDataToLocal();
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
      this.cart.forEach((elem,index) => { if(elem === cardObject){console.log("We are here");this.cart.splice(index,1)}});
      this.saveDataToLocal();
      this.cartObject.next(this.cart);
  }

  private getLocalData(){
    let cartDataOnLoad = window.localStorage.getItem("cart-data");
    if(cartDataOnLoad.length > 0){
      this.cartObject.next(JSON.parse(cartDataOnLoad));
    }
  }
  
}
