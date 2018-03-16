/**
 * Created by Lindsay on 21/02/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoGamesComponent } from "./videoGames.component";
import { InfoGameComponent } from "./infogame.component";
import { GameDetailComponent } from "./game-detail.component"
import { AuthGuard } from './_guards/index';
import { LoginComponent} from './login/index';
import { RegisterComponent } from './register/index';
import { ProfilComponent } from './profil.component';
import { FirstnavbarComponent } from './firstnavbar.component';

const routes: Routes = [
    { path: '', redirectTo: '/videoGames', pathMatch: 'full' },
    { path: 'videoGames',  component: VideoGamesComponent},
    { path: 'infoGame',  component: InfoGameComponent},
    { path: 'login', component: LoginComponent },
    { path: '', component: FirstnavbarComponent, canActivate: [AuthGuard]},
    { path: 'register', component: RegisterComponent},
    { path: 'detailgame/:id', component: InfoGameComponent},
    { path: 'detailmatch/:id', component: GameDetailComponent, canActivate: [AuthGuard]},
    { path: 'users/:id' , component: ProfilComponent, canActivate: [AuthGuard]},
    { path: 'logout', component: LoginComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

