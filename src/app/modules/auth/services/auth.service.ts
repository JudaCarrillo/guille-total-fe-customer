import { Injectable } from '@angular/core';
import HttpService from '../../../common/services/http/http.service';
import { User } from '../../../core/interfaces/user.interface';
import { SigninData } from '../signin/interfaces/signin.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService,
  ) {}

  // Iniciar sesión
  login(body: SigninData) {
    return this.httpService.post('login', body, [], 'GUILLE_TOTAL_SECURITY_API', false);
  }

  // Cerrar sesión
  logout() {
    return this.httpService.post('Auth/logout', {}, [], 'GUILLE_TOTAL_SECURITY_API', true);
  }

  signup(body: User) {
    return this.httpService.post('register', body, [], 'GUILLE_TOTAL_SECURITY_API', false);
  }
}
