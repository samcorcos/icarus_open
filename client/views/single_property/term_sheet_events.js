Template.singlePropertyTermSheet.events({
  'click #add-term-sheet-button': function(e,t) {
    $(".flex-white-div-term-sheet").toggleClass("add-flex-div-show");
    $(".red-break-term-sheet").toggleClass("add-red-break-show");
    TermSheet.insert({ "owner": Meteor.userId(), "property": window.location.href.match(/(\/properties\/)(\w+)/)[2], "totalPrice": 0, "downPayment": 0, "closingRepair": 0, "apr": 0, "taxes": 0, "hoa": 0, "insurance": 0, "rentPrice": 0, "squareFootage": 0 });
    $(".flex-white-div-term-sheet-button").toggleClass("add-flex-div-hide");
    $(".red-break-term-sheet-button").toggleClass("add-red-break-hide");
  },


  'click #total-price-div': function(e,t) { Session.set("editingTotalPrice", true); },
  'click #down-payment-div': function(e,t) { Session.set("editingDownPayment", true); },
  'click #closing-repair-div': function(e,t) { Session.set("editingClosingRepair", true); },
  'click #apr-div': function(e,t) { Session.set("editingAPR", true); },
  'click #taxes-div': function(e,t) { Session.set("editingTaxes", true); },
  'click #hoa-div': function(e,t) { Session.set("editingHOA", true); },
  'click #insurance-div': function(e,t) { Session.set("editingInsurance", true); },
  'click #rent-price-div': function(e,t) { Session.set("editingRentPrice", true); },
  'click #square-footage-div': function(e,t) { Session.set("editingSquareFootage", true); },

  'keypress input#rent-price': function(e,t) {
    if (e.keyCode === 13) {
      console.log(this._id);
      Session.set("editingRentPrice", false);
      TermSheet.update({ _id: this._id }, { $set: { rentPrice: e.currentTarget.value }});
      // People.update({_id: person._id}, {$set: {name: e.currentTarget.value}});
      // Session.set("edit-" + t.data._id, false);
    }
  },

});
