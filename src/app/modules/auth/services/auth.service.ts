import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_KEY = 'isAuthenticated'; // Clave de localStorage para la autenticación
  private readonly USERNAME_KEY = 'userName'; // Clave de localStorage para el nombre de usuario

  constructor() {
    // Al iniciar, verificamos si hay un estado de autenticación en localStorage
    const storedAuthStatus = localStorage.getItem(this.AUTH_KEY);
    this.isAuthenticated = storedAuthStatus === 'true'; // Convertimos a booleano
  }

  private isAuthenticated: boolean = false;

  // Iniciar sesión
  login(username: string) {
    this.isAuthenticated = true;
    localStorage.setItem(this.AUTH_KEY, 'true'); // Guardamos el estado en localStorage
    localStorage.setItem(this.USERNAME_KEY, username); // Guardamos el nombre de usuario
  }

  // Cerrar sesión
  logout() {
    this.isAuthenticated = false;
    localStorage.setItem(this.AUTH_KEY, 'false'); // Borramos el estado en localStorage
    localStorage.removeItem(this.USERNAME_KEY); // Eliminamos el nombre de usuario
  }

  // Obtener el nombre de usuario almacenado
  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }

  // Comprobar si está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
