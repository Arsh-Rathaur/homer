import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgHomeComponent } from './PrimeNg/ng-home/ng-home.component';
import { NgLoginComponent } from './PrimeNg/ng-login/ng-login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FooterComponent } from './Layouts/footer/footer.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenuItem } from 'primeng/api';
import {CardModule} from 'primeng/card';
import { LoginLayoutComponent } from './Layouts/LoginLayout/login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NgLoginComponent,
    FooterComponent,
    HeaderComponent,
    NgHomeComponent,
    LoginLayoutComponent
  ],
  imports: [
    ContextMenuModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CheckboxModule,
    MenubarModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
