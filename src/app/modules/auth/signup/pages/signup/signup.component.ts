import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { SignupFormData } from '../../interfaces/signup.interface';
import { NgIf } from '@angular/common';

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

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordsMatchValidator });
  }

  // Validador para confirmar que las contraseñas coinciden
  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const formData: SignupFormData = this.signupForm.value;
      console.log('Formulario enviado:', formData);
      this.registrase.emit(); // Emitir evento de registro si es necesario
      this.cerrar(); // Cerrar el modal
    } else {
      console.log('Formulario inválido');
    }
  }
}
