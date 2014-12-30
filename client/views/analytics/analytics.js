Template.analytics.rendered = function() {
  createTimeline();
  createAssetAllocation();
  $('.tooltipped').tooltip({"delay": 50});


};



Template.returnOnInvestment.helpers({
  totalAssetAppreciationPercent: function() {

  },
  averageMonthlyRentalReturns: function() {

  },
  totalAssetAppreciation: function() {

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
