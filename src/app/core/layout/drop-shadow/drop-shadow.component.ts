import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubscriptionComponent } from '../../../modules/Payment/subscription/subscription.component';
import { SessionService } from '../../../common/services/session/session.service';
import { Utils } from '../../../utils/app.utils';

@Component({
  selector: 'app-drop-shadow',
  templateUrl: './drop-shadow.component.html',
  styleUrls: ['./drop-shadow.component.scss'],
})
export class DropShadowComponent {
  isModalVisible = false;
  isUserPremium = false;

  constructor(
    private dialog: MatDialog,
  ) {}

  isNotPremium() {
    return Utils.isUserPremium();
  }

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
