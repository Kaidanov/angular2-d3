import {DirectoryService} from "./directory.service";
import {Component, OnInit, Input, ViewChild} from "@angular/core";
import {Directory} from "./directory";
import {TreeView} from './tree-view';
import 'rxjs/add/operator/do';



@Component({
    selector:'my-dir',
    template: ' <tree-view [directories]="directories"></tree-view>'
})
export class DirectoryListComponent implements OnInit  {
    pageTitle: string = 'Tree View';
    directories: Array<Directory>;
    errorMessage: string;


    constructor(private _directoryService: DirectoryService){}

    ngOnInit(): void
    {
        this._directoryService.getDirectories()
            .subscribe(directories => {
                            this.directories = directories;
                            //console.log("in ngOnInit getDirectories subscribe " + JSON.stringify(this.directories));
                        },
                    error => this.errorMessage = <any>error
             );
    }

}