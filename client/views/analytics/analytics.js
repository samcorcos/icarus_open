Template.analytics.rendered = function() {
  createTimeline();
  createAssetAllocation();
  $('.tooltipped').tooltip({"delay": 50});

};

Template.analytics.helpers({

});

Template.analytics.events({

});

// zpid for place in chicago
// 63706372

// Below is a sample call to the API for zpid 48749425:
// http://www.zillow.com/webservice/GetZestimate.htm?zws-id=<ZWSID>&zpid=48749425
