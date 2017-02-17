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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var directory_1 = require("./directory");
var DirectoryService = (function () {
    function DirectoryService(_http) {
        this._http = _http;
        this._directoriesUrl = 'api/folders/folders.json';
        this.directories = [];
    }
    DirectoryService.prototype.getDirectories = function () {
        var _this = this;
        return this._http.get(this._directoriesUrl)
            .map(function (response) {
            var data = response.json();
            if (data.length > 0) {
                _this.directories = _this.recursiveInit(data);
                return _this.directories;
            }
        })
            .catch(this.handleError);
    };
    DirectoryService.prototype.recursiveInit = function (data) {
        var transformedDirectories = [];
        var childDirectories = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var d = data_1[_i];
            if (!(typeof d.children === 'undefined' || !d.children) && d.children.length > 0) {
                childDirectories = this.recursiveInit(d.children);
            }
            transformedDirectories.push(new directory_1.Directory(d.name, d.type, d.path, childDirectories));
        }
        return transformedDirectories;
    };
    DirectoryService.prototype.getDirectory = function (path) {
        return this.getDirectories()
            .map(function (directories) { return directories.find(function (d) { return d.path === path; }); });
    };
    DirectoryService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return DirectoryService;
}());
DirectoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DirectoryService);
exports.DirectoryService = DirectoryService;
//# sourceMappingURL=directory.service.js.map