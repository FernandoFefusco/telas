import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']  // Adicione esta linha
})
export class LoginComponent implements OnInit {
  editForm: UntypedFormGroup;
  
  constructor(private router: Router, private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      username: [''], 
      password: ['']
    });
  }

  onSubmit() {
    console.log(this.editForm);
    if (this.editForm.controls['username'].value === 'admin' && this.editForm.controls['password'].value === 'admin') {
      this.router.navigate(['/funcionarios']);
    } else {
      alert('Credenciais inválidas');
    }
  }
}
