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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var videoGames_service_1 = require('./_services/videoGames.service');
var AppComponent = (function () {
    function AppComponent(router, videoGamesService) {
        this.router = router;
        this.videoGamesService = videoGamesService;
        this.Sname = 'SaweSport';
        this.selectedVideoGames = [];
    }
    AppComponent.prototype.getVideoGames = function () {
        var _this = this;
        this.videoGamesService.getVideoGames().subscribe(function (data) {
            _this.videoGames = data;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getVideoGames();
    };
    AppComponent.prototype.gotoDetailOneVideoGame = function (videoGames) {
        this.router.navigate(['/detailgame', videoGames._id]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<nav class=\"navbar navbar-inverse\">\n    <style>\n    .navbar{\n    margin-bottom: 0px;\n    border-radius: 0px;\n    right: auto;\n    }\n    .container{\n    margin-right: 10px;\n    text-decoration-color: white;\n    }\n    </style>\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">{{Sname}}</a>\n    </div>\n    <div class=\"container\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        </ul>\n    </div>\n</nav>\n   \n<div class=\"alert alert-info alert-dismissible\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n  <strong>Info! </strong>To reach in bets, you must be connected.\n</div>\n\n<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <ul class=\"nav navbar-nav\">\n            <li class=\"item\" *ngFor=\"let game of videoGames;\" (click)=\"gotoDetailOneVideoGame(game)\">\n                <a>{{game.name}}</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n",
        }), 
        __metadata('design:paramtypes', [router_1.Router, videoGames_service_1.VideoGamesService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map