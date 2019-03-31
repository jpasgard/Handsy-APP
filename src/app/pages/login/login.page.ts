import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HandsyService } from 'src/app/services/handsy/handsy.service';
import { Login } from 'src/app/model/login';
import { async } from '@angular/core/testing';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  public loginIf = true;
  public register = false;
  login: Login = <Login>{};

// tslint:disable-next-line: max-line-length
  constructor( private handsyService: HandsyService, public alertController: AlertController) {}

  onLogin() {
    this.handsyService.autenticacao(this.login)
    .subscribe((jwtResponse) => {
      localStorage.setItem('token', jwtResponse.token);
      console.log(jwtResponse.token);
    },
    async () => {
      this.exibirAlertError();
    });
  }

  exibir() {
    this.loginIf = !this.loginIf;
    this.register = !this.register;
  }
  async exibirAlertError() {
    const alert = await this.alertController.create({
      header: 'Erro de autenticação!',
      message: 'Não foi possível efetuar o login',
      buttons: [
         {
          text: 'Voltar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
  
    await alert.present();
  }
}



