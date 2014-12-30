Template.analytics.rendered = function() {
  createTimeline();
  createAssetAllocation();
  $('.tooltipped').tooltip({"delay": 50});

  Meteor.setTimeout(function() {
    $(".analytics-card").addClass("card-show")
  }, 150)


};

getTotalAssetAppreciation = function() {
  var total = 0;

  Properties.find().fetch().forEach(function(property) {
    var currentId = property._id;
    if (TermSheet.find({ property: currentId}).fetch()[0]) {
      var zestimate = Number(property.zestimate);

      var temp = TermSheet.find({ property: currentId}).fetch()[0];

      var closingRepair = Number(temp.closingRepair);
      var totalPrice = Number(temp.totalPrice);
      var price = closingRepair + totalPrice;
      total += (zestimate - price);
    }
  })
  return total;
}


Template.returnOnInvestment.helpers({
  totalAssetAppreciationPercent: function() {
    var total = 0;
    var zest = 0;

    Properties.find().fetch().forEach(function(property) {
      var currentId = property._id;
      if (TermSheet.find({ property: currentId}).fetch()[0]) {
        var zestimate = Number(property.zestimate);

        var temp = TermSheet.find({ property: currentId}).fetch()[0];


        var closingRepair = Number(temp.closingRepair);
        var totalPrice = Number(temp.totalPrice);
        var price = closingRepair + totalPrice;

        zest += zestimate;
        total += price;
      }
    })

    var percent = zest / total * 100;

    return percent.formatMoney(2);
  },
  totalAssetAppreciation: function() {
    return getTotalAssetAppreciation().formatMoney(0);
  },
  annualizedAssetAppreciation: function() {
    var total = 0;
    Properties.find().fetch().forEach(function(property) {
      var purchaseDate = moment(property.purchaseDate);
      var today = moment();
      var diff = purchaseDate.diff(today, "days"); // this is always going to give you a negative number, in days away from today
      var appreciation = getTotalAssetAppreciation();
      var divisor = diff / -365;

      total += (appreciation / divisor);
    })
    return total.formatMoney(0);
  },
  annualizedReturns: function() {
    return ;
  },
  annualizedLoanReturns: function() {
    var total = 0;
    return ;
  },
  annualizedEquityReturns: function() {
    return ;
  }
});

Template.analytics.events({
  'click #update-data-button': function(e,t) {
    var termSheets = TermSheet.find().fetch();
    var temp = [];

    termSheets.forEach(function(sheet) {
      temp.push(sheet.zpid);
    });
    console.log(temp);

  }
});

// moment("2014-12-18T00:00:00-08:00").format("YYYY")
