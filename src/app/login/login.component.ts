import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { loginViewModel } from 'src/Model/login';
import { LoginApiService } from 'src/Services/Login/login-api.service';
import { result } from 'src/Model/Result';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Login: loginViewModel
  LoginForm: FormGroup;
  Data: any;

  constructor(private formBuilder: FormBuilder, private service: LoginApiService) 
  {
    this.LoginForm = this.formBuilder.group({
      name: '',
      password: '',
      file: '',
    });

  }

  ngOnInit() {
  }


  onSubmit(loginInfo) {
    debugger;
    this.Login = loginInfo

    var t = this.service.getHeroes().subscribe(heroes => this.Data = heroes);
    console.warn('Your order has been submitted', this.Data);
  }

}
