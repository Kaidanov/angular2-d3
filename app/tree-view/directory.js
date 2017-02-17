"use strict";
var d3 = require("d3");
// import {nvD3} from 'ng2-nvd3'
var KeyVal = (function () {
    function KeyVal(key, val) {
        this.key = key;
        this.val = val;
    }
    return KeyVal;
}());
exports.KeyVal = KeyVal;
var Directory = (function () {
    // @ViewChild(nvD3)
    // nvD3: nvD3;
    function Directory(name, type, path, children) {
        this.expanded = false;
        this.checked = false;
        this.name = name;
        this.type = type;
        this.path = path;
        this.children = children;
    }
    Directory.prototype.toggle = function () {
        this.expanded = !this.expanded;
        console.log("Directory " + this.name + " toggle");
        if (this.expanded) {
            if (!(typeof this.children === 'undefined' || !this.children) && this.children.length > 0) {
                console.log(JSON.stringify(this.children));
                var _keyVal = [];
                var _localDirectories = this.children.filter(function (f) { return f.type === "file"; });
                var _loop_1 = function () {
                    var fileExt = _localDirectories[n].path.split('.').pop();
                    var existingEntry = _keyVal.filter(function (item) { return item.key == fileExt; });
                    if (!(typeof existingEntry === 'undefined' || !existingEntry) && existingEntry.length > 0) {
                        existingEntry[0].val++;
                    }
                    else {
                        _keyVal.push(new KeyVal(fileExt, 1));
                    }
                };
                for (var n = 0; n < _localDirectories.length; n++) {
                    _loop_1();
                }
                console.log(JSON.stringify(_keyVal));
            }
        }
    };
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
    Directory.prototype.initPieChartData = function () {
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
                x: function (d) {
                    return d.label;
                },
                y: function (d) {
                    return d.value;
                },
                showValues: true,
                valueFormat: function (d) {
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
        };
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
    };
    Directory.prototype.getIcon = function () {
        if (this.expanded) {
            return '-';
        }
        return '+';
    };
    Directory.prototype.getGlyphicon = function () {
        if (this.expanded && this.type == "folder") {
            return 'glyphicon glyphicon-folder-open';
        }
        if (!this.expanded && this.type == "folder") {
            return 'glyphicon glyphicon-folder-close';
        }
        if (this.type == "file") {
            return 'glyphicon glyphicon-file';
        }
    };
    return Directory;
}());
exports.Directory = Directory;
//# sourceMappingURL=directory.js.map