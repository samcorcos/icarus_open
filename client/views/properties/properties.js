Template.properties.rendered = function() {
  createPropertyMap();
  // var test = Properties.find().fetch();
  console.log(Properties.find().fetch())
};

Meteor.subscribe("properties", function() {
  // console.log(Meteor.userId())
  return Meteor.userId();
});

var height = 600;
var width = 1000;

var createPropertyMap = function() {
  var svg = d3.select("#property-map")
    .append("svg")
    .attr({
      height: height,
      width: width
    })
}


Template.properties.helpers({
  properties: function() {
    return Properties.find();
  }
});

Template.properties.events({

});
