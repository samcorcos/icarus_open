TermSheet = new Mongo.Collection("termSheet");

// Meteor.subscribe("properties", "owner");

TermSheet.allow({
  insert: function(userId, doc) {
    return (userId && doc.owner === userId);
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

TermSheet.deny({

  insert: function(userId, doc) {

  },
  update: function(userId, docs, fields, modifier) {
    return (fields.indexOf("owner") > -1)
  },
  remove: function(userId, docs) {

  }
});
