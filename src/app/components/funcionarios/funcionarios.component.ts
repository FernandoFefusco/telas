// src/app/funcionarios/funcionario-list/funcionario-list.component.ts
import { CommonModule } from '@angular/common';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario.models';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FuncionarioDetailsComponent } from './funcionarios-details.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [CommonModule, NgbModalModule  ],
  templateUrl: './funcionarios.component.html',
})
export class FuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(
    private funcionarioService: FuncionarioService, 
    private modalService: NgbModal,
    private funcionariosService: FuncionarioService, 
    private toastr: ToastrService,
  ) {}

  ngOnInit(){
    this.listar();
  }

  listar(){
    this.funcionarioService.getFuncionarios().subscribe((res: Funcionario[]) => {
      this.funcionarios = res;
    });
  }

  excluir(funcionario: Funcionario){
    this.funcionariosService.deleteFuncionario(funcionario.idUser).subscribe(
      (response) => {
        this.toastr.success('Funcionário excluido com sucesso!', 'Sucesso');
        this.listar();
      },
      (error) => {
        console.error('Erro ao excluir o funcionário:', error);
        this.toastr.error('Ocorreu um erro ao excluir o funcionário.', 'Erro');
      }
    );
  }

  openModal(funcionario: Funcionario) {
    const modalRef = this.modalService.open(FuncionarioDetailsComponent);
    modalRef.componentInstance.funcionarioSelecionado = funcionario;
    modalRef.componentInstance.funcionarioAtualizado.subscribe(() => {
      this.listar();
    });
  }

}
