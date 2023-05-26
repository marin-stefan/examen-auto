import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../interfaces/user-model';
import { HttpService } from './http.service';
import { HttpMethods } from '../enums/httpMethodsEnum';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private httpService: HttpService
  ) { }


  public getUser(userId: string): Observable<UserModel> {
    return this.httpService.dispatchData(
      {
        method: HttpMethods.Get,
        url: `/user/${userId}`
      }
    );
  }

  public editUser(userId: string, userData): Observable<{ success: boolean, user: UserModel }> {
    // userData['_id'] = userId;

    return this.httpService.dispatchData(
      {
        method: HttpMethods.Put,
        url: `/user/${userId}`,
        options: {
          body: userData
        }
      }
    );
  }

}
