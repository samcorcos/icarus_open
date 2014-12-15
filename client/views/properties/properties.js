NewProperty = new Mongo.Collection(null);

Template.properties.rendered = function() {
  createPropertiesMap();
  $('.modal-trigger').leanModal();
  $('.modal-close').leanModal();
  // $('.datepicker').pickadate();
};

Meteor.subscribe("properties");


Template.propertyPanel2.helpers({
  properties: function() {
    return Properties.find();
  },
  purchasePrice: function() {
    return this.price.formatMoney(0);
  }
});

Template.properties.events({
  'click #add-property-button': function(e,t) {
    $(".flex-white-div-property").toggleClass("add-flex-div-show")
    $(".red-break-property").toggleClass("add-red-break-show")
  }
});

Template.newPropertyForm.events({
  'click #submit-new-property': function(e,t) {
    //if it's only numbers, else, throw error.
    if (Number($("#purchase-price").val())) {
      Properties.insert({ owner: $("#user-id").val(), address: $("#property-address").val(), price: Number($("#purchase-price").val()) });
      $("#property-address").val("");
      $("#purchase-price").val("");
    }
    else {
      alert("Please enter only numbers for the purchase price.")
    }
  }
});

Template.newPropertyForm.helpers({
  newPurcahsePrice: function() {
    return NewProperty.price;
  }
});


// "change input#supplied-armor": function (events, template) {
//   Battles.update(
//     this._id,
//   { $set: { suppliedArmor: event.target.value } }
// );
// },
