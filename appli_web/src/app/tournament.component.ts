/**
 * Created by Lindsay on 06/03/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TournamentService } from './tournament.service';
import { Tournament } from './tournament';


@Component({
    moduleId: module.id,
    selector: 'my-tournament',
    templateUrl: 'tournament.component.html'
})


export class TournamentComponent implements OnInit {
    private tournament : Tournament[];
    selectedtournament: Tournament[] = [];
    constructor(
        private router: Router,
        private tournamentService: TournamentService) {}

    getTournament(): void {
        this.tournamentService.getTournament().subscribe(data => {
            this.tournament = data
        });

    }

    ngOnInit(): void {
        this.getTournament();
    }
}