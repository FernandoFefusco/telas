// src/app/funcionarios/funcionario-list/funcionario-list.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../../models/funcionario.models';
import { FuncionarioService } from '../../../services/funcionario.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-funcionario-list',
  standalone: true,  // Ensure the component is standalone
  imports: [CommonModule, HttpClientModule],  // Adicionando HttpClientModule aqui
  templateUrl: './funcionario-list.component.html',
})
export class FuncionarioListComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(){
    this.listar();
  }

  listar(){
    this.funcionarioService.getFuncionarios().subscribe((res: Funcionario[]) => {
      this.funcionarios = res;
    });
  }

}
