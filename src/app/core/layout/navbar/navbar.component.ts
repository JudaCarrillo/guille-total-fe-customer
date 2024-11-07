import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { AuthService } from '../../../modules/auth/services/auth.service'; // Importar el servicio AuthService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName: string | null = null;
  showSigninModal = false;
  showSignupModal = false;
  dropdownOpen = false;
  menuOpen = false;
  isMobile = window.innerWidth <= 1080;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userName = this.authService.getUsername(); // Obtener el nombre de usuario desde el servicio
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
    this.authService.logout();
    this.userName = null;
    this.closeDropdown();
    window.location.reload();
  }

  // Método que se llama cuando el usuario se loguea correctamente
  onLogin(userName: string) {
    this.userName = userName;
    this.closeSigninModal();
    this.closeDropdown();
    window.location.reload();
  }
}
