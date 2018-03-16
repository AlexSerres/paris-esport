import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VideoGamesService } from './_services/videoGames.service';
import { VideoGames } from './_models/index';
import { InfoGame } from './_models/index';
import { InfoGameService } from './_services/infogame.service';


@Component({
  moduleId: module.id,
  selector: 'secondnavbar',
  templateUrl: 'secondnavbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class SecondnavbarComponent  { 
  
  private videoGames : VideoGames[];
  selectedVideoGames: VideoGames[] = [];

  constructor(
      private router: Router,
      private videoGamesService: VideoGamesService,
  ) {}

  getVideoGames(): void {
    this.videoGamesService.getVideoGames().subscribe(data => {
      this.videoGames = data});
  }

  ngOnInit(): void {
    this.getVideoGames();
  }

  gotoDetailOneVideoGame(videoGames: VideoGames): void {
    this.router.navigate(['/detailgame', videoGames._id]);
  }

}
