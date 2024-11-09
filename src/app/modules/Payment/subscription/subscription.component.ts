import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PaymentGatewayComponent } from '../../../modules/Payment/payment-gateway/payment-gateway.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  constructor(
    private dialogRef: MatDialogRef<SubscriptionComponent>,
    private dialog: MatDialog
  ) {}

  openPaymentDialog(): void {
    this.close();
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
  close(): void {
    this.dialogRef.close();
  }
}
