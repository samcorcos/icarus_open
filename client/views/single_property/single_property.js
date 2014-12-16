Template.singleProperty.rendered = function() {
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
};

Template.singleProperty.helpers({

});

Template.singleProperty.events({
  'click #add-property-image': function(e,t) {
    filepicker.pick(
      function(Blob){
        Images.insert({ "owner": Meteor.userId(), "property": Session.get("currentId")._id, "bloburl": Blob.url, "date": Date() })
      }
    );
  }
});



Template.singlePropertyImageCarousel.rendered = function() {
  $('#carousel').slick({
    dots: true,
    arrows: true
  });
}



Meteor.subscribe("images");
