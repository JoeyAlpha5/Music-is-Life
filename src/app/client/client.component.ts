import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ArtistComponent } from '../artist/artist.component';
import { BookComponent } from '../book/book.component';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewArtist(artist){
    const dialogRef = this.dialog.open(ArtistComponent,{data:{artist_name:artist},height:'800px'});
  }

  bookArtist(artist){
    const dialogRef = this.dialog.open(BookComponent,{data:{artist_name:artist},height:'800px'});
  }

}
