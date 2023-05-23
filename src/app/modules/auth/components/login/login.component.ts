import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AppRoutesEnum } from 'src/app/modules/shared/enums/appRoutesEnum';
import { UserRoles } from 'src/app/modules/shared/enums/userRolesEnum';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loadingStage: boolean = false;
  loginError: boolean = false;
  hide: boolean = true;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginUser(): void {
    this.loginForm.markAllAsTouched();

    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;

    if (this.loginForm.valid) {
      this.loadingStage = true;
      this.authenticationService.login(username, password)
        .pipe(first()).subscribe(
          user => {
            switch(user.role) {
              case UserRoles.Admin:
                this.router.navigate([AppRoutesEnum.Admin]);
                break;
              case UserRoles.Consumer:
                this.router.navigate([AppRoutesEnum.Consumer]);
                break;
            };
          },
          () => {
            this.loginError = true;
            this.loadingStage = false;
          }
        );
    }
  }
}
