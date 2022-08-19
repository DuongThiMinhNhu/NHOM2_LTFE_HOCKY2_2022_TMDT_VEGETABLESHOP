import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);
  constructor() { }

  ngOnInit(): void {
  }

}
