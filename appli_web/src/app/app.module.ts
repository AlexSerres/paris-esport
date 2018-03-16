import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule} from "@angular/http";
import {AppRoutingModule}     from './app-routing.module';
import {AppComponent}  from './app.component';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {LocalStorageModule} from 'angular-2-local-storage';

import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';

import {VideoGamesComponent} from './videoGames.component';
import {VideoGamesService} from './_services/index';

import {InfoGameComponent} from './infogame.component';
import {InfoGameService} from './_services/index';

import {TournamentComponent} from './tournament.component';
import {TournamentService} from './_services/index';

import {GameDetailComponent} from './game-detail.component';
import {GameDetailService} from './_services/index';

import {OnePariComponent} from './onepari.component';
import {OneParisService} from "./_services/oneparis.service";

import {AuthGuard} from './_guards/index';
import {AuthenticationService, UserService} from './_services/index';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';


import {ProfilComponent} from './profil.component';
import {ProfilService} from './_services/index';

import {FirstnavbarComponent} from './firstnavbar.component';
import {SecondnavbarComponent} from './secondnavbar.component';



@NgModule({
    imports: [BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule,
        LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
    ],

  declarations: [ AppComponent,
                  VideoGamesComponent,
                  InfoGameComponent,
                  TournamentComponent,
                  GameDetailComponent,
                  LoginComponent,
                  RegisterComponent,
                  ProfilComponent,
                  FirstnavbarComponent,
                  SecondnavbarComponent,
                  OnePariComponent
                ],


    providers: [VideoGamesService,
        InfoGameService,
        TournamentService,
        AuthGuard,
        AuthenticationService,
        BaseRequestOptions,
        GameDetailService,
        ProfilService,
        UserService,
       OneParisService
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
