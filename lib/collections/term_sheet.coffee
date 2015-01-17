@TermSheets = new Mongo.Collection 'termSheets'

if Meteor.isServer
  Meteor.publish 'termSheets', ->
    termSheets.find()

  TermSheets.allow
    insert: (userId, doc) ->
      true
    update: (userId, docs, fields, modifiers) ->
      true
    remove: (userId, docs) ->
      true

  TermSheets.deny
    insert: (userId, docs) ->

    update: (userId, docs, fields, modifier) ->
      # return (fields.indexOf("owner") > -1)

    remove: (userId, docs) ->

  Schemas = {}
  Schemas.TermSheet = new SimpleSchema


  #Need to attach this schema



if Meteor.isClient
  Meteor.subscribe 'termSheets'
