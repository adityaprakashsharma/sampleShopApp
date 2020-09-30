import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './guard/auth.guard';
import { CustomerGuard } from './guard/customer.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', canActivate: [AuthGuard],component: AboutComponent },
  { path: 'customers',  canLoad: [CustomerGuard],loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'checkout', loadChildren: () => import ('./checkout/checkout.module').then(m => m.CheckoutModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m =>m.LoginModule)},
  { path: 'products/:id', component: ProductDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
