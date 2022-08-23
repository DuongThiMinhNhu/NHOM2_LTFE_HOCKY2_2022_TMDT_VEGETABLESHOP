import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-backtotop',
  templateUrl: './backtotop.component.html',
  styleUrls: ['./backtotop.component.scss']
})
export class BacktotopComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }
   topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
