Template.analytics.rendered = function() {
  createTimeline();
  createAssetAllocation();
  $('.tooltipped').tooltip({"delay": 50});


};



Template.assetAllocation.helpers({
  loan: function() {
    var tempArray = TermSheet.find().fetch();
    var loan;
    tempArray.forEach(function(prop) {
      loan += (Number(prop.totalPrice) + Number(prop.closingRepair)) * Number(prop.equitySold) / 100;
    })
    return loan;
  },
  equity: function() {
    return
  }
});

Template.returnOnInvestment.helpers({
  zestimate: function() {
    var temp = Session.get("zestimate");
    return Number(temp).formatMoney(0);
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
