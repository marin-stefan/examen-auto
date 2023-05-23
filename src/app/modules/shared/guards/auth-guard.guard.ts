import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../../auth/services/authentication.service';
import { AuthUser } from '../../auth/interfaces/auth-user.interface';
import { AppRoutesEnum } from '../enums/appRoutesEnum';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router : Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user: AuthUser = this.authenticationService.userValue;
    if (user) {
      if (route.data['roles'] && route.data['roles'].indexOf(user.role) === -1) {
        this.router.navigate([AppRoutesEnum.Default]);
        return false;
      }
      return true;
    }

    this.router.navigate([AppRoutesEnum.Login]);

    return false;
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
}
