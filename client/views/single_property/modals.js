function getTermSheet(id) {
  return TermSheet.find({ property: id }).fetch();
}
function getTotalPrice(id) {
  return Number(getTermSheet(id)[0].totalPrice);
}
function getClosingRepair(id) {
  return Number(getTermSheet(id)[0].closingRepair);
}
function getTotalInvestment(id) {
  return (Number(getTermSheet(id)[0].totalPrice) + Number(getTermSheet(id)[0].closingRepair));
}
function getEquitySold(id) {
  return Number(getTermSheet(id)[0].equitySold);
}
function getTaxes(id) {
  return Number(getTermSheet(id)[0].taxes);
}
function getInsurance(id) {
  return Number(getTermSheet(id)[0].insurance);
}
function getDownPayment(id) {
  return Number(getTermSheet(id)[0].downPayment);
}
function getDownPaymentAmount(id) {
  return Number(getTermSheet(id)[0].downPayment) / 100 * getTotalPrice(id);
}
function getPercentCapitalNeeded(id) {
  return Number(getTermSheet(id)[0].percentCapitalNeeded);
}
function getHOA(id) {
  return Number(getTermSheet(id)[0].hoa);
}
function getRentPrice(id) {
  return Number(getTermSheet(id)[0].rentPrice);
}
function getOperatingExpenses(id) {
  return (Number(getTermSheet(id)[0].taxes)
    + Number(getTermSheet(id)[0].hoa)
    + Number(getTermSheet(id)[0].insurance))
    + (Number(getTermSheet(id)[0]) * 0.05)
}

