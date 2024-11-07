import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-signin',
  templateUrl: '../pages/signup/signup.component.html',
  styleUrls: ['../pages/signup/signup.component.scss'],
})
export class SignupComponent {
  @Input() cerrar: () => void = () => {};
  @Output() registrase = new EventEmitter<void>();
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      this.authService.register(formData).subscribe(
        response => {
          if (response.success) {
            console.log('Usuario registrado');
            this.registrase.emit();
            this.cerrar();
          } else {
            console.log(response.message);
          }
        },
        error => {
          console.error('Error en el registro:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}