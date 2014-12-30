Returns = new Mongo.Collection("returns");

// Meteor.subscribe("properties", "owner");

Returns.allow({
  insert: function(userId, doc) {
    return true;
    // return (userId && doc.owner === userId);
  },
  update: function(userId, docs, fields, modifier) {
    return true;
  },
  //   return _.all(docs, function(doc) {
  //     return doc.owner === userId;
  //   })
  // },
  remove: function(userId, docs) {
    return true;
  }
  // remove: function(userId, docs) {
  //   return _.all(docs, function(doc) {
  //     return doc.owner === userId;
  //   })
  // }
});

Returns.deny({

  insert: function(userId, doc) {

  },
  update: function(userId, docs, fields, modifier) {
    return (fields.indexOf("owner") > -1)
  },
  remove: function(userId, docs) {

  }
});
