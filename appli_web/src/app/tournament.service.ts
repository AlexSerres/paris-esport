/**
 * Created by Lindsay on 13/03/2017.
 */
/**
 * Created by Lindsay on 06/03/2017.
 */
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Tournament } from './tournament';

@Injectable()
export class TournamentService {
    private infoGUrl = 'http://172.30.1.175:7070/';  // URL to web API
    constructor (private http: Http) {}

    getTournament (): Observable<Tournament[]> {
        return this.http.get(this.infoGUrl+"tournaments")
            .map((response: Response) => response.json());
    }
}