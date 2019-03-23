import { Component, OnInit } from '@angular/core';
import { ComodoDto } from 'src/app/model/comodo.dto';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-comodos',
  templateUrl: './comodos.page.html',
  styleUrls: ['./comodos.page.scss'],
})
export class ComodosPage {
  public comodos: ComodoDto[] = [{
    id:'1',
    comodo:'quarto'
    
   },
   {
     id:'2',
     comodo:'sala'

   },
   {
     id:'3',
     comodo: 'cozinha'
   },
   {
     id:'4',
     comodo: 'quarto'
   }
  
  ];
  
  constructor(private nav: NavController) { }

  showDispositivos(id: string){
    this.nav.navigateForward('dispositivos');
  }
}
