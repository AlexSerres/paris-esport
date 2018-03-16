/**
 * Created by Lindsay on 27/02/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/index';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    // private infoGUrl = 'http://172.30.1.175:7070/';
    private infoGUrl = 'http://192.168.0.11:7070/';
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': + this.authenticationService.token , 'Content-Type': 'application/json'});
        console.log(this.authenticationService.token);
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get(this.infoGUrl + 'users', options)
            .map((response: Response) => response.json());
    }
}