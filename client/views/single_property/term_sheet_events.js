Template.singlePropertyTermSheet.events({
  'click #total-price-div': function(e,t) {
    console.log(this._id)
  },
  'click #add-term-sheet-button': function(e,t) {
    $(".flex-white-div-term-sheet").toggleClass("add-flex-div-show");
    $(".red-break-term-sheet").toggleClass("add-red-break-show");
    TermSheet.insert({ "owner": Meteor.userId(), "property": window.location.href.match(/(\/properties\/)(\w+)/)[2], "totalPrice": 0, "downPayment": 0, "closingRepair": 0, "apr": 0, "taxes": 0, "hoa": 0, "insurance": 0, "rentPrice": 0, "squareFootage": 0 });
    $(".flex-white-div-term-sheet-button").toggleClass("add-flex-div-hide");
    $(".red-break-term-sheet-button").toggleClass("add-red-break-hide");
  }
});
