import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dispositivoDto } from 'src/app/model/dispositivo.dto';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-lista-dispositivos',
  templateUrl: './lista-dispositivos.page.html',
  styleUrls: ['./lista-dispositivos.page.scss', '../comodos/comodos.page.scss'],
})
export class ListaDispositivosPage implements OnInit {
  private id: any;

  public dispositivos: dispositivoDto[] = [{
    id: '1', 
    comodo: '1',
    nomeDispositivo:'lampada',
    estado: true
  },
  {
    id: '1',
    comodo:'1',
    nomeDispositivo:'TV sala',
    estado: false
  }
];
  constructor(private activated: ActivatedRoute, 
    private barcodeScanner: BarcodeScanner,
    private alertController: AlertController) {}

  ngOnInit(): void {
   this.id =  this.activated.snapshot.params.id;
    console.log(this.id);
    console.log("entrou");
  }

  cadastrarDispositivo(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
        this.presentAlert(err);
     });
}
  async presentAlert(e: any) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: e,
      buttons: ['OK']
    });

    await alert.present();
  }
  captureToggle(valor: any): boolean{
    return valor.detail.checked;
    }

}
