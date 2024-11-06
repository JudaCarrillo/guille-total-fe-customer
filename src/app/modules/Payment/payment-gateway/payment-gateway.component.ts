import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrl: './payment-gateway.component.scss'
})
export class PaymentGatewayComponent {
  selectedMethod: string = 'paypal';

  constructor(private dialogRef: MatDialogRef<PaymentGatewayComponent>) {}

  // Método para cerrar el modal
  close(): void {
    this.dialogRef.close();
  }

  // Método para suscribirse
  continuePurchase(): void {
    if (this.selectedMethod) {
      console.log(`Usuario suscrito al plan Pro usando ${this.selectedMethod}`);
      this.dialogRef.close(); // Cerrar el modal después de la suscripción
    } else {
      alert('Por favor, selecciona un método de pago');
    }
  }
}
