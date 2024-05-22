import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {environments} from "../../environments/environments";
import {AnnotationRequest} from "../../model/annotation/AnnotationRequest";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AnotationService {
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
  createAnotation(pacientId: number, requestData: AnnotationRequest, token: string):Observable<AnnotationRequest> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.post<AnnotationRequest>(
      `${this.API_URL}/api/Annotation/create-annotation/${pacientId}`,
      requestData,
      httpOptions
    );
  }


}
