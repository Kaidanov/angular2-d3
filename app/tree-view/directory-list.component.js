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
var directory_service_1 = require("./directory.service");
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
var DirectoryListComponent = (function () {
    function DirectoryListComponent(_directoryService) {
        this._directoryService = _directoryService;
        this.pageTitle = 'Tree View';
    }
    DirectoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._directoryService.getDirectories()
            .subscribe(function (directories) {
            _this.directories = directories;
            //console.log("in ngOnInit getDirectories subscribe " + JSON.stringify(this.directories));
        }, function (error) { return _this.errorMessage = error; });
    };
    return DirectoryListComponent;
}());
DirectoryListComponent = __decorate([
    core_1.Component({
        selector: 'my-dir',
        template: ' <tree-view [directories]="directories"></tree-view>'
    }),
    __metadata("design:paramtypes", [directory_service_1.DirectoryService])
], DirectoryListComponent);
exports.DirectoryListComponent = DirectoryListComponent;
//# sourceMappingURL=directory-list.component.js.map