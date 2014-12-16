Images = new Mongo.Collection("images");

// Meteor.subscribe("properties", "owner");

Images.allow({
  insert: function(userId, doc) {
    return (userId && doc.owner === userId);
  },
  update: function(userId, docs, fields, modifier) {
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

Images.deny({

  insert: function(userId, doc) {

  },
  update: function(userId, docs, fields, modifier) {
    return (fields.indexOf("owner") > -1)
  },
  remove: function(userId, docs) {

  }
});
