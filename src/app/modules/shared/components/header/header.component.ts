import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { SharedService } from '../../services/shared.service';
import { UserModel } from '../../interfaces/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentLoggedUserRole: string = this.authenticationService.userValue.role;
  public currentLoggedUserInfo: UserModel;
  public name: string = '';


  constructor(
    private authenticationService: AuthenticationService,
    private sharedService: SharedService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  private getUserInfo(): void {
    const userId = sessionStorage.getItem('loggedUserId');
    this.sharedService.getUser(userId)
    .pipe(take(1))
    .subscribe((user) => {
      this.currentLoggedUserInfo = user
      this.name = user.firstName
    })
  }

  editUser(): void {
    if (this.currentLoggedUserRole === 'admin') {
      this.router.navigate([`admin/user/edit-user/${this.currentLoggedUserInfo._id}`])
    } else if (this.currentLoggedUserRole === 'consumer') {
      this.router.navigate([`consumer/edit-user/${this.currentLoggedUserInfo._id}`])
    }
    
  }



}
