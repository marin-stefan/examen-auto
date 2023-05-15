import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutesEnum } from 'src/app/modules/shared/enums/appRoutesEnum';

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

    // logic to authennthicate and route to admin or consumer module

    this.router.navigate([AppRoutesEnum.Admin]);
    // this.router.navigate([AppRoutesEnum.Consumer])

    
  }

}
