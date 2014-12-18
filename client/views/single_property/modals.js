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
    var downPaymentAmount = (Number(temp[0].totalPrice) * Number(temp[0].downPayment) / 100);
    var percentCapitalNeeded = Number(temp[0].percentCapitalNeeded / 100);

    return (downPaymentAmount * percentCapitalNeeded).formatMoney(0);
  },
  rentPrice: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var equitySold = Number(temp[0].equitySold);
    var rentPrice = Number(temp[0].rentPrice) * equitySold / 100;

    return rentPrice.formatMoney(0);
  },
  cashflowRented: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var equitySold = Number(temp[0].equitySold);

    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses; // Does not include monthly mortgage expense, or cost of additional financing
    var rentPrice = Number(temp[0].rentPrice);
    var cashflowRented = (rentPrice - monthlyCostOfOwnership) * equitySold / 100;

    return cashflowRented.formatMoney(0);
  },
  cashflowOccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var equitySold = Number(temp[0].equitySold);

    var rentPrice = Number(temp[0].rentPrice);
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses;  // Does not include monthly mortgage expense, or cost of additional financing
    var cashflowOccupied = (rentPrice - monthlyCostOfOwnership) * equitySold / 100;

    return cashflowOccupied.formatMoney(0);
  },
  cashflowUnoccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var equitySold = Number(temp[0].equitySold);

    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses; // Does not include monthly mortgage expense, or cost of additional financing
    var cashflowUnoccupied =  (-1 * monthlyCostOfOwnership) * equitySold / 100;

    return cashflowUnoccupied.formatMoney(0);
  },
  afterTaxOccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
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
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
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
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
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
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();

    var equitySold = Number(temp[0].equitySold);

    var monthlyTaxAverage = (Number(temp[0].taxes) / 12) * equitySold / 100;
    return monthlyTaxAverage.formatMoney(0);
  },
  operatingExpenses: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();

    var equitySold = Number(temp[0].equitySold);
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05)) * equitySold / 100;
    return operatingExpenses.formatMoney(0);
  },
  reserve: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var equitySold = Number(temp[0].equitySold);

    var reserve = (Number(temp[0].rentPrice) * 0.05) * equitySold / 100;

    return reserve.formatMoney(0);
  },
  costOfOwnership: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
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
