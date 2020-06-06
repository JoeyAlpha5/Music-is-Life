import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }
  muted = true;
  ngOnInit(): void {
    var firstVid =  <HTMLVideoElement>document.getElementById("videoImage");
    // var secondVid =  <HTMLVideoElement>document.getElementById("videoImage2");
    // var thirdVid =  <HTMLVideoElement>document.getElementById("videoImage3");
    firstVid.muted = true;
    // secondVid.muted = true;
    // thirdVid.muted = true;
    // change slider interval
  }

  unmute(video){
    var _video = <HTMLVideoElement>document.getElementById(video);
    _video.muted = false;
    this.muted = false;
  }


  mute(video){
    var _video = <HTMLVideoElement>document.getElementById(video);
    _video.muted = true;
    this.muted = true;
  }

}
