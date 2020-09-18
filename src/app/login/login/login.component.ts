import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: string;
  username: string;
  isValidUser: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Username => ", this.username);
    console.log("Password => ", this.password);
    console.log("RememberMe => ", this.isValidUser)
  }
}
