Template.about.rendered = function() {
  Meteor.setTimeout(function() {
    $(".lender-card").addClass("card-show");
  }, 250);
  Meteor.setTimeout(function() {
    $(".partner-card").addClass("card-show");
  }, 500)
  Meteor.setTimeout(function() {
    $(".buyer-card").addClass("card-show");
  }, 750)
  Meteor.setTimeout(function() {
    $(".finder-card").addClass("card-show")
  }, 1000)
};

Template.about.events({

});

Template.about.helpers({

});

Template.faq.rendered = function() {
  $('.collapsible').collapsible();
};
