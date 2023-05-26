import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../shared/services/http.service';
import { HttpMethods } from '../../shared/enums/httpMethodsEnum';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private httpService: HttpService
  ) { }

  getAllUsers(searchParams): Observable<any> {
    // return object with total number of users who are consumers
    let queryString = new URLSearchParams(searchParams).toString();
    return this.httpService.dispatchData(
      {
        method: HttpMethods.Get,
        url: `/users?${queryString}`,
        options: {},
      }
    )
  }

  getFilteredUsers(lastName: string): Observable<any> {
    return this.httpService.dispatchData(
      {
        method: HttpMethods.Get,
        url: `/users?lastName=${lastName}`,
        options: {}
      }
    )
  }




}
