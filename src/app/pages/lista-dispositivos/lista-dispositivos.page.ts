import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dispositivoDto } from 'src/app/model/dispositivo.dto';

@Component({
  selector: 'app-lista-dispositivos',
  templateUrl: './lista-dispositivos.page.html',
  styleUrls: ['./lista-dispositivos.page.scss'],
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
  constructor(private activated: ActivatedRoute) {}

  ngOnInit(): void {
   this.id =  this.activated.snapshot.params.id;
    
  }

  

}
