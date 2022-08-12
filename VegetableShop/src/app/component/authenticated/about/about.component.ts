import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  namePage = "ABOUT";
  imageBg = "assets/images/bg_1.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
