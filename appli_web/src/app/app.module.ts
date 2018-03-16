import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }     from './app-routing.module';



import { AppComponent }  from './app.component';
import {VideoGamesComponent} from './videoGames.component';
import {VideoGamesService} from './_services/videoGames.service';
import {InfoGameComponent} from './infogame.component';
import {InfoGameService} from './infogame.service';
import {TournamentComponent} from './tournament.component';
import {TournamentService} from './tournament.service';

import {HttpModule} from "@angular/http";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";



@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule, HttpModule
                ],
  declarations: [ AppComponent,
                  VideoGamesComponent,InfoGameComponent,TournamentComponent
                ],
  providers:[ VideoGamesService, InfoGameService, TournamentService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
