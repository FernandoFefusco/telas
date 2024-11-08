import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FuncionarioComponent } from '../funcionarios/funcionarios.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { VendasComponent } from '../vendas/vendas.component';
import { ClientesComponent } from '../clientes/clientes.component';
import { FuncionarioAddComponent } from '../funcionarios/funcionarios-add.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FuncionarioComponent, ServicosComponent, VendasComponent, ClientesComponent, FuncionarioAddComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) {}

  ngOnInit(){

  }

  addFuncionario() {
    const modalRef = this.modalService.open(FuncionarioAddComponent);
  }
}
