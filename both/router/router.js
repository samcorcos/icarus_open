Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

if(Meteor.isClient) {
	Router.onBeforeAction(function() {
		// loading indicator here
		if(!this.ready()) {
			$("body").addClass("wait");
		} else {
			$("body").removeClass("wait");
			this.next();
		}
	});
}

Router.map(function () {
	this.route("home", {path: "/", controller: "HomeController"});
	this.route("about", {path: "/about", controller: "AboutController"});
	this.route("calculator", {path: "/calculator", controller: "CalculatorController"});
	this.route("contact", {path: "/contact", controller: "ContactController"});
	this.route("login", {path: "/login", controller: "LoginController"});
	this.route("properties", {path: "/properties", controller: "PropertiesController"});
	this.route("singleProperty", {path: "/properties/:_id", controller: "SinglePropertyController"})
});
