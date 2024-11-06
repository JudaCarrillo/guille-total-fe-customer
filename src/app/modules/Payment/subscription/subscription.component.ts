import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PaymentGatewayComponent } from '../../../modules/Payment/payment-gateway/payment-gateway.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'] // Cambié 'styleUrl' a 'styleUrls' para el array de estilos
})
export class SubscriptionComponent {
  constructor(
    private dialogRef: MatDialogRef<SubscriptionComponent>,
    private dialog: MatDialog // Inyectamos MatDialog para abrir otros diálogos
  ) {}

  // Método para abrir el diálogo de pago
  openPaymentDialog(): void {
    const dialogRef = this.dialog.open(PaymentGatewayComponent, {
      width: '850px',
      maxWidth: '90vw',
      height: '600px',
      panelClass: 'custom-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Diálogo de pago cerrado con resultado:', result);
      }
    });
  }

  // Método para cerrar el modal actual
  close(): void {
    this.dialogRef.close();
  }

  // Método para suscribirse
  subscribe(): void {
    console.log('Usuario suscrito al plan Pro');
    this.dialogRef.close(); // Cerrar el modal después de la suscripción
  }
}
