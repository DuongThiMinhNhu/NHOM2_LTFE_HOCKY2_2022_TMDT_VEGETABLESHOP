import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalbill',
  templateUrl: './modalbill.component.html',
  styleUrls: ['./modalbill.component.scss']
})
export class ModalbillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getTime():string{
    let date = new Date();
    return (date.getDay()<9?"0"+date.getDay():date.getDay())+"/"+(date.getMonth()<9?"0"+date.getMonth():date.getMonth())+"/"+date.getFullYear();
  }
}
