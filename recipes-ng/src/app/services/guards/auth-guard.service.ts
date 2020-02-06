import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  // only allow the route if we're "logged in"
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let account = this.storage.account.get();
    if (!account) {
      this.router.navigate(['/login']);
    }
    return account ? true : false;
  }

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }
}
