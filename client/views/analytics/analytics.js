Template.analytics.rendered = function() {
  createTimeline();
  createAssetAllocation();
  $('.tooltipped').tooltip({"delay": 50});


};

Template.returnOnInvestment.helpers({
  zestimate: function() {
    var temp = Session.get("zestimate");
    return Number(temp).formatMoney(0);
  }


// Go through all term sheets you own, compare prices paid to API call, ???, Profit
// I'm going to make sure the Zillow API values are stored in the database. It can be updated with the push of a button.


});

Template.analytics.events({
  'click #update-data-button': function(e,t) {
    var termSheets = TermSheet.find().fetch();
    var temp = [];

    termSheets.forEach(function(sheet) {
      temp.push(sheet.zpid);
    });
    console.log(temp);

    // Meteor.call("getProperty", "63706372", function(err, zest) {
    //   if (err) { console.log("Error with Zillow API Call") }
    //
    //   Session.set("zestimate", zest);
    //   console.log("Zillow API Call Successful");
    //
    // })
  }
});

// zpid for place in chicago
// 63706372

// Below is a sample call to the API for zpid 48749425:
// http://www.zillow.com/webservice/GetZestimate.htm?zws-id=<ZWSID>&zpid=48749425
