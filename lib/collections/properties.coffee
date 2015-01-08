@Properties = new Meteor.Collection 'properties'

if Meteor.isServer
  Meteor.publish 'properties', ->
    Properties.find owners: $in: _id: @userId

if Meteor.isClient
  Meteor.subscribe 'properties'

  Properties.allow
  insert: (userid, doc) ->

    # return (userid && doc.owner === userid);
    true

  update: (userId, docs, fields, modifier) ->

    # return _.all(docs, function(doc) {
    #   return doc.owner === userId;
    # })
    true

  remove: (userId, docs) ->

    # return _.all(docs, function(doc) {
    #   return doc.owner === userId;
    # })
    true

  Properties.deny
    insert: (userId, doc) ->

    update: (userId, docs, fields, modifier) ->

    remove: (userId, docs) ->
