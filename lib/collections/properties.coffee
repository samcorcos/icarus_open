@Properties = new Mongo.Collection 'properties'

if Meteor.isServer
  Meteor.publish 'properties', ->
    Properties.find owners: $elemMatch: _id: @userId

  Properties.allow
    insert: (userId, doc) ->
      true

    update: (userId, docs, fields, modifier) ->
      true

    remove: (userId, docs) ->
      true

  Properties.deny
    insert: (userId, doc) ->

    update: (userId, docs, fields, modifier) ->

    remove: (userId, docs) ->


  Schema = {}
  Schema.Property = new SimpleSchema
    bath:
      type: String
      label: "Bath"
    bed:
      type: String
      label: "Bed"
    city:
      type: String
      label: "City"
    imagesArray:
      type: [String]
      label: "Images"
    lat:
      type: String
      label: "Latitude"
    long:
      type: String
      label: "Longitude"
    lotSizeSqft:
      type: String
      label: "Lot Size Square Feet"
    owners:
      type: [Schema.UserProfile]
      label: "Owners"
    purchaseDate:
      type: String
      label: "Purchase Date"
    returns:
      type: [Schema.Returns]
    rooms:
      type: String
      label: "Number of Rooms"
    sqft:
      type: String
      label: "Square Feet"
    state:
      type: String
      label: "State"
    street:
      type: String
      label: "Street"
    termSheet:
      type: Schema.TermSheet
      label: "Term Sheet"
    yearBuilt:
      type: String
      label: "Year Built"
    zestimate:
      type: String
      label: "Zestimate"
    zip:
      type: String
      label: "ZIP Code"
    zpid:
      type: String
      label: "Zillow Property ID"

  #Need to attach this schema



if Meteor.isClient
  Meteor.subscribe 'properties'
