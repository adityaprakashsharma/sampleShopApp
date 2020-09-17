import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdercheckoutComponent } from './ordercheckout/ordercheckout.component';
import { OrderCheckoutRoutingModule } from './checkout-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [OrdercheckoutComponent],
  imports: [
    CommonModule,
    OrderCheckoutRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class CheckoutModule { }
