import * as d3 from 'd3';
import {ViewChild} from "@angular/core";
// import {nvD3} from 'ng2-nvd3'
export class KeyVal{
    key:string;
    val:number;

    constructor(key:string, val:number){
        this.key=key;
        this.val = val;
    }
}
export class Directory{
    name:string;

    type: string; //can be enum
    public path: string; //will be analyzed by the suffix //will be the primary key as it is unique
    children: Array<Directory>; //can be files or folders
    files: Array<Directory>;

    expanded = false;
    checked = false;
    options:any;
    data:any;

    // @ViewChild(nvD3)
    // nvD3: nvD3;

    constructor(name:string,type:string,path:string,children:Array<Directory>) {
        this.name= name;
        this.type = type;
        this.path = path;
        this.children = children;
    }
    toggle(){
        this.expanded = !this.expanded;
        console.log("Directory " + this.name + " toggle");
        if(this.expanded){
            if (!(typeof this.children === 'undefined' || !this.children) && this.children.length > 0 ) {
                console.log(JSON.stringify(this.children));

                let _keyVal:Array<KeyVal> = [];
                let _localDirectories:Array<Directory> = this.children.filter(f => {return f.type === "file"});
                for (var n=0;n<_localDirectories.length;n++) {
                    let fileExt = _localDirectories[n].path.split('.').pop();
                    let existingEntry = _keyVal.filter(item => {return item.key == fileExt});
                    if (!(typeof existingEntry === 'undefined' || !existingEntry) && existingEntry.length > 0 ) {
                        existingEntry[0].val ++;
                    }
                    else {
                        _keyVal.push(new KeyVal(fileExt,1));
                    }
                }
                console.log(JSON.stringify(_keyVal));
                //this.setPieChart();
                //this.initPieChartData();
                // this.nvD3.chart.update();
            }
        }
    }

    // private setPieChart(){
    //         let data = [{name: 'A', value: 1}];
    //         let width = 400, height = 200;
    //
    //         let x = d3.scale.ordinal().rangeRoundBands([0, width]);
    //         let y = d3.scale.linear().range([height, 0]);
    //
    //         var h1 = d3.select(this.elementRef.nativeElement).select('chart');
    //         this.renderer.setElementStyle(h1[0][0], 'background-color', 'blue');
    //         let chart = d3.select(".chart")
    //             .attr("width", width)
    //             .attr("height", height)
    //             .append("g");
    //
    //         x.domain(data.map(function(d) { return d.name; }));
    //         y.domain([0, d3.max(data, function(d) { return d.value; })]);
    //
    //         chart.selectAll(".bar")
    //             .data(data)
    //             .enter().append("rect")
    //             .attr("class", "bar")
    //             .attr("x", function(d) { return x(d.name); })
    //             .attr("y", function(d) { return y(d.value); })
    //             .attr("height", function(d) { return height - y(d.value); })
    //             .attr("width", x.rangeBand());
    //
    //
    // }


    private initPieChartData() {
        this.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d: any) {
                    return d.label;
                },
                y: function (d: any) {
                    return d.value;
                },
                showValues: true,
                valueFormat: function (d:any) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
        }
        this.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label": "A",
                        "value": -29.765957771107
                    },
                    {
                        "label": "B",
                        "value": 0
                    },
                    {
                        "label": "C",
                        "value": 32.807804682612
                    },
                    {
                        "label": "D",
                        "value": 196.45946739256
                    },
                    {
                        "label": "E",
                        "value": 0.19434030906893
                    },
                    {
                        "label": "F",
                        "value": -98.079782601442
                    },
                    {
                        "label": "G",
                        "value": -13.925743130903
                    },
                    {
                        "label": "H",
                        "value": -5.1387322875705
                    }
                ]
            }
        ];
    }
    getIcon(){

        if(this.expanded){
            return '-';
        }

        return '+';
    }

    getGlyphicon(){
        if(this.expanded && this.type=="folder"){
            return 'glyphicon glyphicon-folder-open';
        }
        if(!this.expanded && this.type=="folder"){
            return 'glyphicon glyphicon-folder-close';
        }
        if(this.type=="file"){
            return 'glyphicon glyphicon-file';
        }
    }


    // check(){
    //     this.checked = !this.checked;
    //     this.checkRecursive(this.checked);
    // }
    //
    // checkRecursive(state:boolean){
    //     this.children.forEach(d => {
    //         d.checked = state;
    //         d.checkRecursive(state);
    //     });
    // }

}
