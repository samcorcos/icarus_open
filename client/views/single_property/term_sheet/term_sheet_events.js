Template.singlePropertyTermSheet.events({

  'click #input-tab': function(e,t) {
    $(".inputs").toggleClass("add-flex-div-show");
    $(".outputs").removeClass("add-flex-div-show");
    $(".returns").removeClass("add-flex-div-show");
    $(".additional").removeClass("add-flex-div-show");
  },
  'click #output-tab': function(e,t) {
    $(".outputs").toggleClass("add-flex-div-show");
    $(".inputs").removeClass("add-flex-div-show");
    $(".returns").removeClass("add-flex-div-show");
    $(".additional").removeClass("add-flex-div-show");
  },
  'click #returns-tab': function(e,t) {
    $(".returns").toggleClass("add-flex-div-show");
    $(".outputs").removeClass("add-flex-div-show");
    $(".inputs").removeClass("add-flex-div-show");
    $(".additional").removeClass("add-flex-div-show");
  },
  'click #additional-tab': function(e,t) {
    $(".additional").toggleClass("add-flex-div-show");
    $(".outputs").removeClass("add-flex-div-show");
    $(".returns").removeClass("add-flex-div-show");
    $(".inputs").removeClass("add-flex-div-show");

  }


});

Template.termSheetInputs.events({

  'click #term-sheet-submit-inputs': function(e,t) {
    e.preventDefault();
    Session.set("editingTotalPrice", false);
    TermSheet.update({ _id: this._id }, { $set: { totalPrice: $("#total-price").val() }});

    Session.set("editingDownPayment", false);
    TermSheet.update({ _id: this._id }, { $set: { downPayment: $("#down-payment").val() }});

    Session.set("editingClosingRepair", false);
    TermSheet.update({ _id: this._id }, { $set: { closingRepair: $("#closing-repair").val() }});

    Session.set("editingAPR", false);
    TermSheet.update({ _id: this._id }, { $set: { apr: $("#apr").val() }});

    Session.set("editingTaxes", false);
    TermSheet.update({ _id: this._id }, { $set: { taxes: $("#taxes").val() }});

    Session.set("editingHOA", false);
    TermSheet.update({ _id: this._id }, { $set: { hoa: $("#hoa").val() }});

    Session.set("editingInsurance", false);
    TermSheet.update({ _id: this._id }, { $set: { insurance: $("#insurance").val() }});

    Session.set("editingRentPrice", false);
    TermSheet.update({ _id: this._id }, { $set: { rentPrice: $("#rent-price").val() }});

    Session.set("editingSquareFootage", false);
    TermSheet.update({ _id: this._id }, { $set: { squareFootage: $("#square-footage").val() }});

    Session.set("editingEquitySold", false);
    TermSheet.update({ _id: this._id }, { $set: { equitySold: $("#equity-sold").val() }});

    Session.set("editingPercentCapitalNeeded", false);
    TermSheet.update({ _id: this._id }, { $set: { percentCapitalNeeded: $("#percent-capital-needed").val() }});

  },
  'keypress #term-sheet-submit-inputs': function(e,t) {
    e.preventDefault();
    if (e.keyCode === 13) {
      Session.set("editingTotalPrice", false);
      TermSheet.update({ _id: this._id }, { $set: { totalPrice: $("#total-price").val() }});

      Session.set("editingDownPayment", false);
      TermSheet.update({ _id: this._id }, { $set: { downPayment: $("#down-payment").val() }});

      Session.set("editingClosingRepair", false);
      TermSheet.update({ _id: this._id }, { $set: { closingRepair: $("#closing-repair").val() }});

      Session.set("editingAPR", false);
      TermSheet.update({ _id: this._id }, { $set: { apr: $("#apr").val() }});

      Session.set("editingTaxes", false);
      TermSheet.update({ _id: this._id }, { $set: { taxes: $("#taxes").val() }});

      Session.set("editingHOA", false);
      TermSheet.update({ _id: this._id }, { $set: { hoa: $("#hoa").val() }});

      Session.set("editingInsurance", false);
      TermSheet.update({ _id: this._id }, { $set: { insurance: $("#insurance").val() }});

      Session.set("editingRentPrice", false);
      TermSheet.update({ _id: this._id }, { $set: { rentPrice: $("#rent-price").val() }});

      Session.set("editingSquareFootage", false);
      TermSheet.update({ _id: this._id }, { $set: { squareFootage: $("#square-footage").val() }});

      Session.set("editingEquitySold", false);
      TermSheet.update({ _id: this._id }, { $set: { equitySold: $("#equity-sold").val() }});

      Session.set("editingPercentCapitalNeeded", false);
      TermSheet.update({ _id: this._id }, { $set: { percentCapitalNeeded: $("#percent-capital-needed").val() }});
    }
  },


  'click #total-price-cell': function(e,t) { Session.set("editingTotalPrice", true); },
  'click #down-payment-cell': function(e,t) { Session.set("editingDownPayment", true); },
  'click #closing-repair-cell': function(e,t) { Session.set("editingClosingRepair", true); },
  'click #apr-cell': function(e,t) { Session.set("editingAPR", true); },
  'click #taxes-cell': function(e,t) { Session.set("editingTaxes", true); },
  'click #hoa-cell': function(e,t) { Session.set("editingHOA", true); },
  'click #insurance-cell': function(e,t) { Session.set("editingInsurance", true); },
  'click #rent-price-cell': function(e,t) { Session.set("editingRentPrice", true); },
  'click #square-footage-cell': function(e,t) { Session.set("editingSquareFootage", true); },
  'click #equity-sold-cell': function(e,t) { Session.set("editingEquitySold", true); },
  'click #percent-capital-needed-cell': function(e,t) { Session.set("editingPercentCapitalNeeded", true); },

  'keypress input#total-price': function(e,t) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      Session.set("editingTotalPrice", false);
      TermSheet.update({ _id: this._id }, { $set: { totalPrice: e.currentTarget.value }});
    }
  },
  'keypress input#down-payment': function(e,t) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      Session.set("editingDownPayment", false);
      TermSheet.update({ _id: this._id }, { $set: { downPayment: e.currentTarget.value }});
    }
  },
  'keypress input#closing-repair': function(e,t) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      Session.set("editingClosingRepair", false);
      TermSheet.update({ _id: this._id }, { $set: { closingRepair: e.currentTarget.value }});
    }
  },
  'keypress input#apr': function(e,t) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      Session.set("editingAPR", false);
      TermSheet.update({ _id: this._id }, { $set: { apr: e.currentTarget.value }});
    }
  },
  'keypress input#taxes': function(e,t) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      Session.set("editingTaxes", false);
      TermSheet.update({ _id: this._id }, { $set: { taxes: e.currentTarget.value }});
    }
  },
  'keypress input#hoa': function(e,t) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      Session.set("editingHOA", false);
      TermSheet.update({ _id: this._id }, { $set: { hoa: e.currentTarget.value }});
    }
  },
  'keypress input#insurance': function(e,t) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      Session.set("editingInsurance", false);
      TermSheet.update({ _id: this._id }, { $set: { insurance: e.currentTarget.value }});
    }
  },
  'keypress input#rent-price': function(e,t) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      Session.set("editingRentPrice", false);
      TermSheet.update({ _id: this._id }, { $set: { rentPrice: e.currentTarget.value }});
    }
  },
  'keypress input#square-footage': function(e,t) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      Session.set("editingSquareFootage", false);
      TermSheet.update({ _id: this._id }, { $set: { squareFootage: e.currentTarget.value }});
    }
  },
  'keypress input#equity-sold': function(e,t) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      Session.set("editingEquitySold", false);
      TermSheet.update({ _id: this._id }, { $set: { equitySold: e.currentTarget.value }});
    }
  },
  'keypress input#percent-capital-needed': function(e,t) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      Session.set("editingPercentCapitalNeeded", false);
      TermSheet.update({ _id: this._id }, { $set: { percentCapitalNeeded: e.currentTarget.value }});
    }
  }


});
