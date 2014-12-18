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
    var downPaymentAmount = (Number(temp[0].totalPrice) * Number(temp[0].downPayment) / 100);
    return downPaymentAmount.formatMoney(0);
  },
  additionalFinancing: function() {
    return 0;                                   // Has not been filled in
  },
  totalInvestment: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var totalInvestment = (Number(temp[0].totalPrice) + Number(temp[0].closingRepair))
    return totalInvestment.formatMoney(0);
  },
  monthlyMortgageExpense: function() {
    return 0;                                 // Has not been filled in
  },
  monthlyTaxAverage: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var monthlyTaxAverage = (temp[0].taxes / 12);
    return monthlyTaxAverage.formatMoney(0);
  },
  operatingExpenses: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    return operatingExpenses.formatMoney(0);
  },
  reserve: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var reserve = (temp[0].rentPrice * 0.05);
    return reserve.formatMoney(0);
  },
  monthlyCostOfOwnership: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var monthlyCostOfOwnership = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05)); // Does not include monthly mortgage expense, or cost of additional financing
    return monthlyCostOfOwnership.formatMoney(0);
  },
  cashflowRented: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var cashflowRented = (Number(temp[0].rentPrice) - (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05))); // Does not include monthly mortgage expense, or cost of additional financing
    return cashflowRented.formatMoney(0);
  },
  cashflowOccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var cashflowOccupied = (Number(temp[0].rentPrice) - (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05))); // Does not include monthly mortgage expense, or cost of additional financing
    return cashflowOccupied.formatMoney(0);
  },
  cashflowUnoccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var cashflowUnoccupied = (-1 * (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05))); // Does not include monthly mortgage expense, or cost of additional financing
    return cashflowUnoccupied.formatMoney(0);
  }


});
