import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { SigninData } from '../../../interfaces/signin.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
})
export class SigninComponent {
  @Input() cerrar!: () => void;
  @Output() login = new EventEmitter<string>();
  @Output() openSignupModal = new EventEmitter<void>();

  signinForm: FormGroup;
  fakeUser: SigninData = {
    email: 'user@example.com',
    password: '123456'
  };

  errorMessage: string | null = null; // Para mostrar mensajes de error

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
        this.login.emit(formValues.email); // Emite el correo como nombre del usuario
        localStorage.setItem('userName', formValues.email);
        this.cerrar(); // Cierra el modal después de iniciar sesión
      } else {
        this.errorMessage = 'Email o contraseña incorrectos'; // Mensaje de error
        console.error(this.errorMessage);
      }
    }
  }

  onRegisterClick() {
    this.openSignupModal.emit(); // Emitir evento para abrir el modal
    this.cerrar(); // Cierra el modal de inicio de sesión antes de abrir el de registro
  }
}
