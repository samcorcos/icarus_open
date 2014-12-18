Template.singlePropertyTermSheet.helpers({
  termSheet: function() {
    return TermSheet.find({ property: Session.get("currentId")._id });
  },
  termSheetActive: function() {
    return Session.get("termSheetActive");
  }

});

Template.termSheetInputs.helpers({
  termSheet: function() {
    return TermSheet.find({ property: Session.get("currentId")._id });
  },

  editingTotalPrice: function() { return (Session.get("editingTotalPrice")); },
  editingDownPayment: function() { return Session.get("editingDownPayment"); },
  editingClosingRepair: function() { return Session.get("editingClosingRepair"); },
  editingAPR: function() { return Session.get("editingAPR"); },
  editingTaxes: function() { return Session.get("editingTaxes"); },
  editingHOA: function() { return Session.get("editingHOA"); },
  editingInsurance: function() { return Session.get("editingInsurance"); },
  editingRentPrice: function() { return Session.get("editingRentPrice"); },
  editingSquareFootage: function() { return Session.get("editingSquareFootage"); }

});

Template.termSheetOutputs.helpers({
  termSheet: function() {
    return TermSheet.find({ property: Session.get("currentId")._id });
  },


  downPaymentAmount: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    return (temp[0].totalPrice * temp[0].downPayment / 100).formatMoney(0);
  },
  additionalFinancing: function() {
    return 0;
  },
  totalInvestment: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    return (Number(temp[0].totalPrice) + Number(temp[0].closingRepair)).formatMoney(0);
  },
  monthlyMortgageExpense: function() {
    return 0;
  },
  monthlyTaxAverage: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    return (temp[0].taxes / 12).formatMoney(0);
  }


});
