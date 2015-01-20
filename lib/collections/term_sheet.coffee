@TermSheets = new Mongo.Collection 'termSheets'

if Meteor.isServer
  Meteor.publish 'termSheets', ->
    TermSheets.find()

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

  Schema = {}
  Schema.TermSheet = new SimpleSchema
    apr:
      type: Number
      label: "Annual Percentage Rate"
    closingRepair:
      type: Number
      label: "Closing and Repair Cost"
    downPayment:
      type: Number
      label: "Down Payment Percentage"
    equitySold:
      type: Number
      label: "Equity Sold Percentage"
    hoa:
      type: Number
      label: "Home Owners Association Fees"
    insurance:
      type: Number
      label: "Insurance Cost"
    owner:
      type: Schema.UserProfile
      label: "Owner"
    percentCaptialNeeded:
      type: Number
      label: "Percent Capital Needed"
    property:
      type: [Schema.Property]
      label: "Property"
    rentPrice:
      type: Number
      label: "Expected Rental Price"
    squareFootage:
      type: Number
      label: "Property Square Footage"
    taxes:
      type: Number
      label: "Expected Taxes"
    propertyPrice: # I changed this from totalPrice, so this will break a lot of things
      type: Number
      label: "Property Purchase Price"

      # Would be nice to create a virtual here to add several things together right off the bat.



  #Need to attach this schema

if Meteor.isClient
  Meteor.subscribe 'termSheets'
