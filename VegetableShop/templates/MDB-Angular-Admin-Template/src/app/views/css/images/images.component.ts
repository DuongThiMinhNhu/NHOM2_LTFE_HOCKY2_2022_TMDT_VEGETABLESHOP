import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  @Input() imagesList = [];
  constructor() { }

  ngOnInit() {
  }

}
