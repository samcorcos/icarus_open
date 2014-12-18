Template.singlePropertyTermSheet.helpers({
  termSheet: function() {
    return TermSheet.find({ property: window.location.href.match(/(\/properties\/)(\w+)/)[2] });
  },
  termSheetActive: function() {
    return Session.get("termSheetActive");
  },

  editingTotalPrice: function() { return Session.get("editingTotalPrice"); },
  editingDownPayment: function() { return Session.get("editingDownPayment"); },
  editingClosingRepair: function() { return Session.get("editingClosingRepair"); },
  editingAPR: function() { return Session.get("editingAPR"); },
  editingTaxes: function() { return Session.get("editingTaxes"); },
  editingHOA: function() { return Session.get("editingHOA"); },
  editingInsurance: function() { return Session.get("editingInsurance"); },
  editingRentPrice: function() { return Session.get("editingRentPrice"); },
  editingSquareFootage: function() { return Session.get("editingSquareFootage"); },


  downPaymentAmount: function() {
    var temp = TermSheet.find({ property: window.location.href.match(/(\/properties\/)(\w+)/)[2] }).fetch();
    return temp[0].totalPrice * temp[0].downPayment / 100;
  },
  additionalFinancing: function() {
    return 0;
  },
  totalInvestment: function() {
    var temp = TermSheet.find({ property: window.location.href.match(/(\/properties\/)(\w+)/)[2] }).fetch();
    return Number(temp[0].totalPrice) + Number(temp[0].closingRepair);
  },
  monthlyMortgageExpense: function() {
    return 0;
  },
  monthlyTaxAverage: function() {
    var temp = TermSheet.find({ property: window.location.href.match(/(\/properties\/)(\w+)/)[2] }).fetch();
    return temp[0].taxes / 12;
  }

});
