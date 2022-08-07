import { NgModule, Component, Injectable } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import {
    HttpClientJsonpModule,
    HttpClientModule,
    HttpClient
} from "@angular/common/http";
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";
import {
    map,
    debounceTime,
    distinctUntilChanged,
    switchMap,
    tap
} from "rxjs/operators";
import {SearchItem} from "../../models/search";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";

  constructor(private http: HttpClient) {}

  search(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    console.log(apiURL);
    return this.http.jsonp(apiURL, "callback").pipe(
        map(res => {
            console.log("res");
            console.log(res);
          return res['results'].map(item => {
              console.log("item");
              console.log(item);
            return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
            );
          });
        })
    );
  }
}
