Template.calculator.events({

  'keyup input#purchase-price': function(e,t) { //on keyup events, it needs to run an auto calculation of cap rate and everything else. This is the meat
    Calculator.update({ _id: this._id}, { $set: { purchasePrice: e.currentTarget.value }});

    var p = Calculator.find().fetch()[0].purchasePrice;
    var c = Calculator.find().fetch()[0].closingRepair;
    var m = Calculator.find().fetch()[0].monthlyIncome;
    var cap = Calculator.find().fetch()[0].capRate;

    var temp = ((Number(m)*12)/(Number(p)+Number(c))*100).formatMoney(2)

    Calculator.update({ _id: this._id}, { $set: { capRate: temp }});

  },

  'keyup input#closing-repair': function(e,t) {
    Calculator.update({ _id: this._id}, { $set: { closingRepair: e.currentTarget.value }});

    var p = Calculator.find().fetch()[0].purchasePrice;
    var c = Calculator.find().fetch()[0].closingRepair;
    var m = Calculator.find().fetch()[0].monthlyIncome;
    var cap = Calculator.find().fetch()[0].capRate;

    var temp = ((Number(m)*12)/(Number(p)+Number(c))*100).formatMoney(2)

    Calculator.update({ _id: this._id}, { $set: { capRate: temp }});

  },

  'keyup input#monthly-income': function(e,t) {
    Calculator.update({ _id: this._id}, { $set: { monthlyIncome: e.currentTarget.value }});

    var p = Calculator.find().fetch()[0].purchasePrice;
    var c = Calculator.find().fetch()[0].closingRepair;
    var m = Calculator.find().fetch()[0].monthlyIncome;
    var cap = Calculator.find().fetch()[0].capRate;

    var temp = ((Number(m)*12)/(Number(p)+Number(c))*100).formatMoney(2)

    Calculator.update({ _id: this._id}, { $set: { capRate: temp }});

  },

  'keyup input#cap-rate': function(e,t) {

    // CAP rate is calculated by (monthly income * 12) / (closingRepair + purchasePrice)

    // Calculator.update({ _id: this._id}, { $set: { capRate: e.currentTarget.value }});
    //
    // var p = Calculator.find().fetch()[0].purchasePrice;
    // var c = Calculator.find().fetch()[0].closingRepair;
    // var m = Calculator.find().fetch()[0].monthlyIncome;
    // var cap = Calculator.find().fetch()[0].capRate;
    //
    // var temp = ((Number(m)*12)/(Number(p)+Number(c)))

    // Calculator.update({ _id: this._id}, { $set: { capRate: temp }});

  }

});
