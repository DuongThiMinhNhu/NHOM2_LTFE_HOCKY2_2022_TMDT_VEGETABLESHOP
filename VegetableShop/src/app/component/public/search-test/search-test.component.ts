import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap, tap} from "rxjs/operators";
import {SearchService} from "../../../services/search/search-test.service";
import {SearchItem} from "../../../interface/search";

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html',
  styleUrls: ['./search-test.component.scss']
})
export class SearchTestComponent implements OnInit {
   loading: boolean = false;
   results: Observable<SearchItem[]>;
   searchField: FormControl;
  constructor(private itunes: SearchService) { }

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        tap(_ => (this.loading = true)),
        switchMap(term => this.itunes.search(term)),
        tap(_ => (this.loading = false))
    );
  }

}
