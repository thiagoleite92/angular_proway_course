import { NotificacaoService } from './notificacao.service';
import { IProdutoCarrinho } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor(private notificacaoService: NotificacaoService) {}

  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    if (this.obtemCarrinho().length >= 1) {
      this.itens = this.obtemCarrinho();
      this.itens.push(produto);
      localStorage.setItem('carrinho', JSON.stringify(this.itens));
    } else {
      this.itens.push(produto);
      localStorage.setItem('carrinho', JSON.stringify(this.itens));
    }
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }

  removerItemCarrinho(id: number) {
    const carrinhoAtual = this.obtemCarrinho();

    const itemIndex = carrinhoAtual.findIndex((item) => item.id === id);

    if (itemIndex > -1) {
      carrinhoAtual.splice(itemIndex, 1);
      localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
    }

    this.notificacaoService.notificar('Item removido do carrinho');
  }
}
