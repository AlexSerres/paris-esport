/**
 * Created by Lindsay on 22/02/2017.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { InfoGameService } from './infogame.service';
import { InfoGame } from './infogame';


@Component({
    moduleId: module.id,
    selector: 'my-infoGame',
    templateUrl: './infogame.component.html',
    styleUrls: [ 'infogame.component.css' ]
})


export class InfoGameComponent implements OnInit {
    private matches : InfoGame[];
    private tourns : InfoGame[];
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
    }


    ngOnInit(): void {

        this.route.params.forEach((params: Params) => {
           // let id = +params['id'];
            var id = this.route.snapshot.params['id'];
            this.infoGameService.getOneGame(id)
                .subscribe(match => {this.matches = match; console.log("mon match"+this.matches)});
            console.log("ID game : "+ id, this.matches);

            this.infoGameService.getOneTourn(id)
                .subscribe(tourn => {this.tourns = tourn; console.log("mon tournament"+this.tourns)});
            console.log("ID tournament : "+ id, this.tourns);
    });

        // this.route.params.forEach((params: Params) => {
        //     var id = this.route.snapshot.params['id'];
        //     this.infoGameService.getOneGameT(id)
        //         .subscribe(tourn => {this.tourns = tourn; console.log("mon tournament"+this.tourns)});
        //     console.log("ID tourns : "+ id, this.tourns);
        // });




        // console.log(id);
        //getOneGameT
       // this.getInfoGame(id);

    }
    goBack(): void {
        this.location.back();
    }
}