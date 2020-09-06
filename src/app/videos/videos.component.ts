import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PlayVideoComponent } from '../play-video/play-video.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  playVid(vid){
    const dialogRef = this.dialog.open(PlayVideoComponent,{data:{video:vid}});
  }

}
