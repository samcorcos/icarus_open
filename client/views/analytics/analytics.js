Template.analytics.rendered = function() {
  createTimeline();
  createAssetAllocation();
  $('.tooltipped').tooltip({"delay": 50});

  Meteor.call("getProperty", "63706372", function(err, zest) {
    if (err) { console.log("error") }

    Session.set("zestimate", zest);
    console.log("success");

  })
};

Template.returnOnInvestment.helpers({
  zestimate: function() {
    var temp = Session.get("zestimate");
    return Number(temp).formatMoney(0);
  }

// Go through all term sheets you own, compare prices paid to API call, ???, Profit


});

Template.analytics.events({

});

// zpid for place in chicago
// 63706372

// Below is a sample call to the API for zpid 48749425:
// http://www.zillow.com/webservice/GetZestimate.htm?zws-id=<ZWSID>&zpid=48749425
