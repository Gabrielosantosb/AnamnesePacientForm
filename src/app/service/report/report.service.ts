import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

import {Observable} from "rxjs";
import {ReportRequest} from "../../model/report/ReportRequest";
import {ReportResponse} from "../../model/report/ReportResponse";
import {environments} from "../../environments/environments";



@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private API_URL = environments.API_URL
  private readonly USER_AUTH = environments.COOKIES_VALUE.user_auth
  private token = this.cookie.get(this.USER_AUTH)
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    })
  }


  constructor(private http : HttpClient, private cookie: CookieService, ) { }
  createReport(pacientId: number, requestData: ReportRequest, token: string): Observable<Array<ReportResponse>> {
    console.log("TOKEN CHEGOU AQUI", token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.post<Array<ReportResponse>>(
      `${this.API_URL}/api/Report/create-report/${pacientId}`,
      requestData,
      httpOptions
    );
  }


}
