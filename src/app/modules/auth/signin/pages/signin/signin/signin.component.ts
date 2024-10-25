import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SigninData } from '../../../interfaces/signin.interface';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true, // Componente standalone
  imports: [ReactiveFormsModule, NgIf], // Importa lo necesario aquí
})
export class SigninComponent {
  signinForm: FormGroup;
  fakeUser: SigninData = {
    email: 'user@example.com',
    password: '123456'
  };

  constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const formValues = this.signinForm.value;

      // Simulación de autenticación con datos falsos
      if (formValues.email === this.fakeUser.email && formValues.password === this.fakeUser.password) {
        console.log('Login exitoso');
        // Lógica para manejar un login exitoso
      } else {
        console.error('Email o contraseña incorrectos');
        // Lógica para manejar errores
      }
    }
  }
}
