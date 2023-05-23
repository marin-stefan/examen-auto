import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.css']
})
export class LogOutBtnComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logOutUser(): any {
    this.authService.logout();
  }

}
