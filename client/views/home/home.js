Template.home.rendered = function() {
  Session.set("investedCapital", 812344);
};

Number.prototype.formatMoney = function(c, d, t){
  var n = this,
  c = isNaN(c = Math.abs(c)) ? 2 : c,
  d = d == undefined ? "." : d,
  t = t == undefined ? "," : t,
  s = n < 0 ? "-" : "",
  i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
  j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
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
