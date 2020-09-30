import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpResponse } from '@angular/common/http';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [];
  category = [];
  originalDataSet = [];
  selected = "showAll";
  constructor(private apiService: ApiService, private cartService: CartserviceService) { }

  ngOnInit(): void {
    this.apiService.get().subscribe( (data: any[]) => {
      console.log("Data :", data);
      this.originalDataSet = data['data'];
      this.products = data['data'] ;
      this.products.forEach(elem => {if(!(this.category.indexOf(elem.category) >-1)){this.category.push(elem.category)}});
      this.apiService.setProductData(this.products)
      console.log(this.originalDataSet)
    })
  }



  showSelectedCategory(evt){
    console.log(evt)
    if(evt.value === "showAll"){
      this.products = this.originalDataSet;
    }else {
      this.products = this.originalDataSet.filter(elem => elem.category === evt.value);
    }

  }

  addToCart(event){
    console.log("Object to add to Cart",event);
    console.log(this.cartService.addCartObject(event));
  }

  removeFromCart(event){
    this.cartService.removeFromCart(event);
  }

}
