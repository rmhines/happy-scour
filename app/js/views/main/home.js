'use strict';

var app = require('../../shared/app');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
	template: app.templates['main/home'],
	el: '#main',

	render: function () {
		console.log('Rendering home view');

		this.$el.html(this.template({
			spots: app.spots.toJSON()
		}));
	},

	initialize: function () {
		console.log('Initializing home view');
	}
});