import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/modules/auth/services/authentification.service';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.css']
})
export class LogoutBtnComponent implements OnInit {

  constructor(
    private authService: AuthentificationService
  ) { }

  ngOnInit(): void {
  }

  logOutUser(): any {
    this.authService.logout();
  }

}
