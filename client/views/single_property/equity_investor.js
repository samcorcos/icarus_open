Template.equityInvestorModal.helpers({
  totalPrice: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var totalInvestment = (Number(temp[0].totalPrice) + Number(temp[0].closingRepair));

    var equitySold = Number(temp[0].equitySold);

    return (totalInvestment * equitySold / 100).formatMoney(0);
  },
  downPaymentPercentage: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var downPaymentPercentage = Number(temp[0].downPayment);
    var percentCapitalNeeded = Number(temp[0].percentCapitalNeeded);

    return (downPaymentPercentage * percentCapitalNeeded / 100).formatMoney(2);
  },
  downPaymentAmount: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var downPaymentAmount = (Number(temp[0].totalPrice) * Number(temp[0].downPayment) / 100);
    var percentCapitalNeeded = Number(temp[0].percentCapitalNeeded / 100);

    return (downPaymentAmount * percentCapitalNeeded).formatMoney(0);
  }
});




///////Consider a fade and a tab between "Analysis" and "Returns"

// Total Price
// Down Payment Percentage
// Down Payment Amt
// Closing Costs + Repairs Estimate
// TOTAL INVESTMENT
// Monthly Mortgage Expense
// Taxes
// Monthly Tax Average
// HOA for condo
// Insurance Approximation
// Operating Expenses
// RESERVE 5%
// Monthly Cost of Ownership
// Rent Price Full
// CASHFLOW RENTED
// CASHFLOW OCCUPIED
// CASHFLOW UNOCCUPIED
// AFTER TAX WITH RENTERS
// AFTER TAX UN-OCCUPIED
// FREE CASH FLOW (w/o prp tax)

// Annual Revenue
// Annual Cost
// Annual Profit
// Annual Profit After Tax
// Annual ROI Before Tax
// Annual ROI
// OPERATING EXPENSE
// NET OPERATING INCOME
