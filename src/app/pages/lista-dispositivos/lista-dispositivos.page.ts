import { DeviceEntity } from '../../model/device-entity';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';
import { HandsyService } from 'src/app/services/handsy/handsy.service';


@Component({
  selector: 'app-lista-dispositivos',
  templateUrl: './lista-dispositivos.page.html',
  styleUrls: ['./lista-dispositivos.page.scss'],
})
export class ListaDispositivosPage{
  private id: any;
  private barcode: any;
  public devices;
  constructor(
    private nav: NavController,
    private activated: ActivatedRoute, 
    private barcodeScanner: BarcodeScanner,
    private alertController: AlertController,
    private vibration: Vibration,
    private handsyService: HandsyService) {}
  
  ngOnInit() {
    this.handsyService.getDevices(localStorage.getItem('email')).subscribe(data => {
      this.devices = data;
    });
  }
  
  logout(){
    this.nav.navigateForward('');
  }

  cadastrarDispositivo(){
    this.id =  this.activated.snapshot.params.id;
    this.barcodeScanner.scan().then(barcodeData => {
      this.vibration.vibrate(200);
      this.barcode = barcodeData.text;
      
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
  
  captureToggle(device: DeviceEntity) {
    this.handsyService.saveStatusDevice(device).subscribe((response)=>{
      console.log('Response: ' + response.deviceName + " status: " + response.status);
    });
    }

}
