Meteor.publish("properties", function () {
  return Properties.find({ owner: this.userId});
});

Meteor.publish("images", function () {
  return Images.find({ owner: this.userId});
});

Meteor.publish("termSheet", function () {
  return TermSheet.find({ owner: this.userId });
});

Meteor.publish("directory", function () {
  return Meteor.users.find({}, {fields: {profile: 1, _id: 1}}); // Eventually this will only have admin access
});
