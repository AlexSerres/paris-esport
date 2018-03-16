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
 * Created by Lindsay on 22/02/2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var InfoGameService = (function () {
    function InfoGameService(http) {
        this.http = http;
        this.infoGUrl = 'http://172.30.1.175:7070/'; // URL to web API
    }
    InfoGameService.prototype.getInfoGame = function () {
        return this.http.get(this.infoGUrl + "Matchs")
            .map(function (response) { return response.json(); });
    };
    InfoGameService.prototype.getOneGame = function (id) {
        return this.http.get(this.infoGUrl + "videogames/" + id + "/matchs")
            .map(function (response) { return response.json(); });
    };
    InfoGameService.prototype.getOneTourn = function (id) {
        return this.http.get(this.infoGUrl + "videogames/" + id + "/tournaments")
            .map(function (response) { return response.json(); });
    };
    InfoGameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], InfoGameService);
    return InfoGameService;
}());
exports.InfoGameService = InfoGameService;
//# sourceMappingURL=infogame.service.js.map