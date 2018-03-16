/**
 * Created by Lindsay on 10/03/2017.
 *
 */

import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';


import 'rxjs/add/operator/map'

@Injectable()
export class OneParisService {
    public token: string;
    // private pariUrl = 'http://172.30.1.175:7070/';
    private pariUrl = 'http://192.168.0.11:7070/';

    constructor(private http: Http) {
    }

   onePari(value: number, rate: number, total: number): Observable<boolean> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify({value: value, rate: rate, total: total});
        console.log(body);

        return this.http.post(this.pariUrl + 'bet', body, options)
            .map((response: Response) => {
                console.log(response);
                return true;
            });
    }

}