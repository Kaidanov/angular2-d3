
import {Component, Renderer, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';


@Component({
    selector: 'my-app',
    templateUrl: 'app/home/welcome.component.html',
    styleUrls: ['app/home/welcome.component.css']
    //,
    // encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit{
    public pageTitle: string = 'D3 Angular 2 Folders Graph with Pie Chart ';


    constructor(private elementRef: ElementRef,private renderer:Renderer) {
        this.elementRef = elementRef;

    }

    ngOnInit(){
        console.log("ngOnInit() called");
        //let h1:HTMLElement = d3.select(this.elementRef.nativeElement).select('h1');
        var h1=d3.select('h1');
        this.renderer.setElementStyle(h1[0][0], 'background-color', 'blue');

    }
    afterViewInit(){
        console.log("afterViewInit() called");
        var h1 = d3.select(this.elementRef.nativeElement).select('h1');
        this.renderer.setElementStyle(h1[0][0], 'background-color', 'blue');
        //d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");
    }
}
