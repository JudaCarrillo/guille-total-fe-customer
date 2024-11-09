import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Utils } from "../../../utils/app.utils";

@Injectable({
  providedIn: 'root',
})
export class SessionService {

  private loggedInSubject = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor(
    private router: Router,
  ) {
    const initialState = Utils.getLocalStorageDecode('xUserData') ? true : false;
    this.loggedInSubject.next(initialState);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn$;
  }

  login() {
    this.loggedInSubject.next(true);
  }

  logout() {
    this.clearSession();
    this.loggedInSubject.next(false);
    this.router.navigate(['/']);
  }

  clearSession() {
    Utils.removeLocalStorage('xUserData');
  }

  getSession() {
   const authData = Utils.getLocalStorageDecode('xUserData');
    // this.loggedInSubject.next(!!authData);
    return authData;
  }

}
