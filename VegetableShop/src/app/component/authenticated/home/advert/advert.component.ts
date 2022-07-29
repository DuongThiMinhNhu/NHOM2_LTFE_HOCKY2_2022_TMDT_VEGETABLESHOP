import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {
  currentData: any;
  targetDate:any;
  cDateMillisecs :any;
  tDateMillisecs :any;
  difference : any;
  seconds :any;
  minutes :any;
  hours : any;
  days : any;
  year : number = 2022;
  month : number = 8;
  months : [
    'Jan',
    'Feb',
    'Mar',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Now',
    'Dec',
  ];
  day : number = 31;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.myTimer();
  }

  myTimer() {
    this.currentData = new Date();
    this.targetDate = new Date(2022,8,18);
    this.cDateMillisecs = this.currentData.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds/60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours/24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? '0' + this.hours :this.hours;
    this.minutes =this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

    document.getElementById('days').innerText = this.days;
    document.getElementById('hours').innerText= this.hours;
    document.getElementById('mins').innerText = this.minutes;
    document.getElementById('seconds').innerText = this.seconds;
    setInterval(this.myTimer,100);
  }
}
