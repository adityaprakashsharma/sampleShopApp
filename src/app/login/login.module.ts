import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class LoginModule { }
