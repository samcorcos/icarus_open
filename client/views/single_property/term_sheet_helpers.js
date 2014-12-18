Template.singlePropertyTermSheet.helpers({
  termSheet: function() {
    return TermSheet.find({ property: window.location.href.match(/(\/properties\/)(\w+)/)[2] });
  },
  termSheetActive: function() {
    return Session.get("termSheetActive");
  }
});
