

createPropertiesMap = function() {
  var height = 600,
  width = 1000;



  var projection = d3.geo.albersUsa()
  .scale(1000)
  .translate([width / 2, height / 2]);


  var path = d3.geo.path()
  .projection(projection);


  var svg = d3.select("#property-map").append("svg")
    .attr("width", width)
    .attr("height", height);

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
      .style('fill','#797979')



    /////////Gives state boundary line
    svg.insert('path','.graticule')
      .datum(topojson.feature(us, us.objects.subunits,function(a, b) { return a !== b; }))
      .attr('class','state-boundary')
      .attr("d", path)
      // .attr('stroke','#FFF')
      .style('fill','none')


    ///Populating stateHeat for use in heatmap below
    var location = {};
    var paths = d3.selectAll('path')[0];
    paths.forEach(function(path){
      //Getting state abbreviation out of DOM
      var classString = path.className.animVal;
      var state = classString.slice(classString.length-2)
      location[state]=0;
    })

    //////Added dot in the middle of the state
    /////////////Working with Bubbles
    svg.append("g")
      .attr("class", "bubble")
      .selectAll("circle")
      .data(topojson.feature(us, us.objects.subunits).features) // this is probably where the error is
      .enter().append("circle")
        .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
        .attr("r", 1.5);


    var radius = d3.scale.sqrt()
      .domain([0, 1e6])
      .range([0, 15]);


    d3.json("locations.json", function(error, location) {
      if (error) return console.error(error);

    })


    // /////////////////////////
    // /////Bringing in other json
    // d3.json("data.json",function(error,datum){
    //   //Datum.nodes is an array of people with keys
    //   //name, occupation, location, gender, marital_status
    //   var people = datum.nodes
    //
    //   people.forEach(function(person){
    //     var state =person.location;
    //     var thisState = d3.select('path[class*='+state+']')
    //     stateHeat[state]+=1;
    //   });
    //
    //
    //   svg.selectAll(".subunit")
    //   .style('fill',function(d){
    //     var abbrev = d.id.split('-').pop();
    //
    //     return color(stateHeat[abbrev])
    //   })

    // svg.append("g")
    //     .attr("class", "bubble")
    //   .selectAll("circle")
    //     .data(topojson.feature(us, us.objects.subunits).features
    //       .sort(function(a, b) { return b.properties.population - a.properties.population; }))
    //   .enter().append("circle")
    //     .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
    //     .attr("r", function(d) { return radius(d.properties.population); });


    ////////End Bubbles///////



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
