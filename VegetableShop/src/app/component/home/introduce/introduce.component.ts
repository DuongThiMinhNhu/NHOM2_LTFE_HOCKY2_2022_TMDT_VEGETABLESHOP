import {Component, Input, OnInit} from '@angular/core';
interface introduceCategory {
  id:string;
  imageSrc: string;
  name: string;
}
@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {

  @Input() categorys: introduceCategory[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
