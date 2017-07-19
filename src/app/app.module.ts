import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { GenresComponent } from './genres/genres.component';
import { PoetryComponent } from './poetry/poetry.component';
import { BlogComponent } from './blog/blog.component';
import { MagazinesComponent } from './magazines/magazines.component';
import { ClassicsComponent } from './classics/classics.component';
import { TopPicksComponent } from './top-picks/top-picks.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    GenresComponent,
    PoetryComponent,
    BlogComponent,
    MagazinesComponent,
    ClassicsComponent,
    TopPicksComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
