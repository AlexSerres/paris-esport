/**
 * Created by Lindsay on 22/02/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InfoGameService } from './infogame.service';
import { InfoGame } from './infogame';


@Component({
    moduleId: module.id,
    selector: 'my-infoGame',
    templateUrl: './infogame.component.html'
})


export class InfoGameComponent implements OnInit {
    private infoGame : InfoGame[];
    selectedinfoGame: InfoGame[] = [];
    constructor(
        private router: Router,
        private infoGameService: InfoGameService) {}

    getInfoGame(): void {
        this.infoGameService.getInfoGame().subscribe(data => {
            this.infoGame = data});
    }

    ngOnInit(): void {
        this.getInfoGame();
    }
}