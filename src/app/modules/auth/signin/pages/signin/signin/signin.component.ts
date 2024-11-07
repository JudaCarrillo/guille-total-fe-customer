import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SigninData } from '../../../interfaces/signin.interface';
import { AuthService } from '../../../../services/auth.service'; // Importar el servicio AuthService
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

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService // Inyectamos el AuthService
  ) {
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

        // Usamos el AuthService para iniciar sesión
        this.authService.login(formValues.email);
        this.login.emit(formValues.email);

        // Mensaje de éxito de Toastr
        this.toastr.success('Inicio de sesión exitoso', '¡Bienvenido!');

        this.cerrar(); // Cierra el modal después de iniciar sesión
      } else {
        this.errorMessage = 'Correo o contraseña incorrectos';
        // Mensaje de error de Toastr
        this.toastr.error(this.errorMessage, 'Error');
        console.error(this.errorMessage);
      }
    }
  }

  onRegisterClick() {
    this.openSignupModal.emit(); // Emitir evento para abrir el modal
    this.cerrar(); // Cierra el modal de inicio de sesión antes de abrir el de registro
  }
}
