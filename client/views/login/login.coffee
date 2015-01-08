Template.login.helpers
  creatingAccount: -> Session.get "creatingAccount"

Template.login.events
  'click #loginForm': (e,t) ->
    Session.set("creatingAccount", false)
    return
  'click #accountForm': (e,t) ->
    Session.set("creatingAccount", true)
    return
  'click #createAccount': (e,t) ->
    Session.set("creatingAccount", false)
    Accounts.createUser
      username: t.find('#username').value
      password: t.find('#password').value
      email: t.find('#email').value
      profile:
        name: t.find('#name').value
    return
  'click #logout': (e,t) ->
    Meteor.logout()
    return
  'click #login': (e,t) ->
    Meteor.loginWithPassword(t.find('#username').value, t.find('#password').value)
    return
  'keypress input.login-password': (e,t) ->
    Meteor.loginWithPassword(t.find('#username').value, t.find('#password').value) if e.keyCode is 13
    return
  'keypress input.new-account-password': (e,t) ->
    if e.keyCode is 13
      Session.set 'creatingAccount', false
      Accounts.createUser
        username: t.find('#username').value
        password: t.find('#password').value
        email: t.find('#email').value
        profile:
          name: t.find('#name').value
