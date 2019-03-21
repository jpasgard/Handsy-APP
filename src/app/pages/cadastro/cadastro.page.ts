import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  formGroup: FormGroup; 
  constructor(private nav: NavController, private formBiuld: FormBuilder) {

    this.formGroup = this.formBiuld.group({
      nome:[null, Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)
      ])],
      
      email: [null, Validators.compose([
        Validators.required,
        Validators.email
      
      ])],

      senha: [null, Validators.compose([
        Validators.required
        
      ])]

    });
   }
}
