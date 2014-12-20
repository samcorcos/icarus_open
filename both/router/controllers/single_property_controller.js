this.SinglePropertyController = RouteController.extend({
	template: "singleProperty",
	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},
	onBeforeAction: function() {
		filepicker.setKey('ACZTMJqmFR7K1eeuAVsurz');
		this.next();
	},
	action: function() {
		this.render();
		/*ACTION_FUNCTION*/
	},
	waitOn: function() {
		Session.set("currentId", this.params._id);
		return Meteor.subscribe("properties");
	},
	data: function() {
		return {
			params: this.params || {}
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});
