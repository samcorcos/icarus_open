Template.contact.rendered = ->
  Meteor.setTimeout ->
    $('.contact-card').addClass 'card-show'
  , 250
  return
