Template.analytics.rendered = function() {
  createTimeline();
  createAssetAllocation();
  $('.tooltipped').tooltip({"delay": 50});

//   Meteor.call("getTweets", "javascript", function(err, tweets) { // in this case, we are running the "getTweets" method, then passing in the search term "javascript", then a callback
//   Session.set("tweets", tweets);
//   var d = new Date();
//   Session.set("latestRefresh", "" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); // In this case, we are starting off with an empty string because d.getHours() returns a number, not a string, so we wouldn't be able to concatenate the strings with numbers if we didnt initialize it as a string.
// })


  Meteor.call("getProperty", "63706372", function(err, zest) {
    if (err) { console.log("error") }

    Session.set("zestimate", zest);
    console.log("success")

  })
};

Template.returnOnInvestment.helpers({
  zestimate: function() { return Session.get("zestimate"); }

});

Template.analytics.events({

});

// zpid for place in chicago
// 63706372

// Below is a sample call to the API for zpid 48749425:
// http://www.zillow.com/webservice/GetZestimate.htm?zws-id=<ZWSID>&zpid=48749425
