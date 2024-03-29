/**
 * Created by Lindsay on 27/02/2017.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthenticationService } from '../_services/index';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                    this.authenticationService.setConnected(true);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}