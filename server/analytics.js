Meteor.methods({
  getProperty: function(zpid) {
    var response = Meteor.http.call("GET", "http://www.zillow.com/webservice/GetZestimate.htm?zws-id=X1-ZWz1e01y8ugd8r_1brbp&zpid="+zpid);
    // return response.content.match(/(<zestimate><amount currency="USD">)(\d+)/)[2];
    // console.log(parseString);
    // console.log(response);
    var temp;
    xml2js.parseString(response.content, function (err, result) {
      if(err) { console.log("error parsing string") }
      // console.log(result);
      // return result;
      temp = result;
    })
    return temp;

    // var parseString = require('xml2js').parseString;
    // var xml = "<root>Hello xml2js!</root>"
    // parseString(xml, function (err, result) {
    //   console.dir(result);
    // });
  }
})

// ZWSID: X1-ZWz1e01y8ugd8r_1brbp

// zpid for place in chicago
// 63706372

// Below is a sample call to the API for zpid 48749425:
// http://www.zillow.com/webservice/GetZestimate.htm?zws-id=<ZWSID>&zpid=48749425
