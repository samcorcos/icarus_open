Template.properties.rendered = function() {
  createPropertyMap();
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
    $(".add-property-hidden").removeClass("add-property-hidden").transition("all 0.5s ease")
  }
});

Template.newPropertyForm.events({
  'click #submit-new-property': function(e,t) {
    
  }
});
