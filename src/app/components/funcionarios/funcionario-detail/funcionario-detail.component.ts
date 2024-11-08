// src/app/funcionarios/funcionario-detail/funcionario-detail.component.ts
import { Component, Input } from '@angular/core';

interface Funcionario {
  id: number;
  nome: string;
  cargo: string;
  telefone: string;
  email: string;
}

@Component({
  selector: 'app-funcionario-detail',
  templateUrl: './funcionario-detail.component.html',
})
export class FuncionarioDetailComponent {
  @Input() funcionario!: Funcionario;
}
