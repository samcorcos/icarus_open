Template.analytics.rendered = function() {
  createTimeline();
  createAssetAllocation();
  $('.tooltipped').tooltip({"delay": 50});

  Meteor.setTimeout(function() {
    $(".analytics-card").addClass("card-show")
  }, 150)


};



Template.returnOnInvestment.helpers({
  totalAssetAppreciationPercent: function() {
    var total = 0;
    var zest = 0;

    Properties.find().fetch().forEach(function(property) {
      var currentId = property._id;
      var zestimate = Number(property.zestimate);

      var temp = TermSheet.find({ property: currentId}).fetch()[0];

      var closingRepair = Number(temp.closingRepair);
      var totalPrice = Number(temp.totalPrice);
      var price = closingRepair + totalPrice;

      zest += zestimate;
      total += price;
    })

    var percent = zest / total * 100;

    return percent.formatMoney(2);
  },
  averageMonthlyRentalReturns: function() {

  },
  totalAssetAppreciation: function() {
    var total = 0;

    Properties.find().fetch().forEach(function(property) {
      var currentId = property._id;
      var zestimate = Number(property.zestimate);

      var temp = TermSheet.find({ property: currentId}).fetch()[0];

      var closingRepair = Number(temp.closingRepair);
      var totalPrice = Number(temp.totalPrice);
      var price = closingRepair + totalPrice;
      total += (zestimate - price);
    })
    return total.formatMoney(0);
  },
  averageMonthlyLoanReturns: function() {

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
