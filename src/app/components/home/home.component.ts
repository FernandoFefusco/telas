import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FuncionarioComponent } from '../funcionarios/funcionarios.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { VendasComponent } from '../vendas/vendas.component';
import { ClientesComponent } from '../clientes/clientes.component';
import { FuncionarioAddComponent } from '../funcionarios/funcionarios-add.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteAddComponent } from '../clientes/clientes-add.component';
import { ServicoAddComponent } from '../servicos/servicos-add.component';
import { VendaAddComponent } from '../vendas/vendas-add.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FuncionarioComponent, ServicosComponent, VendasComponent, ClientesComponent, FuncionarioAddComponent, ClienteAddComponent, ServicoAddComponent, VendaAddComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit{
  @ViewChild(FuncionarioComponent) funcionarioComponent!: FuncionarioComponent;
  @ViewChild(ClientesComponent) clienteComponent!: ClientesComponent;
  @ViewChild(ServicosComponent) servicosComponent!: ServicosComponent;
  @ViewChild(VendasComponent) vendaComponent!: VendasComponent;

  constructor(
    private modalService: NgbModal
  ) {}
  ngAfterViewInit(): void {
  }

  ngOnInit(){

  }

  addFuncionario() {
    const modalRef = this.modalService.open(FuncionarioAddComponent);
    this.funcionarioComponent.listar();
  }

  addCliente() {
    const modalRef = this.modalService.open(ClienteAddComponent);
      this.clienteComponent.listar();
  }

  addServico() {
    const modalRef = this.modalService.open(ServicoAddComponent);
    this.servicosComponent.listar();
  }

  addVenda() {
    const modalRef = this.modalService.open(VendaAddComponent);
    this.vendaComponent.listar();
  }
}
