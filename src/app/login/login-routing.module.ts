import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

const loginRoutees:Routes = [
    { path:'', component: LoginComponent }
]

@NgModule(
    {
        imports: [RouterModule.forChild(loginRoutees)],
        exports : [RouterModule]
    }
)

export class LoginRoutingModule {

}
