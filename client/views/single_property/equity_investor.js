Template.equityInvestorModal.helpers({


  totalPrice: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var totalInvestment = (Number(temp[0].totalPrice) + Number(temp[0].closingRepair));

    var equitySold = Number(temp[0].equitySold);

    return (totalInvestment * equitySold / 100).formatMoney(0);
  },
  closingRepair: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var equitySold = Number(temp[0].equitySold);
    var closingRepair = Number(temp[0].closingRepair) * equitySold / 100;
    return closingRepair.formatMoney(0);
  },
  taxes: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var taxes = Number(temp[0].taxes);
    return taxes.formatMoney(0);
  },
  insurance: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var insurance = Number(temp[0].insurance);
    return insurance.formatMoney(0);
  },
  downPaymentPercentage: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var downPaymentPercentage = Number(temp[0].downPayment);
    var percentCapitalNeeded = Number(temp[0].percentCapitalNeeded);

    return (downPaymentPercentage * percentCapitalNeeded / 100).formatMoney(2);
  },
  totalInvestment: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var equitySold = Number(temp[0].equitySold);
    var downPaymentAmount = (Number(temp[0].totalPrice) * Number(temp[0].downPayment) / 100 * equitySold / 100);
    var equitySold = Number(temp[0].equitySold);
    var closingRepair = Number(temp[0].closingRepair) * equitySold / 100;

    var totalInvestment = closingRepair + downPaymentAmount;

    return totalInvestment.formatMoney(0);
  },
  hoa: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var hoa = Number(temp[0].hoa);
    return hoa.formatMoney(0);
  },
  downPaymentAmount: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var equitySold = Number(temp[0].equitySold);
    var downPaymentAmount = (Number(temp[0].totalPrice) * Number(temp[0].downPayment) / 100 * equitySold / 100);
    var percentCapitalNeeded = Number(temp[0].percentCapitalNeeded / 100);



    return (downPaymentAmount * percentCapitalNeeded).formatMoney(0);
  },
  rentPrice: function() {
    return ;
  },
  cashflowRented: function() {
    return ;
  },
  cashflowOccupied: function() {
    return ;
  },
  cashflowUnoccupied: function() {
    return ;
  },
  afterTaxOccupied: function() {
    return ;
  },
  afterTaxUnoccupied: function() {
    return ;
  },
  freeCashFlow: function() {
    return ;
  },
  monthlyMortgageExpense: function() {
    return ;
  },
  monthlyTaxAverage: function() {
    return ;
  },
  operatingExpenses: function() {
    return ;
  },
  reserve: function() {
    return ;
  },
  costOfOwnership: function() {
    return ;
  },



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
