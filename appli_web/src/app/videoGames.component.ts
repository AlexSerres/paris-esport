/**
 * Created by Lindsay on 21/02/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VideoGamesService } from './_services/videoGames.service';
import {VideoGames} from './videoGames';
import {InfoGame} from './infogame';
import {InfoGameService} from './infogame.service';
import {Tournament} from './tournament';
import {TournamentService} from './tournament.service';

//import { User } from '../_models/index';
//import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'my-videoGames',
    templateUrl: 'videoGames.component.html'
})

export class VideoGamesComponent implements OnInit {

    private videoGames : VideoGames[];
    selectedVideoGames: VideoGames[] = [];

    private infoGame : InfoGame[];
    selectedInfoGame : InfoGame[]=[];

    private tournament : Tournament[];
    selectedTournament : Tournament[]=[];
  //  users: User[] = [];

    constructor(
        private router: Router,
        private videoGamesService: VideoGamesService,
        private infoGameService: InfoGameService,
        private tournamentService: TournamentService,
 //       private userService: UserService
    ) {}

    getVideoGames(): void {
       this.videoGamesService.getVideoGames().subscribe(data => {
           this.videoGames = data});
    }

    getInfoGame(): void {
        this.infoGameService.getInfoGame().subscribe(data => {
            this.infoGame = data});
    }

    getTournament():void{
        this.tournamentService.getTournament().subscribe(data => {
            this.tournament=data});
    }

    ngOnInit(): void {
        this.getVideoGames();
        this.getInfoGame();
        this.getTournament();
    }


    onSelect(videoGames: VideoGames[]):void{
        this.selectedVideoGames = videoGames;
    }

    gotoDetailOneVideoGame(videoGames: VideoGames): void {
        console.log(videoGames);
        this.router.navigate(['/detailgame', videoGames._id]);
    }

}