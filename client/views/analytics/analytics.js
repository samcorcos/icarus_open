Template.analytics.rendered = function() {
  createTimeline();
  createAssetAllocation();
  $('.tooltipped').tooltip({"delay": 50});

  Meteor.setTimeout(function() {
    $(".analytics-card").addClass("card-show")
  }, 150);

};


//
// Get the number of days since purchase date
// Get all payments of particular type (from the purchase date, which means all of them)
// Then, divide:     360/<days since purchse> * <all payments>
// That will give you the annualized return from that investment type
//
// Then, use that number to divide by the totalCost (purchase + repair) to get the annual rate of return.
//



///////These are functions for getting data////////
///////////////////////////////////////////////////


//
// getAnnualizedReturns = function() {
//   var propAndDaysArray = getPropertiesAndDays();
//   propAndDaysArray.forEach(function(propAndDays) {
//     var terms = TermSheet.find({ property: propAndDays.propertyId}).fetch()[0] // It has now found the property that has the currentId of the property.
//     var total = Number(terms.totalPrice) + Number(terms.closingRepair)
//     propAndDays.purchasePrice = total;
//   })
// s}
//
// getPayments = function(propertyId, paymentType) { // eg  getPayments("KeRvBxnf2TgnNRjgR", "Debt");
//   var total = 0;
//   Returns.find().fetch()[0].payments.forEach(function(payment) {
//     if (payment.returnType == paymentType) {
//       total += Number(payment.amount);
//       console.log("type match"); // When they match, add "payment.amount" to total, then return total
//     }
//   })
//   return total;
// }
//
//
// // This function will give you the total amount that your property value has increased, regardless of the time period.
// getTotalAssetAppreciation = function() {
//   var total = 0;
//
//   Properties.find().fetch().forEach(function(property) {
//     var currentId = property._id;
//     if (TermSheet.find({ property: currentId}).fetch()[0]) {
//       var zestimate = Number(property.zestimate);
//
//       var temp = TermSheet.find({ property: currentId}).fetch()[0];
//
//       var closingRepair = Number(temp.closingRepair);
//       var totalPrice = Number(temp.totalPrice);
//       var price = closingRepair + totalPrice;
//       total += (zestimate - price);
//     }
//   })
//   return total;
// }
//
//
//
//
//
// Template.returnOnInvestment.helpers({
//   totalAssetAppreciationPercent: function() {
//     var total = 0;
//     var zest = 0;
//
//     getAnnualizedReturns();
//
//     Properties.find().fetch().forEach(function(property) {
//       var currentId = property._id;
//       if (TermSheet.find({ property: currentId}).fetch()[0]) {
//         var zestimate = Number(property.zestimate);
//
//         var temp = TermSheet.find({ property: currentId}).fetch()[0];
//         var closingRepair = Number(temp.closingRepair);
//         var totalPrice = Number(temp.totalPrice);
//         var price = closingRepair + totalPrice;
//
//         zest += zestimate;
//         total += price;
//       }
//     })
//
//     var percent = zest / total * 100;
//
//     return percent.formatMoney(2);
//   },
//   totalAssetAppreciation: function() {
//     return getTotalAssetAppreciation().formatMoney(0);
//   },
//   annualizedAssetAppreciation: function() {
//     var total = 0;
//     Properties.find().fetch().forEach(function(property) {
//       var daysSincePurchase = getDaysSincePurchase(property);
//       var appreciation = getTotalAssetAppreciation();
//       var divisor = -365 / daysSincePurchase;
//
//       total += (appreciation * divisor);
//     })
//     return total.formatMoney(0);
//   },
//   annualizedReturns: function() {
//     return ;
//   },
//   annualizedLoanReturns: function() {
//     var total = 0;
//     return ;
//   },
//   annualizedEquityReturns: function() {
//     return ;
//   }
// });

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
