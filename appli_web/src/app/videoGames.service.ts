/**
 * Created by Lindsay on 20/02/2017.
 */
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { VideoGames } from './videoGames';

@Injectable()
export class VideoGamesService {
    private videoGUrl = 'http://172.30.1.175:8080/';  // URL to web API
    constructor (private http: Http) {}

    getVideoGames (): Observable<VideoGames[]> {
        return this.http.get(this.videoGUrl+"VideoGames")
            .map((response: Response) => response.json());
    }
    
}
