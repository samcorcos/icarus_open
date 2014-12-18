Meteor.subscribe("termSheet");

// return TermSheet.find({ property: Session.get("currentId")._id });


Template.singlePropertyTermSheet.rendered = function() {

  var currentPropertyId = Session.get("currentId")._id;
  if (TermSheet.find({property: currentPropertyId}).fetch()[0] !== undefined ) {
    Session.set("termSheetActive", false);
  } else { Session.set("termSheetActive", true); }

  if (TermSheet.find({property: currentPropertyId}).fetch()[0] !== undefined ) {
    $(".flex-white-div-term-sheet").toggleClass("add-flex-div-show");
    $(".red-break-term-sheet").toggleClass("add-red-break-show");
  }

};

// var currentPropertyId = Session.get("currentId")._id;
