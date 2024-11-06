import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent {
  constructor(private dialogRef: MatDialogRef<SubscriptionComponent>) {}

  // Método para cerrar el modal
  close(): void {
    this.dialogRef.close();
  }

  // Método para suscribirse (ejemplo)
  subscribe(): void {
    // Aquí podrías agregar la lógica de suscripción
    console.log('Usuario suscrito al plan Pro');
    this.dialogRef.close(); // Cerrar el modal después de la suscripción
  }
}
