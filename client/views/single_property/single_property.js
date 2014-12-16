// var Images = new FS.Collection("images", { // Here we have defined a FS.Collection named "images", which will be a new collection in your MongoDB database with the name "cfs.images.filerecord". We've also told it to store the files in ~/uploads on the local filesystem.
//   stores: [new FS.Store.GridFS("images")] // This can also be passed in after "images" to store the files elsewhere:   , {path: "~/uploads"}
// });
//
// PropertyImages = new Mongo.Collection("propertyImages");

Template.singleProperty.rendered = function() {

};

Template.singleProperty.helpers({

});

Template.singleProperty.events({

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
  map.setCenter(new google.maps.LatLng( 41.870302, -87.764084 ));
}
);

//
// Template.singleProperty.events({
//   'change #dropzoneDiv': function(event, template) {
//     FS.Utility.eachFile(event, function(file) {
//       Images.insert(file, function (err, fileObj) {
//         //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
//       });
//     });
//   }
//
// });


// Template.imageUpload.rendered = function(){
//
//   if (Meteor.isClient){
//
//     var arrayOfImageIds = [];
//
//     Dropzone.autoDiscover = false;
//
//     // Adds file uploading and adds the imageID of the file uploaded
//     // to the arrayOfImageIds object.
//
//     var dropzone = new Dropzone("form#dropzone", {
//       accept: function(file, done){
//         Images.insert(file, function(err, fileObj){
//           if(err){
//             alert("Error");
//           } else {
//             // gets the ID of the image that was uploaded
//             var imageId = fileObj._id;
//             // do something with this image ID, like save it somewhere
//             arrayOfImageIds.push(imageId);
//             PropertyImages.insert({"imageId": imageId})
//           };
//         });
//       }
//     });
//   };
//
// };
