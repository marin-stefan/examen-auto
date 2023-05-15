import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutesEnum } from '../../shared/enums/appRoutesEnum';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private router: Router,
  ) { }

  public login() {

  }

  public logout() {

    this.router.navigate([AppRoutesEnum.Login])
  }
}
