"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Lindsay on 21/02/2017.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var videoGames_service_1 = require('./_services/videoGames.service');
var infogame_service_1 = require('./infogame.service');
var tournament_service_1 = require('./tournament.service');
//import { User } from '../_models/index';
//import { UserService } from '../_services/index';
var VideoGamesComponent = (function () {
    //  users: User[] = [];
    function VideoGamesComponent(router, videoGamesService, infoGameService, tournamentService) {
        this.router = router;
        this.videoGamesService = videoGamesService;
        this.infoGameService = infoGameService;
        this.tournamentService = tournamentService;
        this.selectedVideoGames = [];
        this.selectedInfoGame = [];
        this.selectedTournament = [];
    }
    VideoGamesComponent.prototype.getVideoGames = function () {
        var _this = this;
        this.videoGamesService.getVideoGames().subscribe(function (data) {
            _this.videoGames = data;
        });
    };
    VideoGamesComponent.prototype.getInfoGame = function () {
        var _this = this;
        this.infoGameService.getInfoGame().subscribe(function (data) {
            _this.infoGame = data;
        });
    };
    VideoGamesComponent.prototype.getTournament = function () {
        var _this = this;
        this.tournamentService.getTournament().subscribe(function (data) {
            _this.tournament = data;
        });
    };
    VideoGamesComponent.prototype.ngOnInit = function () {
        this.getVideoGames();
        this.getInfoGame();
        this.getTournament();
    };
    VideoGamesComponent.prototype.onSelect = function (videoGames) {
        this.selectedVideoGames = videoGames;
    };
    VideoGamesComponent.prototype.gotoDetailOneVideoGame = function (videoGames) {
        console.log(videoGames);
        this.router.navigate(['/detailgame', videoGames._id]);
    };
    VideoGamesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-videoGames',
            templateUrl: 'videoGames.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, videoGames_service_1.VideoGamesService, infogame_service_1.InfoGameService, (typeof (_a = typeof tournament_service_1.TournamentService !== 'undefined' && tournament_service_1.TournamentService) === 'function' && _a) || Object])
    ], VideoGamesComponent);
    return VideoGamesComponent;
    var _a;
}());
exports.VideoGamesComponent = VideoGamesComponent;
//# sourceMappingURL=videoGames.component.js.map