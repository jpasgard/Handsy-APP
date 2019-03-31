import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import { Login } from 'src/app/model/login';
import { Observable, from } from 'rxjs';
import { JwtResponse } from 'src/app/model/jwt-response';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HandsyService {

  constructor(private http: HttpClient) { }

  autenticacao(login: Login): Observable<JwtResponse>{
    const url = `${environment.loginApiUrl}/user/login`;
    return this.http.post<JwtResponse>(url, login);
  }
}
