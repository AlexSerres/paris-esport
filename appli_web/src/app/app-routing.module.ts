/**
 * Created by Lindsay on 21/02/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {VideoGamesComponent} from "./videoGames.component";
import {InfoGameComponent} from "./infogame.component";
/*import {GameDetailComponent} from "./game-detail.component";
import { HomeComponent } from './home/index';*/
import { AuthGuard } from './_guards/index';




const routes: Routes = [
    { path: '**', redirectTo: '/videoGames'},
    { path: 'videoGames',  component: VideoGamesComponent},
    { path: 'infoGame',  component: InfoGameComponent},
   /* { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] }*/
   // { path: 'detailgame/:id', component: GameDetailComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

