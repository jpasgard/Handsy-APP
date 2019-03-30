import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  public login = true;
  public register = false;

  constructor(private nav: NavController, private formBiuld: FormBuilder) {}

  exibir() {
    this.login = !this.login;
    this.register = !this.register;
  }
}



