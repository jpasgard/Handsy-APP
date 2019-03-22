import { Component, OnInit } from '@angular/core';
import { dispositivoDto } from 'src/app/model/dispositivo.dto';

@Component({
  selector: 'app-lista-dispositivos',
  templateUrl: './lista-dispositivos.page.html',
  styleUrls: ['./lista-dispositivos.page.scss'],
})
export class ListaDispositivosPage  {
 public dispositivos: dispositivoDto[] = [{
  id:'1',
  comodo:'quarto',
  dispositvo:'lampada'
 },
 {
   id:'2',
   comodo:'sala',
  dispositvo:'lampada'
 },
 {
   comodo: 'cozinha'
 }

];
  constructor() { 
    
  }

}
