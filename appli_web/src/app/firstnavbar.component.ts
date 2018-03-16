import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from 'angular-2-local-storage';
import { User } from './_models/index';
import { UserService } from './_services/index';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'firstnavbar',
  templateUrl: 'firstnavbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class FirstnavbarComponent  { 
  Sname = 'SaweSport';
  
  public notConnected: Boolean;
  users: User[] = [];


  constructor(
      private router: Router,
      private localStorageService: LocalStorageService,
      private userService: UserService,
      private authenticationService: AuthenticationService
  ) {
    this.notConnected = true;
  }

  ngOnInit(): void {
    this.authenticationService.onConnected()
      .subscribe(value => this.notConnected = !value);

  }



}
