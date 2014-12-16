// This is where our Analytics D3 functions will live

createTimeline = function() {

  // var svg = d3.select("#analytics-timeline")
  //   .append("svg")

};

Session.setDefault("activeTotal", 0);
Session.setDefault("activePercentage", 0);


createAssetAllocation = function() {

  var width = 300,
  height = 300,
  radius = Math.min(width, height) / 2;

  var color = d3.scale.ordinal()
    .range(["#D1122B", "#E43C53", "#F4667A", "#A7061C", "#820012"]);

  arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius*.4);

  transitionArc = d3.svg.arc()
    .outerRadius(radius)
    .innerRadius(radius*.5);


  var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.total; }); // layout.pie() must take in an array of objects.

  sum = 0;

  d3.json("allocation.json", function(error, allocation) {
    var data = allocation.allocation;
    if (error) return console.error(error);

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
      .attr("total",function(d){return d.data.total})
      .style("fill", function(d) {
        return color(d.data.type);
      });

    g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .text(function(d) { return d.data.type; });

    var element = d3.selectAll('svg')
    element = element[0][0];
    var bbox = element.getBBox();
      d3.selectAll('path').on('click', function(d) {
        pieSliceToggle(this);
        populateSummary();  //populating summary

      })
      .on('mouseover', function(d) {
        d3.select(this)
        .style('opacity', .8)
      })
      .on('mouseout', function(d) {
        d3.select(this)
        .style('opacity', 1)
      })

    });

};

var assetAllocationPercentage = 0;

function pieSliceToggle(element){
  var thisPath = d3.select(element);
  if(thisPath.attr('active')==='true'){
    thisPath.transition().attr('d', arc)
    thisPath.attr('active',false)
  } else {
    thisPath.transition().attr('d', transitionArc)
    thisPath.attr('active',true)
  }
};

Template.assetAllocation.helpers({
  percentage: function() {
    return Session.get("activePercentage");
  },
  total: function() {
    var tempNum = Session.get("activeTotal")
    return tempNum.formatMoney(0);
  }
});


function populateSummary(){

  var activeTotal = 0;

  $('path[active="true"]').each(function(i,val){
    activeTotal += +$(val).attr('total');
  });

  Session.set("activeTotal", activeTotal);
  Session.set("activePercentage", +(activeTotal*100/sum).toFixed(2))
}
