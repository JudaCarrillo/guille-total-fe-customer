import { Component } from '@angular/core';
import { SubscriptionComponent } from '../../../../Payment/subscription/subscription.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private dialog: MatDialog) {}

  // Método para abrir el modal de suscripción
  openSubscriptionModal(): void {
    this.dialog.open(SubscriptionComponent, {
      width: '450px',
      height: '550px',
      panelClass: 'custom-modal'
    });
  }
}
