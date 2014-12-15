

createPropertiesMap = function() {

  var height = 600,
  width = 1000;

  var projection = d3.geo.albersUsa()
  .scale(1000)
  .translate([width / 2, height / 2]);


  var path = d3.geo.path()
  .projection(projection);


  var svg = d3.select("#property-map").append("svg")
  .attr("viewBox", "0 50 1000 550")
  .attr("preserveAspectRatio", "xMinYMin meet");

  ///////////////////////////////
  //Building Map
  ///////////////////////////////
  d3.json("us.json", function(error, us) {
    if (error) return console.error(error);

    svg.append("path")
    .datum(topojson.feature(us, us.objects.subunits))
    .attr("d", path);

    svg.selectAll(".subunit")
    .data(topojson.feature(us, us.objects.subunits).features)
    .enter().append("path")
    .attr("class", function(d) { return "subunit " + d.id; })
    //added id in above line to use as selector: ex US-NY
    .attr("d", path)
    .style('fill','#aaa')



    /////////Gives state boundary line
    svg.insert('path','.graticule')
    .datum(topojson.feature(us, us.objects.subunits,function(a, b) { return a !== b; }))
    .attr('class','state-boundary')
    .attr("d", path)
    .attr('stroke','#FFF')
    .style('fill','none')


    ///Populating stateHeat for use in heatmap below
    var locationConcentration = {};
    var paths = d3.selectAll('path')[0];
    paths.forEach(function(path){
      //Getting state abbreviation out of DOM
      var classString = path.className.animVal;
      var state = classString.slice(classString.length-2)
      locationConcentration[state] = 0;
    })



    d3.json("locations.json", function(error, data) {
      if (error) return console.error(error);
      var locations = data.locations;

      locations.forEach(function(location){
        var state = location.state;
        var thisState = d3.select('path[class*='+state+']');
        locationConcentration[state] += 1;
      })

      //////Added dot in the middle of the state
      /////////////Working with Bubbles



      svg.append("g")
      .attr("class", "bubble")
      .selectAll("circle")
      .data(topojson.feature(us, us.objects.subunits).features) // this is probably where the error is
      .enter().append("circle")
      .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
      .attr("r", function(d) {
        var tempArray = [];
        for (var num in locationConcentration) {
          tempArray.push(locationConcentration[num])
        }

        var radius = d3.scale.sqrt()
        .range([d3.min(tempArray), d3.max(tempArray)]);

        var abbrev = d.id.split('-').pop();

        return radius(locationConcentration[abbrev]);
      });

    })





    ////////////////Tooltips
    // var tooltip = d3.select('body').append('div')
    //   .style('position', 'absolute')
    //   .style('padding', '0 10px')
    //   .style('background', 'black')
    //   .style('color','white')
    //   .style('opacity', 0) // setting to 0 because we dont want it to show when the graphic first loads
    //
    // d3.selectAll('path').on('mouseover', function(d) {
    //   if(d3.select(this).attr('class')==='state-boundary'){
    //     return;  //Handles mouseover state boundary lines
    //   }
    //   var stateAbbrev = d.id.split('-')[1];
    //   d3.select(this)
    //   .style('opacity', 0.5)
    //   tooltip.transition()
    //   .style('opacity', .9)
    //   tooltip.html(stateAbbrev)
    //   // tooltip.html(stateAbbrev+'<br>'+stateHeat[stateAbbrev])
    //   .style('left', (d3.event.pageX -15) + 'px')
    //   .style('top', (d3.event.pageY - 30) + 'px')
    // })
    //
    //
    // .on('mouseout', function(d) {
    //   d3.select(this)
    //   .style('opacity', 1)
    //   tooltip.transition().duration(500)
    //   .style('opacity', 0)
    //
    // })    ////////////End tooltip

  })
  ///////////////////////////////
  //End Map
  ///////////////////////////////









}
