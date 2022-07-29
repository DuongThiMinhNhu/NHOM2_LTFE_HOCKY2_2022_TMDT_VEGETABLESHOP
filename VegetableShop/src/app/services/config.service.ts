import { Injectable } from '@angular/core';
import {Config} from "../interface/config";
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl: string;

  constructor(private http:HttpClient) { }
  getConfig() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }
  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
        this.configUrl, { observe: 'response' });
  }


}
