Template.singlePropertyTermSheet.events({

  'click #input-tab': function(e,t) {
    $(".flex-white-div-inputs").toggleClass("add-flex-div-show");
    $(".flex-white-div-outputs").removeClass("add-flex-div-show");
    $(".flex-white-div-returns").removeClass("add-flex-div-show");
    $(".flex-white-div-additional").removeClass("add-flex-div-show");
  },
  'click #output-tab': function(e,t) {
    $(".flex-white-div-outputs").toggleClass("add-flex-div-show");
    $(".flex-white-div-inputs").removeClass("add-flex-div-show");
    $(".flex-white-div-returns").removeClass("add-flex-div-show");
    $(".flex-white-div-additional").removeClass("add-flex-div-show");
  },
  'click #returns-tab': function(e,t) {
    $(".flex-white-div-returns").toggleClass("add-flex-div-show");
    $(".flex-white-div-outputs").removeClass("add-flex-div-show");
    $(".flex-white-div-inputs").removeClass("add-flex-div-show");
    $(".flex-white-div-additional").removeClass("add-flex-div-show");
  },
  'click #additional-tab': function(e,t) {
    $(".flex-white-div-additional").toggleClass("add-flex-div-show");
    $(".flex-white-div-outputs").removeClass("add-flex-div-show");
    $(".flex-white-div-returns").removeClass("add-flex-div-show");
    $(".flex-white-div-inputs").removeClass("add-flex-div-show");

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
  'click #equity-sold-div': function(e,t) { Session.set("editingEquitySold", true); },
  'click #percent-capital-needed-div': function(e,t) { Session.set("editingPercentCapitalNeeded", true); },

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
  },
  'keypress input#equity-sold': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingEquitySold", false);
      TermSheet.update({ _id: this._id }, { $set: { equitySold: e.currentTarget.value }});
    }
  },
  'keypress input#percent-capital-needed': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingPercentCapitalNeeded", false);
      TermSheet.update({ _id: this._id }, { $set: { percentCapitalNeeded: e.currentTarget.value }});
    }
  }


});
