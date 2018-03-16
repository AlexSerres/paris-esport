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
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var common_1 = require('@angular/common');
var infogame_service_1 = require('./infogame.service');
var InfoGameComponent = (function () {
    function InfoGameComponent(router, route, location, infoGameService) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.infoGameService = infoGameService;
        this.selectedinfoGame = [];
    }
    InfoGameComponent.prototype.getInfoGame = function (id) {
        var _this = this;
        this.infoGameService.getOneGame(id).subscribe(function (data) {
            _this.matches = data;
        });
        this.infoGameService.getOneTourn(id).subscribe(function (data) {
            _this.tourns = data;
        });
    };
    InfoGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            // let id = +params['id'];
            var id = _this.route.snapshot.params['id'];
            _this.infoGameService.getOneGame(id)
                .subscribe(function (match) { _this.matches = match; console.log("mon match" + _this.matches); });
            console.log("ID game : " + id, _this.matches);
            _this.infoGameService.getOneTourn(id)
                .subscribe(function (tourn) { _this.tourns = tourn; console.log("mon tournament" + _this.tourns); });
            console.log("ID tournament : " + id, _this.tourns);
        });
        // this.route.params.forEach((params: Params) => {
        //     var id = this.route.snapshot.params['id'];
        //     this.infoGameService.getOneGameT(id)
        //         .subscribe(tourn => {this.tourns = tourn; console.log("mon tournament"+this.tourns)});
        //     console.log("ID tourns : "+ id, this.tourns);
        // });
        // console.log(id);
        //getOneGameT
        // this.getInfoGame(id);
    };
    InfoGameComponent.prototype.goBack = function () {
        this.location.back();
    };
    InfoGameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-infoGame',
            templateUrl: './infogame.component.html',
            styleUrls: ['infogame.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_2.ActivatedRoute, common_1.Location, infogame_service_1.InfoGameService])
    ], InfoGameComponent);
    return InfoGameComponent;
}());
exports.InfoGameComponent = InfoGameComponent;
//# sourceMappingURL=infogame.component.js.map