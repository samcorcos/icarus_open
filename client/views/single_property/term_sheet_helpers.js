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
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses; // Does not include monthly mortgage expense, or cost of additional financing
    return monthlyCostOfOwnership.formatMoney(0);
  },
  cashflowRented: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses; // Does not include monthly mortgage expense, or cost of additional financing
    var rentPrice = Number(temp[0].rentPrice);
    var cashflowRented = rentPrice - monthlyCostOfOwnership;
    return cashflowRented.formatMoney(0);
  },
  cashflowOccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var rentPrice = Number(temp[0].rentPrice);
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses;  // Does not include monthly mortgage expense, or cost of additional financing
    var cashflowOccupied = rentPrice - monthlyCostOfOwnership;
    return cashflowOccupied.formatMoney(0);
  },
  cashflowUnoccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses; // Does not include monthly mortgage expense, or cost of additional financing
    var cashflowUnoccupied =  -1 * monthlyCostOfOwnership;
    return cashflowUnoccupied.formatMoney(0);
  },
  afterTaxWithRenters: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
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

    var afterTaxWithRenters = cashflowRented + rentedWriteoffs;
    return afterTaxWithRenters.formatMoney(0);
  },
  afterTaxUnoccupied: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
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

    var afterTaxUnoccupied = cashflowUnoccupied + unoccupiedWriteoffs;
    return afterTaxUnoccupied.formatMoney(0);
  },
  freeCashflow: function() {
    var temp = TermSheet.find({ property: Session.get("currentId")._id }).fetch();
    var rentPrice = Number(temp[0].rentPrice);
    var operatingExpenses = (Number((temp[0].taxes / 12)) + Number(temp[0].hoa) + Number(temp[0].insurance) + Number((temp[0].rentPrice) * 0.05));
    var monthlyCostOfOwnership = operatingExpenses;  // Does not include monthly mortgage expense, or cost of additional financing
    var cashflowOccupied = rentPrice - monthlyCostOfOwnership;

    var monthlyTaxAverage = (temp[0].taxes / 12);

    var freeCashflow = cashflowOccupied + monthlyTaxAverage;
    return freeCashflow.formatMoney(0);
  }



});
