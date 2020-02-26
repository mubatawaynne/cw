import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class SliderComponent implements OnInit {
  @Input()images
  current_index = 0;
  show_slider = true;
  imgs=['../../../assets/img/1985.jpg','../../../assets/img/1983.jpg']
  @Output() flip:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this.begin()
  }

  begin(){
   
  setInterval(x=>{
      this.show_slider = false;
      console.log('interval')
      if(this.current_index < this.imgs.length - 1 ){
        this.current_index++
      }else{
        this.current_index = 0
      }
      console.log(this.current_index)
      this.flipped()
      setTimeout(y=>{
        this.show_slider = true;
      },1)
    },2000)
  }

  flipped(){
      this.flip.emit(this.current_index);
  }

}
