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
  editingSquareFootage: function() { return Session.get("editingSquareFootage"); }

});
