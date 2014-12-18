Meteor.subscribe("termSheet");

// return TermSheet.find({ property: Session.get("currentId")._id });


Template.singlePropertyTermSheet.rendered = function() {
  var currentPropertyId = Session.get("currentId");
  if (TermSheet.find({ property: currentPropertyId._id }).fetch()[0] !== undefined) {
    Session.set("termSheetButtonOn", false);
  } else { Session.set("termSheetButtonOn", true); }

  if (TermSheet.find({property: currentPropertyId._id}).fetch()[0] !== undefined ) {
    $(".flex-white-div-term-sheet").toggleClass("add-flex-div-show");
    $(".red-break-term-sheet").toggleClass("add-red-break-show");
  }
};






// var currentPropertyId = Session.get("currentId")._id;
