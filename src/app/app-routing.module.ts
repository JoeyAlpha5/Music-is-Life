import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ReleasesComponent } from './releases/releases.component';
import { VideosComponent } from './videos/videos.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  {path:'', component: LoaderComponent},
  {path:'videos', component: VideosComponent},
  // {path:'events', component: EventsComponent},
  {path:'home', component:HomeComponent},
  {path:'clients', component:ClientComponent},
  {path:'releases', component:ReleasesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
