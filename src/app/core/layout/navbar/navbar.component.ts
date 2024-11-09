import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { AuthService } from '../../../modules/auth/services/auth.service'; // Importar el servicio AuthService
import { SessionService } from '../../../common/services/session/session.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userName?: string;
  showSigninModal = false;
  showSignupModal = false;
  dropdownOpen = false;
  menuOpen = false;
  isMobile = window.innerWidth <= 1080;

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.sessionService.loggedIn$.subscribe((loggedIn) => {
      if (!loggedIn) {
        this.userName = '';
      }

      const sessionData: any = this.sessionService.getSession();
      this.userName = sessionData ? sessionData.user?.name : '';
    });

    fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe(() => this.checkMobileView());
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  checkMobileView() {
    this.isMobile = window.innerWidth <= 1025;
  }

  openSigninModal() {
    this.showSigninModal = true;
    this.showSignupModal = false;
  }

  closeSigninModal() {
    this.showSigninModal = false;
  }

  openSignupModal() {
    this.showSignupModal = true;
    this.showSigninModal = false;
  }

  closeSignupModal() {
    this.showSignupModal = false;
    this.openSigninModal();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  // Método para cerrar sesión usando AuthService
  logout() {
    this.authService.logout().subscribe({
      next: (res) => {
        if (!res.success) {
          this.toastr.error(res.message, 'Error');
        }

        this.sessionService.logout();
        this.toastr.success('Sesión cerrada', 'Éxito');
      },
      error: () => {
        this.toastr.error('Error al cerrar sesión', 'Error');
      },
    });

    this.userName = '';
    this.closeDropdown();
  }
}
