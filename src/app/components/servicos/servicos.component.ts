// src/app/produtos/produto-list/produto-list.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.component.html',
})
export class ServicosComponent implements OnInit {
  produtos: Produto[] = [
    { id: 1, nome: 'Shampoo', preco: 25.0 },
    { id: 2, nome: 'Gel para cabelo', preco: 15.0 }
  ];

  constructor() {}

  ngOnInit(): void {}
}
