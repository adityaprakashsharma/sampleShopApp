import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppInterceptor } from './core/app_interceptor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { AddressComponent } from './address/address.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './guard/auth.guard';
import { CustomerGuard } from './guard/customer.guard';
import { CurrenyLocalPipe } from './pipe/curreny-local.pipe';
import { StickyHeaderDirective } from './sticky-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddressComponent,
    ProductDetailsComponent,
    CurrenyLocalPipe,
    StickyHeaderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    MatSidenavModule,
    MatSelectModule,
    MatBadgeModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor , multi: true},
    AuthGuard,
    CustomerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
