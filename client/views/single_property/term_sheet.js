Meteor.subscribe("termSheet");

Template.singlePropertyTermSheet.rendered = function() {

};

Template.singlePropertyTermSheet.helpers({
  totalPrice: function() {
    console.log(TermSheet.find().fetch())
    return TermSheet.find().fetch()[0].totalPrice;
  }
});

Template.singlePropertyTermSheet.events({
  'click .term-sheet-item': function(e,t) {
    alert(e.currentTarget.value);
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
