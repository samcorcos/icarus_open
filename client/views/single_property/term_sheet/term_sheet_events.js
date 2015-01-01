Template.termSheetInputs.events({

  // 'click #term-sheet-submit-inputs': function(e,t) {
  //   e.preventDefault();
  //   Session.set("editingTotalPrice", false);
  //   TermSheet.update({ _id: this._id }, { $set: { totalPrice: $("#total-price").val() }});
  //
  //   Session.set("editingDownPayment", false);
  //   TermSheet.update({ _id: this._id }, { $set: { downPayment: $("#down-payment").val() }});
  //
  //   Session.set("editingClosingRepair", false);
  //   TermSheet.update({ _id: this._id }, { $set: { closingRepair: $("#closing-repair").val() }});
  //
  //   Session.set("editingAPR", false);
  //   TermSheet.update({ _id: this._id }, { $set: { apr: $("#apr").val() }});
  //
  //   Session.set("editingTaxes", false);
  //   TermSheet.update({ _id: this._id }, { $set: { taxes: $("#taxes").val() }});
  //
  //   Session.set("editingHOA", false);
  //   TermSheet.update({ _id: this._id }, { $set: { hoa: $("#hoa").val() }});
  //
  //   Session.set("editingInsurance", false);
  //   TermSheet.update({ _id: this._id }, { $set: { insurance: $("#insurance").val() }});
  //
  //   Session.set("editingRentPrice", false);
  //   TermSheet.update({ _id: this._id }, { $set: { rentPrice: $("#rent-price").val() }});
  //
  //   Session.set("editingSquareFootage", false);
  //   TermSheet.update({ _id: this._id }, { $set: { squareFootage: $("#square-footage").val() }});
  //
  //   Session.set("editingEquitySold", false);
  //   TermSheet.update({ _id: this._id }, { $set: { equitySold: $("#equity-sold").val() }});
  //
  //   Session.set("editingPercentCapitalNeeded", false);
  //   TermSheet.update({ _id: this._id }, { $set: { percentCapitalNeeded: $("#percent-capital-needed").val() }});
  //
  // },
  // 'keypress #term-sheet-submit-inputs': function(e,t) {
  //   e.preventDefault();
  //   if (e.keyCode === 13) {
  //     Session.set("editingTotalPrice", false);
  //     TermSheet.update({ _id: this._id }, { $set: { totalPrice: $("#total-price").val() }});
  //
  //     Session.set("editingDownPayment", false);
  //     TermSheet.update({ _id: this._id }, { $set: { downPayment: $("#down-payment").val() }});
  //
  //     Session.set("editingClosingRepair", false);
  //     TermSheet.update({ _id: this._id }, { $set: { closingRepair: $("#closing-repair").val() }});
  //
  //     Session.set("editingAPR", false);
  //     TermSheet.update({ _id: this._id }, { $set: { apr: $("#apr").val() }});
  //
  //     Session.set("editingTaxes", false);
  //     TermSheet.update({ _id: this._id }, { $set: { taxes: $("#taxes").val() }});
  //
  //     Session.set("editingHOA", false);
  //     TermSheet.update({ _id: this._id }, { $set: { hoa: $("#hoa").val() }});
  //
  //     Session.set("editingInsurance", false);
  //     TermSheet.update({ _id: this._id }, { $set: { insurance: $("#insurance").val() }});
  //
  //     Session.set("editingRentPrice", false);
  //     TermSheet.update({ _id: this._id }, { $set: { rentPrice: $("#rent-price").val() }});
  //
  //     Session.set("editingSquareFootage", false);
  //     TermSheet.update({ _id: this._id }, { $set: { squareFootage: $("#square-footage").val() }});
  //
  //     Session.set("editingEquitySold", false);
  //     TermSheet.update({ _id: this._id }, { $set: { equitySold: $("#equity-sold").val() }});
  //
  //     Session.set("editingPercentCapitalNeeded", false);
  //     TermSheet.update({ _id: this._id }, { $set: { percentCapitalNeeded: $("#percent-capital-needed").val() }});
  //   }
  // },


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
