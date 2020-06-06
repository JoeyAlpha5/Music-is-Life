import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ViewEventComponent } from '../view-event/view-event.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewEvent(event){
    const dialogRef = this.dialog.open(ViewEventComponent,{data:{event_name:event},height:'600px',width:'800px'});
  }

}
