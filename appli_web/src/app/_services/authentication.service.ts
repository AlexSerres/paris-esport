/**
 * Created by Lindsay on 27/02/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'angular-2-local-storage';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    // private authenUrl = 'http://172.30.1.175:7070/';
    private authenUrl = 'http://192.168.0.11:7070/';
    private connected: Subject<boolean> = new Subject<Boolean>();

    constructor(private http: Http, private localStorageService: LocalStorageService) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));      
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify({name: username, password: password});
        console.log(body);

        return this.http.post(this.authenUrl + 'authenticate', body, options)
            .map((response: Response) => {
                console.log(response);
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().id_token;
                let id_user = response.json() && response.json().id;
                if (token) {
                    // set token property code de jauzé
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    //localStorage.setItem('currentUser', JSON.stringify({ name: username, token: token }));
                    //this.localStorageService.set('currentUser', JSON.stringify({name: username, token: token}));
                    this.localStorageService.set('currentUser', JSON.stringify({id: id_user, name: username, token: token}));
                    console.log(this.localStorageService.get('currentUser'));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.localStorageService.remove('currentUser');
    }

    onConnected(){
        return this.connected.asObservable();
    }

    setConnected(boolvalue: boolean){
        this.connected.next(boolvalue);
    }

}