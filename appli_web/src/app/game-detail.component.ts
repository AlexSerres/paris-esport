/**
 * Created by Lindsay on 22/02/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import {GameDetailService} from './_services/index';
import {Game} from './_models/index';
import {OneParisService} from "./_services/oneparis.service";
import {Odd} from './_models/odd';


@Component({
    moduleId: module.id,
    selector: 'my-detailGame',
    //template: `<onePariModal></onePariModal>`,
    templateUrl: './game-detail.component.html',
    styleUrls: ['./game-detail.component.css']
})

export class GameDetailComponent implements OnInit {

    private detailMatch: Game[];
    private detailOdd: Odd[];
    id: string;
    calcul: number;
    result: number;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private gamedetailService: GameDetailService,
                private oneParisService: OneParisService
                ) {
        this.calcul = 0;
    }

    // getInfoMatch(id: number): void {
    //     this.gamedetailService.getGameDetailService(id).subscribe(data => {
    //         this.detailMatch = data;
    //     });
    // }
    

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            // let id = +params['id'];
            var id = this.route.snapshot.params['id'];

            this.gamedetailService.getOddService(id)
                .subscribe(allOdds => {
                    this.detailOdd = allOdds;
                    console.log(this.detailOdd);
                });
            
            this.gamedetailService.getMatchService(id)
                .subscribe(details => {
                    this.detailMatch = details;
                    console.log(this.detailMatch);
                });

        });
    }

    calculateGame(odd: number) {
        this.result = this.calcul * odd;
    }


   submitPari() {
       console.log('SUBMIT');
        if (this.calcul != null) {
            this.oneParisService.onePari(this.calcul, 5.4, this.result)
            .subscribe(data => {
                console.log(data);
              //  this.calcul = data;
            });

        }
    }
    


}