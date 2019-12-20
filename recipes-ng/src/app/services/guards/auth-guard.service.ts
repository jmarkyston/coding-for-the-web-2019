import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  // only allow the route if we're "logged in"
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let id = this.storage.id.get();
    if (!id) {
      this.router.navigate(['/login']);
    }
    return id ? true : false;
  }

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }
}
