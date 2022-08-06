import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private http: HttpClient) { }

  public setToken(token: string){
    localStorage.setItem('token', token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public removeToken(){
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean{
    return this.getToken() != null;
  }

  public logout() {
    this.removeToken();
    this.router.navigate(['/']);
  }

  public register(fullname: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      fullname,
      email,
      password
    }, httpOptions);
  }


}
