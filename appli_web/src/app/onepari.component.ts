/**
 * Created by Lindsay on 20/03/2017.
 */

import {Component, Input} from '@angular/core';
import {Odd} from "./_models/odd";
import {Game} from "./_models/game";
// import { InfoGameService } from './_services/infogame.service';
import { InfoGame } from './_models/index';
// import { GameDetailService } from './_services/game-details.service';


@Component({
    moduleId: module.id,
    selector: 'onePariModal',
    templateUrl: './onepari.component.html',
    styleUrls: ['./onepari.component.css']
})

export class OnePariComponent {
    @Input('selectedDetailMatchs') detailMatchs: Game;
    @Input('selectedDetailOdds') detailOdds: Odd;

    result: number;
    calcul: number;
    

    //(clic) de detailMatch et detailOdd
  /*  selectedDetailMatchs :InfoGame[] = [];
    selectedDetailOdds : InfoGame[]=[];*/

    calculateGame(odd: number) {
        this.result = this.calcul * odd;
        console.log(this.result);
    }


   /*submitPari() {
        if (this.calcul != null) {
            this.oneParisService.onePari(this.calcul).subscribe(data => {
                console.log(data);
              //  this.calcul = data;
            });

        }
    }*/
}
