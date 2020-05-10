import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgLoginComponent } from './PrimeNg/ng-login/ng-login.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { NgHomeComponent } from './PrimeNg/ng-home/ng-home.component';


const appRoutes: Routes = [  
  { path: '', redirectTo: '/nglogin', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },   
  { path: 'nglogin', component: NgLoginComponent },
  { path: 'ngHome/:id/:name', component: NgHomeComponent },
  { path: '**', redirectTo: '/nglogin', pathMatch: 'full' },
];

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }
