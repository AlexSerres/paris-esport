/**
 * Created by Lindsay on 27/02/2017.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private localstorage: LocalStorageService) { }

    canActivate() {
        if (this.localstorage.get('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}