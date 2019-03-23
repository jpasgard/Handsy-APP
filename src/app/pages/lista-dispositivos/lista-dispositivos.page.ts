import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dispositivoDto } from 'src/app/model/dispositivo.dto';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


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
  constructor(private activated: ActivatedRoute, private qrScanner: QRScanner) {}

  ngOnInit(): void {
   this.id =  this.activated.snapshot.params.id;
    console.log(this.id);
    console.log("entrou");
  }

  cadastrarDispositivo(){
 
this.qrScanner.prepare()
.then((status: QRScannerStatus) => {
   if (status.authorized) {
     // camera permission was granted


     // start scanning
     let scanSub = this.qrScanner.scan().subscribe((text: string) => {
       console.log('Scanned something', text);

       this.qrScanner.hide(); // hide camera preview
       scanSub.unsubscribe(); // stop scanning
     });

   } else if (status.denied) {
     // camera permission was permanently denied
     // you must use QRScanner.openSettings() method to guide the user to the settings page
     // then they can grant the permission from there
   } else {
     // permission was denied, but not permanently. You can ask for permission again at a later time.
   }
})
.catch((e: any) => console.log('Error is', e));


  }}
