import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Certifique-se de que este caminho está correto
import { DashboardComponent } from './dashboard/dashboard.component'; // Certifique-se de que este import está correto

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent // Certifique-se de que este componente está declarado
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  