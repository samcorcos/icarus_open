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
	this.route("analytics", {path: "/analytics", controller: "AnalyticsController"});
	this.route("upload", {path: "/upload", controller: "UploadController"});
});


Router.route("/properties/:_id", {
	name: 'singleProperty',
	data: function() { return Properties.findOne(this.params._id); },  // Session.set("currentId", Properties.findOne(this.params._id));
	controller: "SinglePropertyController"
});
