import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

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

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
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

  logout() {
    localStorage.removeItem('userName');
    this.userName = null;
    this.closeDropdown();
  }

  onLogin(userName: string) {
    this.userName = userName;
    this.closeSigninModal();
    this.closeDropdown();
  }
}
