import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images=[
    {
      imageSrc:'assets/images/bg_1.jpg',
      title : 'We serve Fresh Vegestables Fruits',
      des:'We deliver organic vegetables'
    },
    {
      imageSrc:'assets/images/bg_2.jpg',
      title : 'We serve Fresh Vegestables Fruits',
      des:'We deliver organic vegetables'
    },
    {
      imageSrc:'assets/images/bg_3.jpg',
      title : 'We serve Fresh Vegestables Fruits',
      des:'We deliver organic vegetables'
    }
  ]
}
