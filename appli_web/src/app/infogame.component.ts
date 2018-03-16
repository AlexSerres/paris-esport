/**
 * Created by Lindsay on 22/02/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { InfoGameService } from './_services/infogame.service';
import { InfoGame } from './_models/index';


@Component({
    moduleId: module.id,
    selector: 'my-infoGame',
    templateUrl: './infogame.component.html',
    styleUrls: [ 'infogame.component.css' ]
})


export class InfoGameComponent implements OnInit {
    private matches : InfoGame[];
    private tourns : InfoGame[];

    private infoGame : InfoGame[];
    selectedInfoGame : InfoGame[]=[];

    private detailMatch : InfoGame[];
    selectedinfoGame: InfoGame[] = [];
    id: String;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private location: Location,
        private infoGameService: InfoGameService) {}

    getInfoGame(id: number): void {
        this.infoGameService.getOneGame(id).subscribe(data => {
            this.matches = data;
        });

        this.infoGameService.getOneTourn(id).subscribe(data => {
            this.tourns = data;
        });

        // this.infoGameService.getOneDetailMatch(id).subscribe(data => {
        //    this.detailMatch = data;
        // });
    }
    //
    // gotoDetailMatch(infoGame: InfoGame): void {
    //     console.log(infoGame);
    //     this.router.navigate(['/detailmatch', infoGame._id]);
    // }

    ngOnInit(): void {
        //on recupere les id des clics
        this.route.params.forEach((params: Params) => {
           // let id = +params['id'];
            var id = this.route.snapshot.params['id'];
            this.infoGameService.getOneGame(id)
                .subscribe(match => {this.matches = match; console.log(this.matches)});
            console.log("ID game : "+ id, this.matches);

            this.infoGameService.getOneTourn(id)
                .subscribe(tourn => {this.tourns = tourn; console.log("mon tournament"+this.tourns)});
            console.log("ID tournament : "+ id, this.tourns);
        });

    }
    goBack(): void {
        this.location.back();
    }
}