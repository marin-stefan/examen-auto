import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../shared/services/http.service';
import { HttpMethods } from '../../shared/enums/httpMethodsEnum';
import { UserModel } from '../../shared/interfaces/user-model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private httpService: HttpService
  ) { }

  getAllUsers(searchParams): Observable<any> {
    let queryString = new URLSearchParams(searchParams).toString();
    
    return this.httpService.dispatchData(
      {
        method: HttpMethods.Get,
        url: `/users?${queryString}`,
        options: {},
      }
    )
  };

  addUser(userData: UserModel): Observable<{ success: boolean, user: UserModel }> {
    
    return this.httpService.dispatchData(
      {
        method: HttpMethods.Post,
        url: '/user',
        options: {
          body: userData
        }
      }
    )
  };

}
