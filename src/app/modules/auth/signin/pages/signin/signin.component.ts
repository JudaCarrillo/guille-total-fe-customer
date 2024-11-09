import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../../../../../common/services/session/session.service';
import { Utils } from '../../../../../utils/app.utils';
import { AuthService } from '../../../services/auth.service'; // Importar el servicio AuthService

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
})
export class SigninComponent {
  @Input() cerrar!: () => void;
  @Output() openSignupModal = new EventEmitter<void>();

  signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private sessionService: SessionService,
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.signinForm.markAllAsTouched();

    if (this.signinForm.invalid) {
      this.toastr.error('Por favor, completa los campos requeridos', 'Error');
      return;
    }

    this.authService.login(this.signinForm.value).subscribe({
      next: (res) => {
        if (!res.success) {
          this.toastr.error('Usuario no encontrado', 'Error');
          return;
        }

        Utils.setLocalStorageEncode('xUserData', {
          user: res.data.item,
          token: res.token,
        });

        this.toastr.success('Inicio de sesión exitoso', '¡Bienvenido!');
        this.sessionService.login();
        this.cerrar();
      },
      error: (err) => {
        this.toastr.error(err.message, 'Error');
      },
    });
  }

  onRegisterClick() {
    this.openSignupModal.emit();
    this.cerrar();
  }
}
