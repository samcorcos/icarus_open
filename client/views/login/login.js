Template.login.helpers({
  creatingAccount: function() {
    return Session.get("creatingAccount");
  }
})

Template.login.events({
  'click #loginForm': function(e,t) {
    Session.set("creatingAccount", false);
  },
  'click #accountForm': function(e,t) {
    Session.set('creatingAccount', true);
  },
  'click #createAccount': function(e,t) {
    Session.set('creatingAccount', false); // If the user logs out, we want them to see the login form, instead of the create account form next time they click on the button.
      Accounts.createUser({                 // If we pass the following into the "createUser" function, which Meteor gives us, we will not only create a user, but the user will also be logged in.
      username: t.find("#username").value,
      password: t.find("#password").value,
      email: t.find("#email").value,
      profile: {
        name: t.find("#name").value
      }
    });
  },
  'click #logout': function(e,t) {
    Meteor.logout(); // This is another handy function that Meteor gives us for handling users.
  },
  'click #login': function(e,t) {
    Meteor.loginWithPassword(t.find("#username").value, t.find("#password").value); // We are using "Meteor.loginWithPassword", which is a built in function, because we can also use things like "Meteor.loginWithTwitter" or any other third party login if you have that set up.
  },
  'keypress input': function(e,t) {
    if (e.keyCode === 13) {
      Meteor.loginWithPassword(t.find("#username").value, t.find("#password").value);
    }
  }
})
