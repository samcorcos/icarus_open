// This is where our Analytics D3 functions will live

createTimeline = function() {

  // var svg = d3.select("#analytics-timeline")
  //   .append("svg")

};


createAssetAllocation = function() {

  var width = 300,
  height = 300,
  radius = Math.min(width, height) / 2;

  var color = d3.scale.ordinal()
    .range(["#D1122B", "#E43C53", "#F4667A", "#A7061C", "#820012"]);

  var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius*.4);

  var transitionArc = d3.svg.arc()
    .outerRadius(radius)
    .innerRadius(radius*.5);


  var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.total; }); // layout.pie() must take in an array of objects.

  var sum = 0;

  d3.json("allocation.json", function(error, allocation) {
    var data = allocation.allocation;
    if (error) return console.error(error);
    console.log(data)

    for(var i = 0; i<data.length;i++){
      sum += data[i]['total'];
    }

    var svg = d3. select("#analytics-asset-allocation")
      .append("svg")
      .attr({
        height: height,
        width: width
      })
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

    var g = svg.selectAll(".arc")
        .data(pie(data)) // it wants an array of objects, with each object having a single property of the allocation... so "debt" would be the only property of the first item in the array
      .enter().append("g")
        .attr("class", "arc")

    g.append("path")
      .attr("d", arc)
      .attr("funding",function(d){return d.data.total})
      .style("fill", function(d) {
        return color(d.data.type);
      });



    });

};
