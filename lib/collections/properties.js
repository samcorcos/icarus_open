Properties = new Mongo.Collection("properties");

// Meteor.subscribe("properties", "owner");

Properties.allow({
  insert: function(userid, doc) {
    // return (userid && doc.owner === userid);
    return true;
  },
  update: function(userId, docs, fields, modifier) {
    // return _.all(docs, function(doc) {
    //   return doc.owner === userId;
    // })
    return true;
  },
  remove: function(userId, docs) {
    // return _.all(docs, function(doc) {
    //   return doc.owner === userId;
    // })
    return true;
  }
});

Properties.deny({

  insert: function(userId, doc) {

  },
  update: function(userId, docs, fields, modifier) {
    // return (fields.indexOf("owner") > -1)
  },
  remove: function(userId, docs) {

  }
});
