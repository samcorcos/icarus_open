Meteor.publish("images", function () {
  return Images.find({ owner: this.userId });
});

Meteor.publish("termSheet", function () {
  return TermSheet.find({});
});

Meteor.publish("directory", function () {
  return Meteor.users.find({}, { fields: { profile: 1, _id: 1 } }); // Eventually this will only have admin access
});

Meteor.publish("returns", function() {
  return Returns.find({ owner: this.userId });
})

// Meteor.publish("properties", function() {
//   Properties.find({ owners: {$in: { _id: this.userId}}})
// })
