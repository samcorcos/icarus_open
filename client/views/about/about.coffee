Template.about.rendered = ->
  Meteor.setTimeout ->
    $('.lender-card').addClass 'card-show'
    return
  , 250
  Meteor.setTimeout ->
    $('.partner-card').addClass 'card-show'
    return
  , 500
  Meteor.setTimeout ->
    $('.buyer-card').addClass 'card-show'
    return
  , 750
  Meteor.setTimeout ->
    $('.finder-card').addClass 'card-show'
    return
  , 1000

Template.about.events {}

Template.about.helpers {}


Template.faq.rendered = ->
  $('.collapsible').collapsible()
  return
