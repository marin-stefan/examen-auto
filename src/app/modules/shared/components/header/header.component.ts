import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { UserModel } from '../../interfaces/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentLoggedUserRole: string = this.authenticationService.userValue.role
  // public currentLoggedUser: UserModel;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // this.authenticationService.getCurrentLoggedUserInfo().
  }

  editUser(): void {
    if (this.currentLoggedUserRole === 'admin') {
      this.router.navigate(['admin/user/edit-user/qwdasd'])
    } else if (this.currentLoggedUserRole === 'consumer') {
      this.router.navigate(['consumer/edit-user/qwdasd'])
    }
    
  }



}
