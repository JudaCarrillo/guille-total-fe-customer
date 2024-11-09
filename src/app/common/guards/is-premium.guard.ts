import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Utils } from '../../utils/app.utils';

@Injectable({
  providedIn: 'root',
})
export class IsPremiumGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const isPremium = Utils.isUserPremium();
    // console.log('isPremium', isPremium);


    if (!isPremium) {
      this.router.navigate(['/predictions']);
    }

    return isPremium;
  }
}
