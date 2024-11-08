import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SignupFormData } from '../../interfaces/signup.interface';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class SignupComponent {
  @Input() cerrar: () => void = () => {}; // Define como función
  @Output() registrase = new EventEmitter<void>();
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService
  ) {
    this.signupForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        birthDate: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  // Validador para confirmar que las contraseñas coinciden
  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  onSubmit(): void {
    this.signupForm.markAllAsTouched();

    if (this.signupForm.invalid) {
      this.toastr.error('Por favor, completa los campos requeridos', 'Error');
      return;
    }

    const formData = this.signupForm.value;
    const body = {
      name: formData.firstName,
      paternal_surname: formData.lastName,
      maternal_surname: formData.lastName,
      data_of_birth: formData.birthDate,
      email: formData.email,
      password: formData.password,
    };

    this.authService.signup(body).subscribe({
      next: (res) => {
        if (!res.success) {
          this.toastr.error('Error al registrar el usuario', 'Error');
          return;
        }

        this.toastr.success('Usuario registrado exitosamente', '¡Bienvenido!');
        this.registrase.emit();
        this.cerrar();
      },
      error: (err) => {
        this.toastr.error(err.message, 'Error');
      },
    });
  }
}
