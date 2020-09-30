import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productItem;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("ACtivated ROute => ", this.activatedRoute.snapshot.params['id'])
    let productsList = this.apiService.getProductList()
    productsList.forEach(element => {
       console.log("elemenet ==> ",element)
      if(this.activatedRoute.snapshot.params['id'] === element['ean']){
        console.log("Product Item ====> ", element)
        this.productItem = element;
      }
    });

  }

}