Template.equityInvestorModal.helpers({


  totalPrice: function() {
    var id = Session.get("currentId");
    return (getTotalInvestment(id) * getEquitySold(id) / 100).formatMoney(0);
  },
  closingRepair: function() {
    var id = Session.get("currentId");
    return (getClosingRepair(id) * getEquitySold(id) / 100).formatMoney(0);
  },
  taxes: function() {
    return getTaxes(Session.get("currentId")).formatMoney(0);
  },
  insurance: function() {
    return getInsurance(Session.get("currentId")).formatMoney(0);
  },
  downPaymentPercentage: function() {
    var id = Session.get("currentId");
    return (getDownPayment(id) * getPercentCapitalNeeded(id) / 100).formatMoney(2);
  },
  totalInvestment: function() {
    var id = Session.get("currentId");
    return ((getClosingRepair(id)
      + (getTotalPrice(id)
      * (getDownPayment(id) / 100)))
      * (getEquitySold(id) / 100) )
      .formatMoney(0);
  },
  hoa: function() {
    return getHOA(Session.get("currentId")).formatMoney(0);
  },
  downPaymentAmount: function() {
    var id = Session.get("currentId");
    return (getDownPaymentAmount(id)
      * getPercentCapitalNeeded(id) / 100 )
      .formatMoney(0);
  },
  rentPrice: function() {
    return (getRentPrice(Session.get("currentId")) * getEquitySold(Session.get("currentId")) / 100).formatMoney(0);
  },
  cashflowRented: function() {
    var operatingExpenses = getOperatingExpenses(Session.get("currentId"));
    var monthlyCostOfOwnership = operatingExpenses; // Does not include monthly mortgage expense, or cost of additional financing
    return ((getRentPrice(Session.get("currentId")) - monthlyCostOfOwnership) * getEquitySold(Session.get("currentId")) / 100).formatMoney(0);
  },
  cashflowOccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId") }).fetch();
    var equitySold = Number(temp[0].equitySold);

    var rentPrice = Number(temp[0].rentPrice);
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses;  // Does not include monthly mortgage expense, or cost of additional financing
    var cashflowOccupied = (rentPrice - monthlyCostOfOwnership) * equitySold / 100;

    return cashflowOccupied.formatMoney(0);
  },
  cashflowUnoccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId") }).fetch();
    var equitySold = Number(temp[0].equitySold);

    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses; // Does not include monthly mortgage expense, or cost of additional financing
    var cashflowUnoccupied =  (-1 * monthlyCostOfOwnership) * equitySold / 100;

    return cashflowUnoccupied.formatMoney(0);
  },
  afterTaxOccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId") }).fetch();
    var equitySold = Number(temp[0].equitySold);

    var depreciation = (Number(temp[0].totalPrice) * 0.8 / 360);
    var tax = Number(temp[0].taxes) / 12;
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var additionalFinancing = 0;               // Not filled in
    var monthlyMortgageExpense = 0;            // Not filled in
    var unoccupied = (Number(monthlyMortgageExpense) * 0.73) + operatingExpenses + depreciation + additionalFinancing;
    var rented = (unoccupied - Number(temp[0].rentPrice));
    var rentedWriteoffs = Number(rented) * 0.35;
    var unoccupiedWriteoffs = Number(unoccupied) * 0.35;

    var monthlyCostOfOwnership = operatingExpenses; // Does not include monthly mortgage expense, or cost of additional financing
    var rentPrice = Number(temp[0].rentPrice);
    var cashflowRented = rentPrice - monthlyCostOfOwnership;

    var afterTaxWithRenters = (cashflowRented + rentedWriteoffs) * equitySold / 100;
    return afterTaxWithRenters.formatMoney(0);
  },
  afterTaxUnoccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId") }).fetch();
    var equitySold = Number(temp[0].equitySold);

    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses; // Does not include monthly mortgage expense, or cost of additional financing
    var cashflowUnoccupied =  -1 * monthlyCostOfOwnership;

    var depreciation = (Number(temp[0].totalPrice) * 0.8 / 360);
    var tax = Number(temp[0].taxes) / 12;
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var additionalFinancing = 0;               // Not filled in
    var monthlyMortgageExpense = 0;            // Not filled in
    var unoccupied = (Number(monthlyMortgageExpense) * 0.73) + operatingExpenses + depreciation + additionalFinancing;
    var rented = (unoccupied - Number(temp[0].rentPrice));
    var rentedWriteoffs = Number(rented) * 0.35;
    var unoccupiedWriteoffs = Number(unoccupied) * 0.35;

    var afterTaxUnoccupied = (cashflowUnoccupied + unoccupiedWriteoffs) * equitySold / 100;
    return afterTaxUnoccupied.formatMoney(0);
  },
  freeCashFlow: function() {
    var temp = TermSheet.find({ property: Session.get("currentId") }).fetch();
    var equitySold = Number(temp[0].equitySold);

    var rentPrice = Number(temp[0].rentPrice);
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses;  // Does not include monthly mortgage expense, or cost of additional financing
    var cashflowOccupied = rentPrice - monthlyCostOfOwnership;

    var monthlyTaxAverage = (temp[0].taxes / 12);

    var freeCashflow = (cashflowOccupied + monthlyTaxAverage) * equitySold / 100; // Are you sure you want to add tax, not subtract it?
    return freeCashflow.formatMoney(0);
  },
  monthlyMortgageExpense: function() {
    return 0;                                 // Has not been filled in
  },
  monthlyTaxAverage: function() {
    var temp = TermSheet.find({ property: Session.get("currentId") }).fetch();

    var equitySold = Number(temp[0].equitySold);

    var monthlyTaxAverage = (Number(temp[0].taxes) / 12) * equitySold / 100;
    return monthlyTaxAverage.formatMoney(0);
  },
  operatingExpenses: function() {
    var temp = TermSheet.find({ property: Session.get("currentId") }).fetch();

    var equitySold = Number(temp[0].equitySold);
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05)) * equitySold / 100;
    return operatingExpenses.formatMoney(0);
  },
  reserve: function() {
    var temp = TermSheet.find({ property: Session.get("currentId") }).fetch();
    var equitySold = Number(temp[0].equitySold);

    var reserve = (Number(temp[0].rentPrice) * 0.05) * equitySold / 100;

    return reserve.formatMoney(0);
  },
  costOfOwnership: function() {
    var temp = TermSheet.find({ property: Session.get("currentId") }).fetch();
    var equitySold = Number(temp[0].equitySold);

    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses * equitySold / 100; // Does not include monthly mortgage expense, or cost of additional financing

    return monthlyCostOfOwnership.formatMoney(0);

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
