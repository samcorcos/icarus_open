Template.home.rendered = function() {
  Session.set("investedCapital", 812344);
  createHomepageMap();
  Meteor.setTimeout(function() {
    $(".intro-card").addClass("card-show");
  }, 500)
};

Template.home.events({

});

Template.home.helpers({
  investedCapital: function() {
    var capital = Number(Session.get("investedCapital"))
    return capital.formatMoney(0);
  }
});

Meteor.setInterval(function() {
  Session.set("investedCapital", Session.get("investedCapital")+Math.random()*10)
}, 100)
