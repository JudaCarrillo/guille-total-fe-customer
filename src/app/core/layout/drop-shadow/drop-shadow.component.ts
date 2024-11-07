import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubscriptionComponent } from '../../../modules/Payment/subscription/subscription.component';

@Component({
  selector: 'app-drop-shadow',
  templateUrl: './drop-shadow.component.html',
  styleUrls: ['./drop-shadow.component.scss'],
})
export class DropShadowComponent {
  isModalVisible = false;
  constructor(private dialog: MatDialog) {}
  openSubscriptionModal(): void {
    this.dialog.open(SubscriptionComponent, {
      width: '450px',
      height: '550px',
      panelClass: 'custom-modal'
    });
  }
  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
}
