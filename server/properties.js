// I want this to only publish properties that are owned by the currently logged in user.
// And if the admin is logged in, he needs to be able to see all


Meteor.autorun(function() {
  Meteor.publish("properties", function (userId) { //owner
    // console.log(this.userId);
    // console.log(Properties.find({ owner: this.userId }))
    return Properties.find({ owner: this.userId }); //
  });
})
