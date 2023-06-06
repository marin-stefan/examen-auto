import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { HttpService } from '../../shared/services/http.service';
import { HttpMethods } from '../../shared/enums/httpMethodsEnum';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AppRoutesEnum } from '../../shared/enums/appRoutesEnum';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public user: Observable<User>
  private userSubject: BehaviorSubject<User>;
  private loggedUser: User;

  constructor(
    private router: Router,
    private httpService: HttpService,
  ) {
    this.userSubject = new BehaviorSubject<User>(this.getDecodedAccessToken());
    this.user = this.userSubject.asObservable();
   }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public login(username:string, password:string): Observable<User> {

    return this.httpService.dispatchData({
      method: HttpMethods.Post,
      url: '/user/login',
      options: {
        body: {username: username, password: password}
      }
    }
  ).pipe(map(authResult => {
      sessionStorage.setItem('token', authResult.token);

      let user = this.getDecodedAccessToken();
      this.userSubject.next(user);
      sessionStorage.setItem('loggedUserId', user.id);
      
      return user;
    }));
  }

  public logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('loggedUserId')

    this.userSubject.next(null);
    this.router.navigate([AppRoutesEnum.Login]);
  }

  getDecodedAccessToken(): any {
    try {
      return jwtDecode(sessionStorage.getItem('token'))['user'];
    } catch(Error) {
      return null
    }
  }

}
