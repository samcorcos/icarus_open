// var Calculator = new Mongo.Collection(null);

Template.calculator.rendered = function() {
  Session.set("purchasePrice", 0);
  Session.set("rehabCost", 0);
  Session.set("monthlyIncome", 0);
  Session.set("capRate", 0);
};

Template.calculatorOutput.helpers({
  purchasePrice: function() {
    return Session.get("purchasePrice");
  },
  rehabCost: function() {
    return Session.get("rehabCost");
  },
  monthlyIncome: function() {
    return Session.get("monthlyIncome");
  },
  capRate: function() {
    return Session.get("capRate");
  }
});

Template.calculator.events({
  'change #purchasePrice': function(e,t) {
    var purchasePrice = Number(Session.get("purchasePrice"));
    var rehabCost = Number(Session.get("rehabCost"));
    var monthlyIncome = Number(Session.get("monthlyIncome"));

    if (purchasePrice > 0 || rehabCost > 0 && monthlyIncome > 0) {
      Session.set("capRate", ((monthlyIncome * 12) / (purchasePrice + rehabCost) * 100).toFixed(2))
      console.log("running")
    }
    Session.set("purchasePrice", e.currentTarget.value);
  },
  'change #rehabCost': function(e,t) {
    var purchasePrice = Number(Session.get("purchasePrice"));
    var rehabCost = Number(Session.get("rehabCost"));
    var monthlyIncome = Number(Session.get("monthlyIncome"));

    if (purchasePrice > 0 || rehabCost > 0 && monthlyIncome > 0) {
      Session.set("capRate", ((monthlyIncome * 12) / (purchasePrice + rehabCost) * 100).toFixed(2))
      console.log("running")
    }
    Session.set("rehabCost", e.currentTarget.value);
  },
  'change #monthlyIncome': function(e,t) {
    var purchasePrice = Number(Session.get("purchasePrice"));
    var rehabCost = Number(Session.get("rehabCost"));
    var monthlyIncome = Number(Session.get("monthlyIncome"));

    if (purchasePrice > 0 || rehabCost > 0 && monthlyIncome > 0) {
      Session.set("capRate", ((monthlyIncome * 12) / (purchasePrice + rehabCost) * 100).toFixed(2))
      console.log("running")
    }
    Session.set("monthlyIncome", e.currentTarget.value);
  },
  'change #capRate': function(e,t) {
    var purchasePrice = Number(Session.get("purchasePrice"));
    var rehabCost = Number(Session.get("rehabCost"));
    var monthlyIncome = Number(Session.get("monthlyIncome"));

    if (purchasePrice > 0 || rehabCost > 0 && monthlyIncome > 0) {
      Session.set("capRate", ((monthlyIncome * 12) / (purchasePrice + rehabCost) * 100).toFixed(2))
      console.log("running")
    } else {
      Session.set("capRate", e.currentTarget.value);
    }
  }
});
