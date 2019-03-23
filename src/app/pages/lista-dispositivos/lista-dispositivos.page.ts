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
  constructor(private activated: ActivatedRoute, private bar: QRScanner) {}

  ngOnInit(): void {
   this.id =  this.activated.snapshot.params.id;
    console.log(this.id);
  }

  cadastrarDispositivo(){
    let scanSub = this.bar.scan().subscribe((text: string)=>{
      console.log(text);
      this.bar.hide();
     scanSub.unsubscribe();
    },error=> console.log(error));
  }

}
