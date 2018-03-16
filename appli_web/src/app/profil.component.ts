import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProfilService } from './_services/index';
import { User } from './_models/index';


@Component({
    moduleId: module.id,
    selector: 'my-profil',
    templateUrl: 'profil.component.html'
})


export class ProfilComponent implements OnInit {
    private profil : User[];

    constructor(
        private router: Router,
        private profilService: ProfilService) {}

    getProfil(): void {
      /*  this.tournamentService.getTournament().subscribe(data => {
            this.tournament = data
        });*/

    }

    ngOnInit(): void {
        this.getProfil();
    }
}