import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { OrdercheckoutComponent } from './ordercheckout/ordercheckout.component';

const checkoutRoutes: Routes = [{path: '', component: OrdercheckoutComponent}]

@NgModule ({
    imports: [RouterModule.forChild(checkoutRoutes)],
    exports: [RouterModule]
})

export class OrderCheckoutRoutingModule {}