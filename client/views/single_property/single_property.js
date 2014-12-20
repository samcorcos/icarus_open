Template.singleProperty.rendered = function() {

  ////Uncomment when online
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

Template.singleProperty.events({

  //// Uncomment when online
  'click #add-property-image': function(e,t) {
    filepicker.pick(
      function(Blob){
        Images.insert({ "owner": Meteor.userId(), "property": t.data._id, "bloburl": Blob.url, "date": Date() }) // I think I'm going to have to get this Session.get from the params, rather than the Session variable inc ase seomeone goes straight to the individual property page.
      }
    );
  }
});

Template.singlePropertyImageCarousel.helpers({
  propertyImages: function() { // Maybe I can solve this with Meteor._wrapAsync??
    var currentPropertyImages = [];
    // console.log(this.data)
    var currentPropertyId = Session.get("currentId");
    // var allImages = Images.find().fetch();
    //
    // allImages.forEach(function(image) {
    //   var temp = {};
    //   if (image.property == currentPropertyId && image.property != undefined) {
    //     temp.url = image.bloburl;
    //     currentPropertyImages.push(temp);
    //   }
    // })
    // // console.log(currentPropertyImages);
    //
    // if (currentPropertyImages.length > 0) {
    //   return currentPropertyImages;
    // }
  }
});

Template.singlePropertyImageCarousel.rendered = function() {
  $('#carousel').slick({
    dots: true,
    arrows: true
  });

}



Meteor.subscribe("images");
