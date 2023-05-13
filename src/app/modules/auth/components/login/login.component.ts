import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loadingStage: boolean = false;
  loginError: boolean = true;
  hide: boolean = true;
  // loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
