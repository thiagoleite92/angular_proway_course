import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponentComponent } from './nao-encontrado-component/nao-encontrado-component.component';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosModule),
  },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  {
    path: 'carrinho',
    loadChildren: () =>
      import('./carrinho/carrinho.module').then((m) => m.CarrinhoModule),
  },
  {
    path: 'contato',
    loadChildren: () =>
      import('./contato/contato.module').then((m) => m.ContatoModule),
  },
  { path: '**', component: NaoEncontradoComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
