Properties = new Mongo.Collection("properties");

// Meteor.subscribe("properties", "owner");

Properties.allow({
insert: function(userid, doc) {
  return (userid && doc.owner === userid);
},
update: function(userId, docs, fields, modifier) {
  // docs is the entire doc (object) that is being modified
  // fields are the fields being modified. So, for example, if we're changing the "name" field of someone, it would show ['name']
  // the modifier is the mongo command that was passed in, for example: { '$set': { price: '$10.00'} }

  return _.all(docs, function(doc) {
    return doc.owner === userId;
  })
},
remove: function(userId, docs) {
  return _.all(docs, function(doc) {
    return doc.owner === userId;
  })
}
});

Properties.deny({
  insert: function(userId, doc) {

  },
  update: function(userId, docs, fields, modifier) {
    return (fields.indexOf("owner") > -1)
  },
  remove: function(userId, docs) {

  }
});
