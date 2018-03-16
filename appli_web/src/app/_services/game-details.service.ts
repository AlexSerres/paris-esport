/**
 * Created by Lindsay on 17/03/2017.
 */
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Game } from '../_models/index';
import { Odd } from '../_models/odd';

@Injectable()
export class GameDetailService {
    // private infoGUrl = 'http://172.30.1.175:7070/';  // URL to web API
    private infoGUrl = 'http://192.168.0.11:7070/';
    constructor(private http: Http) {}

    getOddService(id: number): Observable<Odd[]>{
        return this.http.get(this.infoGUrl + "matchs/" + id)
            .map((response: Response) => response.json());
    }

    getMatchService(id: number): Observable<Game[]>{
        return this.http.get(this.infoGUrl + "matchs/" + id + "/info")
            .map((response: Response) => response.json());
    }

}