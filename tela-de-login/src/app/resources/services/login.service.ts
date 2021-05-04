import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../models/requestLogin';
import { ResponseLogin } from '../models/responseLogin';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private AuthService: AuthService) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(
      'http://localhost:8080/api/login',
      requestLogin
    ).pipe(tap((loginResponse => this.AuthService.loginResponse = loginResponse)));
  }
}
