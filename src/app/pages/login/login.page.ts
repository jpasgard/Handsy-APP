import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  public formGroup: FormGroup;

  constructor(private nav: NavController, private formBiuld: FormBuilder) {

    this.formGroup = this.formBiuld.group({
      email: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],

      senha: [null, Validators.compose([
        Validators.required
        
      ])]

    });
   }

   entrou(){
    console.log(this.formGroup.invalid);
    console.log(this.formGroup.value);
   }

}
function newFunction() {
  return this;
}



