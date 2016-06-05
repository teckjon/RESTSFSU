var scale = {
  y: d3.scale.linear()
};

var totalWidth = 500;
var totalHeight = 200;

scale.y.domain([0, 100]);
scale.y.range([0, totalHeight]);

var ages = [4, 60, 8, 9];
var barWidth = 20;

var chart = d3.select('.chart')
    .attr({
        'width': totalWidth,
        'height': totalHeight
    });

var bars = chart
    .selectAll('g')
    .data(ages)
    .enter()
    .append('g');

bars.append('rect')
    .attr({
        'x': function (d, i) {
            return i * barWidth;
        },
        'width': barWidth - 1,
        'height': scale.y
    });