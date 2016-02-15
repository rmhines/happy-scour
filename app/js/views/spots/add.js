'use strict';

var app = require('../../shared/app');
var Backbone = require('backbone');
var Spot = require('../../models/spot');

module.exports = Backbone.View.extend({
	template: app.templates['spots/add'],
	el: '#main',
	events: {
		'click .btn-done': 'clickDone'
	},

	clickDone: function () {
		var spot = new Spot({
			name: this.$name.val(),
			website: this.$website.val(),
			type: this.$type.val(),
			theme: this.$theme.val()
		});

		spot.save().done(function () {
			app.router.navigate('home', { trigger: true });
		}).fail(function () {
			console.error('Failed to save new spot!');
		});
	},

	render: function () {
		console.log('Rendering spot add view');
		
		this.$el.html(this.template());

		this.$name = this.$el.find('.spot-add-name');
		this.$website = this.$el.find('.spot-add-website');
		this.$type = this.$el.find('.spot-add-type');
		this.$theme = this.$el.find('.spot-add-theme');
	},

	initialize: function (opts) {
		console.log('Initializing spot add view');
	}
});