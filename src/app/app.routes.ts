import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/funcionarios', pathMatch: 'full' },
  { path: 'funcionarios', loadComponent: () => import('./components/funcionarios/funcionario-list/funcionario-list.component').then(m => m.FuncionarioListComponent) },
];
