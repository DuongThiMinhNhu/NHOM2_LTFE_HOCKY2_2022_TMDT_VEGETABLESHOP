import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formpassword',
  templateUrl: './formpassword.component.html',
  styleUrls: ['./formpassword.component.scss']
})
export class FormpasswordComponent implements OnInit {
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  passwordClick1() {
    this.show1 = !this.show1;
  }
  passwordClick2() {
    this.show2 = !this.show2;
  }
  passwordClick3() {
    this.show3 = !this.show3;
  }
}
