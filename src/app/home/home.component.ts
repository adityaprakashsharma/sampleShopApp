import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get().subscribe( (data: any[]) => {
      console.log("Data :", data);
      this.products = data ;
    })
  }

}
