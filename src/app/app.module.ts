import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { ReleasesComponent } from './releases/releases.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistComponent } from './artist/artist.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VideosComponent } from './videos/videos.component';
import { EventsComponent } from './events/events.component';
import { ViewEventComponent } from './view-event/view-event.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HomeComponent,
    HeaderComponent,
    ClientComponent,
    ReleasesComponent,
    ArtistComponent,
    BookComponent,
    VideosComponent,
    EventsComponent,
    ViewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
