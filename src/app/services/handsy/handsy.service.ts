import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import { Login } from 'src/app/model/login';
import { Observable, from } from 'rxjs';
import { JwtResponse } from 'src/app/model/jwt-response';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DeviceEntity } from 'src/app/model/device-entity';
import { Request } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class HandsyService {

  constructor(private http: HttpClient) { }

 
  autenticacao(login: Login): Observable<JwtResponse>{
    const url = `${environment.apiUrl}/user/login`;
    return this.http.post<JwtResponse>(url, login);
  }
  getDevices(email: String): Observable<any>{
    const url = `${environment.apiUrl}/user/devices/${email}`;
    return this.http.get(url);
  }
  saveStatusDevice(device: DeviceEntity): Observable<DeviceEntity> {
  const opt = {
    headers: new HttpHeaders()
  };
    opt.headers.set('Authorization', localStorage.getItem('token'));
    const url = `${environment.apiUrl}/device/edit`;
    return this.http.post<DeviceEntity>(url, device, opt);
  }
}
