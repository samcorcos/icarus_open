Template.singlePropertyTermSheet.rendered = function() {
  $('ul.tabs').tabs();
  $('.modal-trigger').leanModal();

  // Session.set("termSheetDashboard", "inputs");
  $(".inputs").toggleClass("add-flex-div-show");

  if (TermSheet.find({ property: Session.get("currentId") }).fetch()[0] !== undefined) {
    Session.set("termSheetButtonOn", false);
  } else { Session.set("termSheetButtonOn", true); }

  if (TermSheet.find({property: Session.get("currentId") }).fetch()[0] !== undefined ) {
    $(".flex-white-div-term-sheet").toggleClass("add-flex-div-show");
    $(".red-break-term-sheet").toggleClass("add-red-break-show");
  }
};
