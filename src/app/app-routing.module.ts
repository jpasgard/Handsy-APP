import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'dispositivos', loadChildren: './pages/lista-dispositivos/lista-dispositivos.module#ListaDispositivosPageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
