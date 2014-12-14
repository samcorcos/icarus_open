var height = 600;
var width = 1000;

createMap = function() {
  var svg = d3.select("#concentration-map")
  .append("svg")
  .attr({
    height: height,
    width: width
  })

  svg.append("rect")
    .attr("width", 100)
    .attr("height", 200)
    .attr("fill", "orange")

}
