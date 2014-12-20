Meteor.publish("properties", function () {
  // return Properties.find({ owner: this.userId});
  // console.log(this.userId)
  return Properties.find({ owners: { $elemMatch: { _id: this.userId }} });
  // return Properties.find({})
});

Meteor.publish("images", function () {
  return Images.find({ owner: this.userId });
});

Meteor.publish("termSheet", function () {
  return TermSheet.find({});
});

Meteor.publish("directory", function () {
  return Meteor.users.find({}, { fields: { profile: 1, _id: 1 } }); // Eventually this will only have admin access
});
