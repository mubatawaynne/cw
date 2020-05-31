import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fadeInOnEnterAnimation,
         fadeOutOnLeaveAnimation,
         slideOutLeftOnLeaveAnimation,
         slideInRightOnEnterAnimation,
         lightSpeedInOnEnterAnimation,
         slideInLeftOnEnterAnimation,
         slideInDownOnEnterAnimation,
         bounceInOnEnterAnimation,
         flipInXOnEnterAnimation
        } from 'angular-animations';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    lightSpeedInOnEnterAnimation(),
    slideInLeftOnEnterAnimation({delay:500,duration:1500}),
    slideInDownOnEnterAnimation({delay:500,duration:1500}),
    slideInRightOnEnterAnimation({duration:300}),
    slideOutLeftOnLeaveAnimation({delay:200,duration:300}),
    bounceInOnEnterAnimation({delay:500,duration:1500}),
    flipInXOnEnterAnimation({delay:1500})
  ]
})
export class SliderComponent implements OnInit {
  @Input()images
  current_index = 0;
  show_slider = true;
  slides=[
  {img:'../../../assets/img/banner-1.jpg',heading1:'Siting & Drilling',heading2:'Installation',heading3:'Services'},
  {img:'../../../assets/img/Bannerdrilling1.jpg',heading1:'Durable Equipement',heading2:'Maintanance',heading3:'Plus Warranty'},
]
  @Output() flip:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this.begin()
  }

  begin(){
   
  setInterval(x=>{
      this.show_slider = false;
      console.log('interval')
      if(this.current_index < this.slides.length - 1 ){
        this.current_index++
      }else{
        this.current_index = 0
      }
      console.log(this.current_index)
      this.flipped()
      setTimeout(y=>{
        this.show_slider = true;
      },1)
    },4000)
  }

  flipped(){
      this.flip.emit(this.current_index);
  }

}
