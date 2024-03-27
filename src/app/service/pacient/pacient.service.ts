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
  // private token = this.cookie.get(this.USER_AUTH)
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiR2FicmllbCBCYXJib3NhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxIiwiZXhwIjoxNzM2NzkwNTU3LCJpc3MiOiJHYWJyaWVsLm5ldCIsImF1ZCI6Imh0dHA6Oi8vd3d3LmdhYnJpZWwubmV0In0.cVdQ-Rw3NWo9ZuJ8tDbu11yXkorhRZDer3YfC8MEe0w'
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
