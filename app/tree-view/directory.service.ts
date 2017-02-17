import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import {Directory} from "./directory";

@Injectable()
export class DirectoryService {
    private _directoriesUrl = 'api/folders/folders.json';
    private directories: Directory[] = [];

    constructor(private _http: Http) { }

    getDirectories(): Observable<Array<Directory>>{
        return this._http.get(this._directoriesUrl)
            .map((response: Response) =>{
                const data = response.json();
                if (data.length > 0) {
                    this.directories = this.recursiveInit(data);
                    return this.directories;
                }
            })
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    recursiveInit(data:Array<Directory>):Array<Directory>
    {
           let transformedDirectories: Array<Directory> = [];
           let childDirectories: Array<Directory> = [];
           for (let d of data) {
                if (!(typeof d.children === 'undefined' || !d.children) && d.children.length > 0 ) {
                    childDirectories =  this.recursiveInit(d.children);
                }
                transformedDirectories.push(
                   new Directory(
                       d.name,
                       d.type,
                       d.path,
                       childDirectories)
               );
            }
            return transformedDirectories;
    }


    getDirectory(path: string): Observable<Directory> {
        return this.getDirectories()
            .map((directories: Directory[]) => directories.find(d => d.path === path));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
