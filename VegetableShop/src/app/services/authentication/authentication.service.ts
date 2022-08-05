import { Injectable } from '@angular/core';

import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, public dialog: MatDialog) { }

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

  public login(backUrl): void {

  }
}
