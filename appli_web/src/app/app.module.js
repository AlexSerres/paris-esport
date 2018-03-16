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
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var videoGames_component_1 = require('./videoGames.component');
var videoGames_service_1 = require('./_services/videoGames.service');
var infogame_component_1 = require('./infogame.component');
var infogame_service_1 = require('./infogame.service');
var tournament_component_1 = require('./tournament.component');
var tournament_service_1 = require('./tournament.service');
//import { MatchDetailComponent} from './match-detail.component';
var http_1 = require("@angular/http");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule, http_1.HttpModule
            ],
            declarations: [app_component_1.AppComponent,
                videoGames_component_1.VideoGamesComponent, infogame_component_1.InfoGameComponent, tournament_component_1.TournamentComponent //,MatchDetailComponent
            ],
            providers: [videoGames_service_1.VideoGamesService, infogame_service_1.InfoGameService, tournament_service_1.TournamentService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map