Calculator = new Mongo.Collection(null);



Template.calculator.created = function() {
  Calculator.insert({ purchasePrice: 0, closingRepair: 0, monthlyIncome: 0, capRate: 0 });
};

Template.calculator.helpers({
  calculator: function() {
    return Calculator.find({});
  }
});

Template.calculator.events({
  'change #purchasePrice': function(e,t) {

  },
  'change #rehabCost': function(e,t) {

  },
  'change #monthlyIncome': function(e,t) {

  },
  'change #capRate': function(e,t) {

  }
});
