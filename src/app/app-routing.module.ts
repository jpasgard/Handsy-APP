import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },  { path: 'cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
