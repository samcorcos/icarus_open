var height = 600;
var width = 1000;

createPropertyMap = function() {
  var svg = d3.select("#property-map")
  .append("svg")
  .attr({
    height: height,
    width: width
  })
}
