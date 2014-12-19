Meteor.methods({
  getProperty: function(zpid) {
    var response = Meteor.http.call("GET", "http://www.zillow.com/webservice/GetZestimate.htm?zws-id=X1-ZWz1e01y8ugd8r_1brbp&zpid="+zpid);
    return response.content.match(/(<zestimate><amount currency="USD">)(\d+)/)[2];
  }
})

// ZWSID: X1-ZWz1e01y8ugd8r_1brbp

// zpid for place in chicago
// 63706372

// Below is a sample call to the API for zpid 48749425:
// http://www.zillow.com/webservice/GetZestimate.htm?zws-id=<ZWSID>&zpid=48749425
