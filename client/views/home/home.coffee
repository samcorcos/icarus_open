Template.home.rendered = ->
  Session.set 'investedCapital', 812344
  createHomepageMap()
  Meteor.setTimeout (->
    $(".intro-card").addClass 'card-show'
    return
  ), 250

Template.home.helpers
  investedCapital: ->
    capital = Number Session.get('investedCapital')
    capital.formatMoney(0)

Meteor.setInterval (->
  Session.set 'investedCapital', Session.get('investedCapital') + Math.random() * 100
  return
), 2000
