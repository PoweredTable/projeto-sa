import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro-salas',
    loadChildren: () => import("./pages/cadastro-sala/cadastro-sala.module").then( m => m.CadastroSalaPageModule)
  },
  {
    path: 'banco-perguntas',
    loadChildren: () => import('./pages/banco-perguntas/banco-perguntas.module').then( m => m.BancoPerguntasPageModule)
  },
  {
    path: 'play',
    loadChildren: () => import('./pages/play/play.module').then( m => m.PlayPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
