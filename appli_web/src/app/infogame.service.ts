/**
 * Created by Lindsay on 22/02/2017.
 */
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { InfoGame } from './infogame';

@Injectable()
export class InfoGameService {
    private infoGUrl = 'http://172.30.1.175:7070/';  // URL to web API
    constructor (private http: Http) {}


    getInfoGame (): Observable<InfoGame[]> {
        return this.http.get(this.infoGUrl+"Matchs")
            .map((response: Response) => response.json());
    }

    getOneGame(id: number): Observable<InfoGame[]>{
        return this.http.get(this.infoGUrl+"videogames/" + id + "/matchs")
            .map((response: Response) => response.json());
    }

    getOneTourn(id: number): Observable<InfoGame[]>{
        return this.http.get(this.infoGUrl+"videogames/" + id + "/tournaments")
            .map((response: Response) => response.json());
    }

}