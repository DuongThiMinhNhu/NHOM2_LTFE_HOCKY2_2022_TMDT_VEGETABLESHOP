import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() imagesList: []
  constructor() {
  }

  ngOnInit(): void {
  }
  onPrevClick():void{
    let buttonLeft = document.getElementById('slideLeft');

    buttonLeft.addEventListener('click', function(){
      document.getElementById('slider').scrollLeft -= 180
    })
  }
  onNextClick():void{
    let buttonLeft = document.getElementById('slideRight');

    buttonLeft.addEventListener('click', function(){
      document.getElementById('slider').scrollLeft += 180
    })
  }
  clickActive():void{
    console.log("vao day")
    let thumbnails = document.getElementsByClassName('thumbnail')

    let activeImages = document.getElementsByClassName('active')

    for (var i=0; i < thumbnails.length; i++){

      thumbnails[i].addEventListener('mouseover', function(){
        console.log(activeImages)

        if (activeImages.length > 0){
          activeImages[0].classList.remove('active')
        }
        var demo = document.getElementById("featured") as HTMLImageElement;
        this.classList.add('active')
        console.log(demo.src)
        demo.src = this.src
      })
    }

  }
}
