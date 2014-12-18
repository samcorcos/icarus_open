Meteor.subscribe("termSheet");

Template.singlePropertyTermSheet.rendered = function() {

  var currentPropertyId = window.location.href.match(/(\/properties\/)(\w+)/)[2];
  if (TermSheet.find({property: currentPropertyId}).fetch()[0] !== undefined ) {
    Session.set("termSheetActive", false);
  } else { Session.set("termSheetActive", true); }

  if (TermSheet.find({property: currentPropertyId}).fetch()[0] !== undefined ) {
    $(".flex-white-div-term-sheet").toggleClass("add-flex-div-show");
    $(".red-break-term-sheet").toggleClass("add-red-break-show");
  }

};

// var currentPropertyId = window.location.href.match(/(\/properties\/)(\w+)/)[2];











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
