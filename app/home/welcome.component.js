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
var core_1 = require("@angular/core");
var d3 = require("d3");
var WelcomeComponent = (function () {
    function WelcomeComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.pageTitle = 'D3 Angular 2 Folders Graph with Pie Chart ';
        this.elementRef = elementRef;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit() called");
        //let h1:HTMLElement = d3.select(this.elementRef.nativeElement).select('h1');
        var h1 = d3.select('h1');
        this.renderer.setElementStyle(h1[0][0], 'background-color', 'blue');
    };
    WelcomeComponent.prototype.afterViewInit = function () {
        console.log("afterViewInit() called");
        var h1 = d3.select(this.elementRef.nativeElement).select('h1');
        this.renderer.setElementStyle(h1[0][0], 'background-color', 'blue');
        //d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/home/welcome.component.html',
        styleUrls: ['app/home/welcome.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map