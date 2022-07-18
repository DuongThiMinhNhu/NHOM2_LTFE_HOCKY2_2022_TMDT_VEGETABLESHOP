import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myClickFunction(event) {
    const al = document.querySelector('nav');
    if(al.className == "menu-active"){
      al.className = "navbar navbar-expand-lg navbar-light";
    }
    else{
      al.className = "menu-active";
    }

  }

}
