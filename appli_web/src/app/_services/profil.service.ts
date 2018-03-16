import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../_models/index';

@Injectable()
export class ProfilService {
    // private infoGUrl = 'http://172.30.1.175:7070/';  // URL to web API
    private infoGUrl = 'http://192.168.0.11:7070/';
    constructor (private http: Http) {}

   /* getProfil (): Observable<Tournament[]> {
        return this.http.get(this.infoGUrl+"tournaments")
            .map((response: Response) => response.json());
    }*/
}