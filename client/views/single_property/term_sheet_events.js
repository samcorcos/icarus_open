Template.singlePropertyTermSheet.events({
  'click #add-term-sheet-button': function(e,t) {
    $(".flex-white-div-term-sheet").toggleClass("add-flex-div-show");
    $(".red-break-term-sheet").toggleClass("add-red-break-show");
    TermSheet.insert({ "owner": Meteor.userId(), "property": t.data._id, "totalPrice": 0, "downPayment": 0, "closingRepair": 0, "apr": 0, "taxes": 0, "hoa": 0, "insurance": 0, "rentPrice": 0, "squareFootage": 0 });
    $(".flex-white-div-term-sheet-button").toggleClass("add-flex-div-hide");
    $(".red-break-term-sheet-button").toggleClass("add-red-break-hide");
  }


});

Template.termSheetInputs.events({

  'click #total-price-div': function(e,t) { Session.set("editingTotalPrice", true); },
  'click #down-payment-div': function(e,t) { Session.set("editingDownPayment", true); },
  'click #closing-repair-div': function(e,t) { Session.set("editingClosingRepair", true); },
  'click #apr-div': function(e,t) { Session.set("editingAPR", true); },
  'click #taxes-div': function(e,t) { Session.set("editingTaxes", true); },
  'click #hoa-div': function(e,t) { Session.set("editingHOA", true); },
  'click #insurance-div': function(e,t) { Session.set("editingInsurance", true); },
  'click #rent-price-div': function(e,t) { Session.set("editingRentPrice", true); },
  'click #square-footage-div': function(e,t) { Session.set("editingSquareFootage", true); },

  'keypress input#total-price': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingTotalPrice", false);
      TermSheet.update({ _id: this._id }, { $set: { totalPrice: e.currentTarget.value }});
    }
  },
  'keypress input#down-payment': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingDownPayment", false);
      TermSheet.update({ _id: this._id }, { $set: { downPayment: e.currentTarget.value }});
    }
  },
  'keypress input#closing-repair': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingClosingRepair", false);
      TermSheet.update({ _id: this._id }, { $set: { closingRepair: e.currentTarget.value }});
    }
  },
  'keypress input#apr': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingAPR", false);
      TermSheet.update({ _id: this._id }, { $set: { apr: e.currentTarget.value }});
    }
  },
  'keypress input#taxes': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingTaxes", false);
      TermSheet.update({ _id: this._id }, { $set: { taxes: e.currentTarget.value }});
    }
  },
  'keypress input#hoa': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingHOA", false);
      TermSheet.update({ _id: this._id }, { $set: { hoa: e.currentTarget.value }});
    }
  },
  'keypress input#insurance': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingInsurance", false);
      TermSheet.update({ _id: this._id }, { $set: { insurance: e.currentTarget.value }});
    }
  },
  'keypress input#rent-price': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingRentPrice", false);
      TermSheet.update({ _id: this._id }, { $set: { rentPrice: e.currentTarget.value }});
    }
  },
  'keypress input#square-footage': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingSquareFootage", false);
      TermSheet.update({ _id: this._id }, { $set: { squareFootage: e.currentTarget.value }});
    }
  }


});
