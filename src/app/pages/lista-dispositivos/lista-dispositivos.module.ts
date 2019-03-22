import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDispositivosPage } from './lista-dispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDispositivosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDispositivosPage]
})
export class ListaDispositivosPageModule {}
