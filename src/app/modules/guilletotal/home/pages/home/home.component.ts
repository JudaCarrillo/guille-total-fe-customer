import { Component, OnInit } from '@angular/core';
import { SubscriptionComponent } from '../../../../Payment/subscription/subscription.component';
import { MatDialog } from '@angular/material/dialog';
import { Utils } from '../../../../../utils/app.utils';
import { SessionService } from '../../../../../common/services/session/session.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loggedIn = false;
  showSigninModal = false;
  showSignupModal = false;

  constructor(
    private dialog: MatDialog,
    private sessionService: SessionService
  ) {}

  isNotPremium() {
    return Utils.isUserPremium();
  }

  // Método para abrir el modal de suscripción
  openSubscriptionModal(): void {
    const userData: any = this.sessionService.getSession();
    const loggedIn = userData ? true : false;

    if (!loggedIn) {
      this.showSigninModal = true;
      return;
    }

    this.dialog.open(SubscriptionComponent, {
      width: '450px',
      height: '550px',
      panelClass: 'custom-modal',
    });
  }

  closeSignupModal() {
    this.showSignupModal = false;
    this.showSigninModal = true;
  }

  closeSigninModal() {
    this.showSigninModal = false;
  }

  openSignupModal() {
    this.showSignupModal = true;
    this.showSigninModal = false;
  }
}
