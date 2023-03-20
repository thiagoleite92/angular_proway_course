import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const cart = localStorage.getItem('carrinho');

    if (cart) {
      return;
    } else {
      localStorage.setItem('carrinho', JSON.stringify([]));
    }
  }
  title = 'angular_proway_carrinho';
}
