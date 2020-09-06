import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { YtPlayerService, PlayerOptions } from 'yt-player-angular';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit {
  vid;
  player;
  video_desc = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ytPlayerService: YtPlayerService ) { }
  ngOnInit(): void {
    this.vid = this.data.video;
    console.log(this.vid);
    this.ytPlayerService.play();
  }



}
