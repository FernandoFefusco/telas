import { Routes } from '@angular/router';
import { FuncionarioListComponent } from './components/funcionarios/funcionario-list/funcionario-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch:'full' }, // Rota inicial
  { path: 'funcionarios', component: FuncionarioListComponent, pathMatch:'full' },
];
