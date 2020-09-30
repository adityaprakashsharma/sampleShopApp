import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Login } from '../login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isValidUser: boolean = false;

  loginCred = new Login('', '', false)

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event){
    console.log("Username => ", event);
    // console.log("Password => ", this.password);
    // console.log("RememberMe => ", this.isValidUser)
  }
}
