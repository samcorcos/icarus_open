Meteor.subscribe("termSheet");

Template.singlePropertyTermSheet.rendered = function() {

  var currentPropertyId = window.location.href.match(/(\/properties\/)(\w+)/)[2];
  if (TermSheet.find({propertyId: currentPropertyId}).fetch()[0] !== undefined ) {
    Session.set("termSheetActive", false);
  } else { Session.set("termSheetActive", true); }

  // Session.set("termSheetActive", function() {
  //   return true;
  //   // var currentPropertyId = window.location.href.match(/(\/properties\/)(\w+)/)[2];
  //   // if (TermSheet.find({propertyId: currentPropertyId}).fetch() == []) {
  //   //   return true;
  //   // } else { return false; }
  // })

};

Template.singlePropertyTermSheet.helpers({
  totalPrice: function() {
    // if (TermSheet.find().fetch()[0].totalPrice != undefined) {
    //   return TermSheet.find().fetch()[0].totalPrice.formatMoney(0);
    // } else { var temp = 0; return temp.formatMoney(); }
    // console.log(TermSheet.find().fetch()[0].totalPrice)
    return 0;
  },
  termSheetActive: function() {
    return Session.get("termSheetActive");
  }
});

Template.singlePropertyTermSheet.events({
  'click .term-sheet-item': function(e,t) {
    alert(e.currentTarget.value);
  },
  'click #add-term-sheet-button': function(e,t) {
    $(".flex-white-div-term-sheet").toggleClass("add-flex-div-show")
    $(".red-break-term-sheet").toggleClass("add-red-break-show")
  }
});









// Total Price
// Down Payment Percentage
// Down Payment Amt
// Closing Costs + Repairs Estimate
// COST OF ADDITIONAL FINANICING
// TOTAL INVESTMENT
// APR
// Monthly Mortgage Expense
// Taxes
// Monthly Tax Average
// HOA for condo
// Insurance Approximation
// Operating Expenses
// RESERVE 5%
// Monthly Cost of Ownership
// Rent Price Full
// Square Footage
// CASHFLOW RENTED
// CASHFLOW OCCUPIED
// CASHFLOW UNOCCUPIED
// AFTER TAX WITH RENTERS
// AFTER TAX UN-OCCUPIED
// FREE CASH FLOW (w/o prp tax)
