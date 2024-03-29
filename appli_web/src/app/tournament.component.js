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
 * Created by Lindsay on 06/03/2017.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tournament_service_1 = require('./tournament.service');
var TournamentComponent = (function () {
    function TournamentComponent(router, tournamentService) {
        this.router = router;
        this.tournamentService = tournamentService;
        this.selectedtournament = [];
    }
    TournamentComponent.prototype.getTournament = function () {
        var _this = this;
        this.tournamentService.getTournament().subscribe(function (data) {
            _this.tournament = data;
        });
    };
    TournamentComponent.prototype.ngOnInit = function () {
        this.getTournament();
    };
    TournamentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-tournament',
            templateUrl: 'tournament.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, tournament_service_1.TournamentService])
    ], TournamentComponent);
    return TournamentComponent;
}());
exports.TournamentComponent = TournamentComponent;
//# sourceMappingURL=tournament.component.js.map