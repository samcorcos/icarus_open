Router.configure
  layoutTemplate: "layout"
  notFoundTemplate: "notFound"
  loadingTemplate: "loading"

Router.map ->
  @route "home",
    path: "/"
    controller: "HomeController"
  @route 'about',
    path: '/about'
    controller: 'AboutController'
  @route 'calculatorBox',
    path: '/calculator'
  @route 'contact',
    path: '/contact'
  @route 'login',
    path: '/login'
    controller: 'LoginController'
  @route 'properties',
    path: '/properties'
    controller: 'PropertiesController'
  @route 'analytics',
    path: '/analytics'
    controller: 'AnalyticsController'

Router.route '/properties/:_id',
  name: 'singleProperty'
  data: ->
    Properties.findOne @params._id
  controller: 'SinglePropertyController'
