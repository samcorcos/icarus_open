Owners = new Mongo.Collection(null);

Directory = Meteor.users;

Template.properties.rendered = function() {

  createPropertiesMap();
  $('.modal-trigger').leanModal();
  $('.modal-close').leanModal();

  // $('.datepicker').pickadate();
};

Template.propertyPanel2.helpers({
  propertiesEven: function() {
    return Properties.find({}, { field: { zestimate: -1 }}) // Returns list of all properties, ordered by cost

    // db.users.find().map( function(u) { return u.name; } );
  }
  // Should have an "odd or even" helper, so it can be in two columns/rows and stack property!!!!
});

Template.properties.events({
  'click #add-property-button': function(e,t) {
    $(".flex-white-div-property").toggleClass("add-flex-div-show")
    $(".red-break-property").toggleClass("add-red-break-show")
  }
});

Template.newPropertyForm.events({
  'click #submit-new-property': function(e,t) {
    // e.preventDefault();
    if ($("#zpid").val()) {
      if (Number($("#zpid").val())) {
        if (Owners.find().fetch()[0] !== undefined) {

          Meteor.call("getProperty", Number($("#zpid").val()), function(err, result) {
            if (err) { console.log("Error with Zillow API Call") }
            Session.set("propertyData", result);

            var x = result["Zestimate:zestimate"]["response"]["0"];

            var address = x["address"]["0"];
            var city = address["city"]["0"];
            var latitude = address["latitude"]["0"];
            var longitude = address["longitude"]["0"];
            var state = address["state"]["0"];
            var street = address["street"]["0"];
            var zipcode = address["zipcode"]["0"];

            var zestimate = x["zestimate"]["0"]["amount"]["0"]["_"];
            var zpid = x["zpid"]["0"];

            console.log("Zillow API Call Successful");

            var owners = Owners.find().fetch();

            // This is where we are going to set all the new characteristics of the property we just called, adding to Properties collection
            Properties.insert({
              owners: owners,
              street: street,
              city: city,
              lat: latitude,
              long: longitude,
              state: state,
              zip: zipcode,
              zestimate: zestimate,
              zpid: zpid
            });

            Meteor.call("getPropertyImages", Number($("#zpid").val()), function(err, result) {
              if (err) { console.log("Error with Zillow Image API Call") }

              if (result["UpdatedPropertyDetails:updatedPropertyDetails"]["message"]["0"]["code"]["0"] === "0") { // This means that the code is "success"
                var y = result["UpdatedPropertyDetails:updatedPropertyDetails"]["response"]["0"]["editedFacts"]["0"];

                if (y["bathrooms"]["0"]) { var bath = y["bathrooms"]["0"]; } else { var bath = "unknown" }
                if (y["bedrooms"]["0"]) { var bed = y["bedrooms"]["0"]; } else { var bed = "unknown" }
                if (y["finishedSqFt"]["0"]) { var sqft = y["finishedSqFt"]["0"]; } else { var sqft = "unknown" }
                if (y["lotSizeSqFt"]["0"]) { var lotSizeSqFt = y["lotSizeSqFt"]["0"]; } else { var lotSizeSqFt = "unknown" }
                if (y["rooms"]["0"]) { var rooms = y["rooms"]["0"]; } else { var rooms = "unknown" }
                if (y["yearBuilt"]["0"]) { var yearBuilt = y["yearBuilt"]["0"]; } else { var yearBuilt = "unknown" }

                var imagesArray = result["UpdatedPropertyDetails:updatedPropertyDetails"]["images"]["0"]["image"]["0"]["url"];
              } else {
                console.log(result["UpdatedPropertyDetails:updatedPropertyDetails"]["message"]["0"]["text"]["0"])
              }

            })

            // Clearing the form and the current owners
            Owners.remove({});
            $("#zpid").val("");

            // This is where we re-render the D3 map to reflect the new property
            $("#property-map").remove();
            $("#append-map-here").append("<div id='property-map'></div>")
            createPropertiesMap();

            toast('Successfully Added To Database!', 3000);

          })
        } else {
          toast("Please add owners.", 3000);
        }
      } else {
        toast("ZPID can only contain numbers.", 4000)
      }
    } else {
      toast("Please enter ZPID.", 3000);
    }
  }
});

Template.usersDropdownList.helpers({
  users: function() {
    return Directory.find();
  }
});

Template.newPropertyForm.helpers({
  owners: function() {
    return Owners.find();
  }
});

Template.newPropertyForm.events({
  'click .remove-owner-button': function(e,t) {
    Owners.remove(this);
  },
  'click .add-owner-button': function(e,t) {
    var temp = $(".add-owners-dropdown").val();
    var name = temp.match(/(^.+)(\s:\s)(\w+)/)[1];
    var id = temp.match(/(^.+)(\s:\s)(\w+)/)[3];
    Owners.insert({name: name, _id: id}, function(err) {
      if(err) { alert("Already selected as owner") }
    });
    $(".add-owners-dropdown").val("");
  }
});


function toast(message, displayLength, className) {
  className = className || "";
  if ($('#toast-container').length == 0) {
    // create notification container
    var container = $('<div></div>')
    .attr('id', 'toast-container');
    $('body').append(container);
  }

  // Select and append toast
  var container = $('#toast-container')
  var newToast = createToast(message);
  container.append(newToast);

  newToast.css({"top" : parseFloat(newToast.css("top"))+35+"px",
  "opacity": 0});
  newToast.velocity({"top" : "0px",
  opacity: 1},
  {duration: 300,
  easing: 'easeOutCubic',
  queue: false});
  //        newToast.delay(displayLength)
  newToast.velocity({"opacity": 0, marginTop: '-40px'}, { duration: 375,
    easing: 'easeOutExpo',
    queue: false, delay: displayLength,
    complete: function(){$(this).remove()}
  });

  //        .slideUp(250, function(){
  //            $(this).remove();
  //        });


  function createToast(message) {
    var toast = $('<div></div>');
    toast.addClass('toast');
    toast.addClass(className);
    var text = $('<span></span>');
    text.text(message);
    toast.append(text);
    return toast;
  }
}


// The new "add property" process is going to go like this:
// Dropdown to select "add owners"

// { owners: ["321321321321", "#2132324324", "13213211"]}
// Admin panel will have
