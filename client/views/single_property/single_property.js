Meteor.subscribe("images");

Template.singleProperty.rendered = function() {

};

Template.singleProperty.helpers({

});

Template.singleProperty.events({
  'click #add-property-image': function(e,t) {
    filepicker.pick(
      function(Blob){
        Images.insert({ "owner": Meteor.userId(), "propertyImage": Blob.url, "date": Date() }, function(err, inserted) {
          if (err) {
            console.log(err)
          } else {
            console.log("success")
            console.log(inserted)
          }
        })
        // console.log(Meteor.userId()) // this is the correct way to get the ID
        console.log(Blob.url);
      }
    );
  }
});

GoogleMaps.init(
{
  'sensor': true, //optional
  // 'key': 'AIzaSyCV8bo7e52UYRmmjqUoTGUfkvqR4Zq6rnE', //optional
  'language': 'en' //optional
},
function(){
  var mapOptions = {
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  map.setCenter(new google.maps.LatLng( 41.870302, -87.764084 )); // This is going to have to be a function based on some calculation that gets the lat and long... good luck! ...Or just https://developers.google.com/maps/documentation/geocoding/
}
);
