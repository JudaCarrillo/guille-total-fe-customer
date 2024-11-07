import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-signin',
  templateUrl: '../pages/signin/signin/signin.component.html',
  styleUrls: ['../pages/signin/signin/signin.component.scss'],
})
export class SigninComponent {
  @Input() cerrar!: () => void;
  @Output() login = new EventEmitter<string>();
  @Output() openSignupModal = new EventEmitter<void>();

  signinForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;

      this.authService.login(email, password).subscribe(
        response => {
          if (response.success) {
            console.log('Login exitoso');
            this.login.emit(email);
            localStorage.setItem('accessToken', response.token.accessToken);
            this.cerrar();
          } else {
            this.errorMessage = response.message;
          }
        },
        error => {
          this.errorMessage = 'Error al iniciar sesión';
          console.error('Error de autenticación:', error);
        }
      );
    }
  }

  onRegisterClick() {
    this.openSignupModal.emit();
    this.cerrar();
  }
}