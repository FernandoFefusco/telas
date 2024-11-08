// src/app/vendas/venda-list/venda-list.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Venda {
  id: number;
  data: string;
  valor: number;
}

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  vendas: Venda[] = [
    { id: 1, data: '2023-11-07', valor: 100.0 },
    { id: 2, data: '2023-11-06', valor: 200.0 }
  ];

  constructor() {}

  ngOnInit(): void {}
}
