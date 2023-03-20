import { Router } from '@angular/router';
import { NotificacaoService } from './../notificacao.service';
import { IProdutoCarrinho } from './../produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total: number = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularToltal();
  }

  calcularToltal() {
    this.total = this.itensCarrinho.reduce(
      (prev, curr) => prev + curr.preco * curr.quantidade,
      0
    );
  }

  removeCarrinhoProduto(produtoId: number) {
    this.carrinhoService.removerItemCarrinho(produtoId);
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularToltal();
  }

  comprar() {
    alert(
      'Parabéns! Compra finalizada, fique ligado na sua caixa de email para mais informações!'
    );

    this.carrinhoService.limparCarrinho();

    this.router.navigate(['produtos']);
  }
}
