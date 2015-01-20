Template.singleProperty.rendered = function() {

  var latitude = this.data.lat;
  var longitude = this.data.long;
  var street = this.data.street;

  ////Uncomment when online
  GoogleMaps.init(
    {
      'sensor': true, //optional
      // 'key': 'AIzaSyCV8bo7e52UYRmmjqUoTGUfkvqR4Zq6rnE', //optional
      'language': 'en' //optional
    },
    function(){
      var myLatlng = new google.maps.LatLng(latitude, longitude);

      var mapOptions = {
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        center: myLatlng
      };

      map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: street
      })

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
  },
  'click #add-term-sheet-button': function(e,t) {
    console.log('running');
    $(".flex-white-div-term-sheet").toggleClass("add-flex-div-show");
    $(".red-break-term-sheet").toggleClass("add-red-break-show");
    TermSheets.insert({ "owner": Meteor.userId(), "property": t.data._id, "totalPrice": 0, "downPayment": 0, "closingRepair": 0, "apr": 0, "taxes": 0, "hoa": 0, "insurance": 0, "rentPrice": 0, "squareFootage": 0, "equitySold": 0, "percentCapitalNeeded": 0 });
    $(".flex-white-div-term-sheet-button").toggleClass("add-flex-div-hide");
    $(".red-break-term-sheet-button").toggleClass("add-red-break-hide");
    $(".flex-white-div-inputs").toggleClass("add-flex-div-show");
  }
});

Template.singleProperty.helpers({
  hasTermSheet: function() {
    if (TermSheets.findOne({ property: Session.get("currentId") })) {
      return true;
    } else { return false; }
  },
  noTermSheet: function() {
    if (TermSheets.findOne({ property: Session.get("currentId") })) {
      return false;
    } else { return true; }
  }
});

Template.singlePropertyImageCarousel.helpers({
  propertyImages: function() {
    var currentProperty = Properties.findOne({ _id: Session.get("currentId")});
    return currentProperty.imagesArray;


    // var currentPropertyImages = [];
    // // console.log(this.data)
    // var currentPropertyId = Session.get("currentId");
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
