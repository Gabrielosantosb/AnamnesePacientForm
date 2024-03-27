import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {environments} from "../../environments/environments";
import {PacientRequest} from "../../model/pacient/PacientRequest";
import {PacientsResponse} from "../../model/pacient/PacientResponse";


@Injectable({
  providedIn: 'root'
})
export class PacientService {
  private API_URL = environments.API_URL
  private readonly USER_AUTH = environments.COOKIES_VALUE.user_auth
  private token = this.cookie.get(this.USER_AUTH)
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    })
  }


  constructor(private http : HttpClient, private cookie: CookieService) { }


  createPacient(requestData : PacientRequest) : Observable<Array<PacientsResponse>>{
    console.log('Request', requestData)
    return this.http.post<Array<PacientsResponse>>(
      `${this.API_URL}/api/Pacient/create-pacient`,
      requestData,
      this.httpOptions
    )
  }

}
