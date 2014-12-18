Calculator = new Mongo.Collection(null);

Template.calculator.rendered = function() {
  Calculator.remove({});
  Calculator.insert({ purchasePrice: 0, closingRepair: 0, monthlyIncome: 0, capRate: 0 });
};

Template.calculator.helpers({
  calculator: function() {
    return Calculator.find({});
  },

  editingTotalPriceCalc: function() {
    return (Session.get("editingTotalPriceCalc"));
  },
  editingClosingRepairCalc: function() {
    return (Session.get("editingClosingRepairCalc"));
  },
  editingMonthlyIncomeCalc: function() {
    return (Session.get("editingMonthlyIncomeCalc"));
  }
  // editingCAPRateCalc: function() {
  //   return (Session.get("editingCAPRateCalc"));
  // }


});



Template.calculator.events({
  'click #purchase-price-div': function(e,t) {
    Session.set("editingTotalPriceCalc", true);
  },
  'click #closing-repair-div': function(e,t) {
    Session.set("editingClosingRepairCalc", true);
  },
  'click #monthly-income-div': function(e,t) {
    Session.set("editingMonthlyIncomeCalc", true);
  },
  // 'click #cap-rate-div': function(e,t) {
  //   Session.set("editingCAPRateCalc", true);
  // },


  'keypress input#purchase-price': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingTotalPriceCalc", false);
    }
  },
  'keypress input#closing-repair': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingClosingRepairCalc", false);
    }
  },
  'keypress input#monthly-income': function(e,t) {
    if (e.keyCode === 13) {
      Session.set("editingMonthlyIncomeCalc", false);
    }
  }
  // 'keypress input#cap-rate': function(e,t) {
  //   if (e.keyCode === 13) {
  //     Session.set("editingCAPRateCalc", false);
  //   }
  // }



});


// 'click #total-price-div': function(e,t) { Session.set("editingTotalPrice", true); },
